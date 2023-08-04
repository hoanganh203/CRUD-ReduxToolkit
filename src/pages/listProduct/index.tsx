import { Link } from "react-router-dom"
import { useGetProductsQuery, useRemoveProductMutation } from "../../queryApi";
import { IProduct } from "../../interfaces/product";

export const ListProduct = () => {
    const [removeProduct] = useRemoveProductMutation();
    const { data } = useGetProductsQuery();
    // const remove = (id: number | string) => {
    //     removeProduct(id);
    // }
    const remove = async (id: any) => {
        const res = await removeProduct(id);
        alert("Bạn đã xóa thành công");
    }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
                <td className="px-6 py-4">
                    <Link to="add" className="font-medium text-sky-600 dark:text-red-500 hover:underline">Add Product</Link>
                </td>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item: IProduct) => {
                            return (
                                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-32 p-4">
                                        <img src="https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-den-thumb-600x600.jpg" alt="Apple Watch" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {item.name}
                                    </td>

                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ${item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => remove(item.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                                        <Link to="update" className="font-medium text-blue-600 ml-4 dark:text-red-500 hover:underline">Update</Link>

                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}