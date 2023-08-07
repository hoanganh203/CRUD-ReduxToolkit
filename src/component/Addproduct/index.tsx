import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai"
import { useAddProductMutation } from "../../queryApi";
import { IProduct } from "../../interfaces/product";
import Notifications from "../Notifications";
import { useNavigate } from "react-router-dom";
import Upload from "../upload";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
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
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="font-bold text-center text-2xl my-2">Thêm sản phẩm</h1>
                    <div className="flex items-center justify-center gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-thite p-8 shadow-lg lg:col-span-3 lg:p-12 ">
                            <form className="space-y-4 " onSubmit={handleSubmit(onfinish)}>
                                <div>
                                    <label className="">Tên sản phẩm </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        {...register("name", { required: true })}

                                    />
                                    {errors.name && <span className="text-red-600">Tên sản phẩm không được để trống </span>}
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="" >Images</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Images..."
                                            type="file"
                                            {...register("file", { required: true })}
                                        />
                                        {errors.file && <span className="text-red-600">Ảnh không được để trống </span>}
                                    </div>

                                    <div>
                                        <label className="" >Giá sản phẩm </label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Price..."
                                            type="number"
                                            {...register("price", { required: true, maxLength: 10 })}
                                        />
                                        {errors?.price?.type === "required" && <p className="text-red-600">price  không được để  trông</p>}
                                        {errors?.price?.type === "maxLength" && (
                                            <p className="text-red-600">price không được để quá 10 số </p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="">Describe</label>
                                    <br />
                                    <textarea className="h-20 w-[100%] rounded-lg border-gray-200" {...register("describe", { required: true, maxLength: 500 })}>
                                    </textarea>
                                    <br />
                                    {errors?.describe?.type === "required" && <p className="text-red-600">describe  không được để  trông</p>}
                                    {errors?.describe?.type === "maxLength" && (
                                        <p className="text-red-600">Describe không được để quá 20 kí tự</p>
                                    )}
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