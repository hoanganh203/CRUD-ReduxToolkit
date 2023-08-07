import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../store"
import { useEffect, useState } from "react"

const OrderProduct = () => {
    const { itemOrder } = useSelector((state: RootState) => state.order)
    const [total, setTotal] = useState<number>(0)
    const [isDetail, setIsDetail] = useState<boolean>(false)

    useEffect(() => {
        if (itemOrder.length === 0) {
            return
        }
        setTotal(
            itemOrder.reduce(
                (accumulator: any, currentValue: any) =>
                    accumulator + currentValue.quanlity * currentValue.price, 0
            )
        )

    }, [itemOrder])

    return (
        <div>
            {isDetail ?
                <div className="z-10">
                    <table className="text-sm text-center mx-auto w-[900px] text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Tên
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giá
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ảnh
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số lượng
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Thành tiền
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemOrder.map((item: any, index: any) => {
                                return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {Number(item.price).toLocaleString("vi-VN", { minimumFractionDigits: 0 })} VNĐ
                                    </td>
                                    <td className="px-6 py-4">
                                        <img src={item.images} className="w-20 h-20 object-contain" alt="" />
                                    </td>

                                    <td className="px-6 py-10 flex ">
                                        <p className="px-2 py-2">{item.quanlity}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        {Number(item.intoMoney).toLocaleString("vi-VN", { minimumFractionDigits: 0 })} VNĐ
                                    </td>

                                </tr>
                            })}
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center">
                        <h2 className="text-center py-2 text-red-600">Tổng tiền :  {Number(total).toLocaleString("vi-VN", { minimumFractionDigits: 0 })} VNĐ</h2>
                        <button className="mx-2 underline" onClick={() => setIsDetail(false)}>Ẩn đơn hàng</button>
                    </div>
                </div> :
                <h2 className="text-center mt-5"> <span className="text-2xl">{itemOrder.length}</span> Item <span className="text-red-600">Tổng thanh toán : {Number(total).toLocaleString("vi-VN", { minimumFractionDigits: 0 })} VNĐ</span>
                    <button className="mx-2 underline" onClick={() => setIsDetail(true)}>Xem chi tiết đơn hàng</button>
                </h2>
            }



            <form className="w-[500px] mx-auto my-10">
                <h2 className="text-center text-2xl">Điền thông tin</h2>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                </div>
                <div className="relative w-full mb-6 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="radio" />
                    <label htmlFor="html">Thanh toán khi nhận hàng</label>
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    <h2 className="text-center py-2 text-red-600 ml-10">Tổng tiền :  {Number(total).toLocaleString("vi-VN", { minimumFractionDigits: 0 })} VNĐ</h2>
                </div>
            </form>




        </div>
    )
}

export default OrderProduct