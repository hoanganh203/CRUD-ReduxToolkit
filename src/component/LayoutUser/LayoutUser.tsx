import { Link } from "react-router-dom";
import "./LayoutUser.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useAppDispatch } from "../../app/store";
import Swal from "sweetalert2";
import { deleteCarts } from "../../sliceRedux/cart";
import { RiDeleteBinLine } from "react-icons/ri"
import { GiCancel } from "react-icons/gi"

function LayoutUser() {
    const { carts } = useSelector((state: RootState) => state.cart)
    const [isCart, setIsCart] = useState<boolean>(false)
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
        <header className=" header  bg-white">
            <div className=" flex  max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <img
                        width="100px"
                        src="https://iweb.tatthanh.com.vn/pic/3/blog/images/logo-shop-dien-thoai-7.jpg"
                        alt=""
                    />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                                >
                                    Tin Tức
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="input">
                        <div className="relative">
                            <label htmlFor="Search" className="sr-only">
                                Search
                            </label>

                            <input
                                type="text"
                                id="Search"
                                placeholder="Search for..."
                                className="w-full rounded-md  py-2.5 pe-10 shadow-sm sm:text-sm border border-gray-300 h-8"
                            />

                            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                <button
                                    type="button"
                                    className="text-gray-600 hover:text-gray-700"
                                >
                                    <span className="sr-only">Search</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                                href="/"
                            >
                                Login
                            </a>

                            <a
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                                href="/"
                            >
                                Sign Up
                            </a>
                        </div>

                        <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        <div>
                            {isCart ? <button className="relative mx-2 px-4 py-3 bg-teal-600 rounded-3xl hover:bg-white hover:text-green-500 text-white flex items-center justify-center" onClick={() => setIsCart(!isCart)}><GiCancel />
                                <span className="mx-1 px-3 py-1 rounded-full bg-red-500">{carts.length}</span>
                            </button> : <button className="relative mx-5 px-4 py-3 bg-teal-600 rounded-3xl hover:bg-white hover:text-green-500 text-white flex items-center justify-center" onClick={() => setIsCart(!isCart)}><AiOutlineShoppingCart />
                                <span className="mx-1 px-3 py-1 rounded-full bg-red-500">{carts.length}</span>
                            </button>}

                            {
                                isCart && <div className=" absolute bg-slate-100 shadow-3xl w-72 h-auto right-20 rounded-xl">
                                    {carts.length !== 0 ? <>
                                        {carts.map((item: any, index: any) => {
                                            return <span key={index}>
                                                <hr />
                                                <div className="flex items-center justify-center mt-2">
                                                    < p > <img className="w-10 h-10" src={item.images} alt="" /></p>
                                                    <p className="mx-2">{item.name}</p>

                                                </div>
                                                <td className="px-3 py-2 float-right bg-red-600 rounded-full text-white hover:bg-white hover:text-red-600">
                                                    <button onClick={() => deleteCart(item)}><RiDeleteBinLine /></button>
                                                </td>
                                                <p className="mx-5">Giá: {Number(item.price).toLocaleString("vi-VN", { minimumFractionDigits: 0 })} VNĐ</p>
                                                <p className="mx-5">Số lượng :{item.quanlity}</p>

                                            </span>
                                        })}
                                        <hr />
                                        <div className="flex items-center justify-center">
                                            <button className="px-2 py-1 bg-slate-400 text-sm rounded-3xl hover:text-slate-400 hover:bg-white" onClick={() => setIsCart(false)}> Cancel</button>
                                            <Link to="/cart"><p className="text-center my-2 mx-1 text-sm underline bg-blue-100 px-2 py-1 rounded-3xl hover:text-blue-300 hover:bg-white">Xem chi tiết</p></Link>
                                            <Link to="#"><p className="text-center my-2 text-sm underline bg-red-100 px-2 py-1 rounded-3xl hover:text-red-300 hover:bg-white">Thanh toán</p></Link>
                                        </div>
                                    </> : <>
                                        <h1 className="text-center underline">Giỏ hàng rỗng</h1>
                                    </>}


                                </div>
                            }

                        </div>



                    </div>
                </div >
            </div >
        </header >
    );
}


export default LayoutUser;
