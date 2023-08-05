import { RiDeleteBinLine } from "react-icons/ri"
import { AiOutlineMinus } from "react-icons/ai"
import { GrFormAdd } from "react-icons/gr"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useAppDispatch } from "../../app/store"
import { deCrement, deleteCarts, inCrement } from "../../sliceRedux/cart"
import Swal from "sweetalert2"



const AddToCart = () => {
    const { carts } = useSelector((state: RootState) => state.cart)
    const dispatch = useAppDispatch()
    const deleteCart = (item: any) => {
        Swal.fire({
            title: 'Delete?',
            text: "Bạn chắc là muốn xóa chứ!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đăng xuất'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCarts(item))
                Swal.fire(
                    'Xóa',
                    'Thành công',
                    'success'
                )
            }
        })
    }
    return (
        <div className="mb-40">
            <div className="flex py-4 px-5">
                <h1 className=" px-4 py-2 bg-red-800 rounded-2xl text-white">Giở Hàng</h1>
                <a href="/" className="mx-2 px-4 py-2 bg-green-800 text-white rounded-2xl hover:text-green-800 hover:bg-white">Tiếp tục mua hàng</a>
            </div>
            {carts.length !== 0 ? <>
                <div className=" overflow-x-auto z-10">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                                <th scope="col" className="px-6 py-3">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((item: any, index: any) => {
                                return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {Number(item.price).toLocaleString("vi-VN", { minimumFractionDigits: 0 })} VNĐ
                                    </td>
                                    <td className="px-6 py-4">
                                        <img src={item.images} className="w-20 h-20" alt="" />
                                    </td>

                                    <td className="px-6 py-10 flex ">
                                        <button className="py-1 px-2 text-white bg-red-500" onClick={() => dispatch(deCrement(item))}><AiOutlineMinus /></button>
                                        <p className="px-2 py-2">{item.quanlity}</p>
                                        <button className="p-1 px-2 text-white bg-blue-500" onClick={() => dispatch(inCrement(item))}><GrFormAdd /></button>
                                    </td>
                                    <td className="px-6 py-4">
                                        {Number(item.intoMoney).toLocaleString("vi-VN", { minimumFractionDigits: 0 })} VNĐ
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => deleteCart(item)}><RiDeleteBinLine /></button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>

            </> : <>
                <h1 className="text-center text-2xl">Giỏ hàng rồng <a href="/" className="text-blue-500 underline">Mua hàng tại đây ...</a></h1>
            </>}
            {/* <h2 className="text-center py-2">Tổng tiền :  {Number(total).toLocaleString("vi-VN", { minimumFractionDigits: 0 })} VNĐ</h2> */}
        </div>
    )
}

export default AddToCart