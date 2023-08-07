
import { AiOutlineLoading } from "react-icons/ai"
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductsByIdQuery, useUpdateProductsMutation } from "../../queryApi";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/product";
import Upload from "../upload";
import Notifications from "../Notifications";

const UpdateProduct = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data } = useGetProductsByIdQuery(Number(id));
    const [product, setProduct] = useState<IProduct>({
        name: '',
        price: 0,
        images: "",
        describe: "",
        stock: 0
    });
    const [updateProduct, { isLoading: isUpdateproduct }] = useUpdateProductsMutation();
    useEffect(() => {
        if (data) {
            setProduct({ ...data });
        }
    }, [data]);

    const uploadImages = async (e: any) => {
        Upload(e.target.files[0]).then((dataImg) => {
            setProduct({ ...product, images: dataImg })
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await updateProduct({ ...data, ...product }).unwrap().then(async () => {
            return Notifications("success", "Update sản phẩm thành công"),
                navigate("/admin")
        })
    };

    return (
        <>
            <section className="bg-gray-100 ">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className='text-center font-bold my-2 text-2xl'>Update sản phẩm</h1>
                    <div className="flex items-center justify-center gap-x-16 gap-y-8">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 w-[800px]">
                            <form onSubmit={handleSubmit} className="space-y-4 ">
                                <div>
                                    <label className="sr-only">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        value={product.name || ''}
                                        onChange={(event) =>
                                            setProduct({ ...product, name: event.target.value })
                                        }
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only">Images</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Images"
                                            type="file"
                                            onChange={uploadImages}
                                        />
                                    </div>
                                    <img src={product.images} alt="" className='w-32 h-32' />
                                    <div>
                                        <label className="sr-only">Price</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Price"
                                            type="number"
                                            value={product.price || ''}
                                            onChange={(event) =>
                                                setProduct({
                                                    ...product,
                                                    price: Number(event.target.value),
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="sr-only">stock</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="stcok"
                                        type="number"
                                        value={product.stock || ''}
                                        onChange={(event) =>
                                            setProduct({
                                                ...product,
                                                stock: Number(event.target.value),
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="sr-only">Describe</label>
                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Description"
                                        value={product.describe || ''}
                                        onChange={(event) =>
                                            setProduct({
                                                ...product,
                                                describe: event.target.value,
                                            })
                                        }
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <a href="/admin" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:bg-white hover:text-black">Back</a>

                                    {isUpdateproduct ? <button className="inline-block w-full rounded-lg bg-black ml-4 px-5 py-3 font-medium text-white sm:w-auto hover:bg-white hover:text-black">
                                        <AiOutlineLoading className="animate-spin" />
                                    </button> : <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black ml-4 px-5 py-3 font-medium text-white sm:w-auto hover:bg-white hover:text-black"
                                    >
                                        update Product
                                    </button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UpdateProduct