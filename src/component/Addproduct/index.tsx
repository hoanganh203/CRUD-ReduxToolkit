import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai"
import { useAddProductMutation } from "../../queryApi";
import { IProduct } from "../../interfaces/product";
import axios from "axios"
import Notifications from "../Notifications";
import { useNavigate } from "react-router-dom";
import Upload from "../upload";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [addProduct, { isLoading: isAddproduct }] = useAddProductMutation();
    const navigate = useNavigate()

    const onfinish = async (data: IProduct) => {
        try {
            Upload(data.file[0]).then((dataImg) => {
                const newData = { ...data, images: dataImg }
                addProduct(newData).unwrap().then(async () => {
                    return Notifications("success", "Thêm sản phẩm thành công"),
                        navigate("/admin")
                })
            })

        } catch (error: any) {
            Notifications("error", error.massage)

        }
    }
    return (
        <>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="font-bold text-center text-2xl my-2">Thêm sản phẩm</h1>
                    <div className="flex items-center justify-center gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 ">
                            <form className="space-y-4 " onSubmit={handleSubmit(onfinish)}>
                                <div>
                                    <label className="sr-only">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"

                                        {...register("name")}
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" >Images</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Images..."
                                            type="file"
                                            {...register("file")}
                                        />
                                    </div>


                                    <div>
                                        <label className="sr-only" >Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Price..."
                                            type="number"
                                            {...register("price")}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="sr-only" >Describe</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Describe..."
                                        type="text"
                                        {...register("describe")}
                                    />
                                </div>
                                <div className="mt-4">
                                    <a href="/admin" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:bg-white hover:text-black">Back</a>
                                    {isAddproduct ? <button className="inline-block w-full rounded-lg bg-black ml-4 px-5 py-3 font-medium text-white sm:w-auto hover:bg-white hover:text-black">
                                        <AiOutlineLoading className="animate-spin" />
                                    </button> : <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black ml-4 px-5 py-3 font-medium text-white sm:w-auto hover:bg-white hover:text-black"
                                    >
                                        Add Product
                                    </button>
                                    }


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default AddProduct