import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { useAppDispatch } from '../../app/store';
import { addToCart } from '../../sliceRedux/cart';
import Notifications from '../Notifications';
import { useGetProductsByIdQuery } from '../../queryApi';
import { useParams } from 'react-router-dom';
const DetailProuct = () => {
      const { id } = useParams<{ id: string }>();
      const { data } = useGetProductsByIdQuery(Number(id));
      const dispatch = useAppDispatch();
      const product = data;
      const addToCarts = (item: any) => {
            const newItem = {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  quanlity: 1,
                  intoMoney: item.price,
                  images: item.images
            }
            dispatch(addToCart(newItem))
            Notifications("success", "Thêm vào giỏ hàng thành công")
      }
      return (
            <>
                  <section className="bg-slate-300  ">
                        <div className="container px-6 py-10 mx-auto">
                              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">{product?.name}</h1>

                              <div className="mt-8 lg:-mx-6 lg:flex lg:items-center gap-20">
                                    <img className="object-cover lg:mx-6 lg:w-100%   lg:h-[600px] rounded-md" src={product?.images} alt="" />

                                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6  ">
                                          <h3 className="text-sm text-blue-500 uppercase ">Mô tả sản phẩm </h3>


                                          <div className="px-4 py-2">
                                                <p className=" text-sm text-black">{product?.describe}</p>
                                          </div>

                                          <div className="grid grid-cols-1 gap-3 md:grid-cols-1  border-b-2 py-3">
                                                <div className="lg:flex  px-28 py-4 gap-8">
                                                      <p className="mx-4">{product?.price} tr</p>
                                                      <p className='w-100% text-red-500'>500000 tr</p>
                                                </div>
                                                <div className="lg:flex justify-end">
                                                      <button className='w-100% p-4 bg-teal-300 mx-18  rounded' onClick={() => addToCarts(product)}><AiOutlineShoppingCart /></button>
                                                </div>
                                          </div>
                                          <h5 className='py-4'>Điểm nổi bật chính </h5>
                                          <div className="grid grid-cols-1 gap-3 mt-3 md:grid-cols-1">

                                                <div className="lg:flex">
                                                      <p className="mx-4"><TiTick /></p>
                                                      <p className='w-100%'>Kết câu chac chắn</p>
                                                </div>
                                                <div className="lg:flex">
                                                      <p className="mx-4"><TiTick /></p>
                                                      <p className='w-100%'>Kết câu chac chắn</p>
                                                </div>
                                                <div className="lg:flex">
                                                      <p className="mx-4"><TiTick /></p>
                                                      <p className='w-100%'>Kết câu chac chắn</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='bg-slate-50 p-10'>
                              <h3 className=' text-center hover:text-blue-300 '>Thông tin chung </h3>
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2  bg-slate-50 p-10">
                                    <div className="lg:flex bg-slate-300 py-4 rounded-s-lg text-center">
                                          <p className="mx-4">Thương Hiêu</p>
                                          <p className='w-100%'>Kết câu chac chắn</p>
                                    </div>
                                    <div className="lg:flex bg-slate-300  py-4 rounded-s-lg">
                                          <p className="mx-4">Điều kiên giao dịch</p>
                                          <p className='w-100%'>Kết câu chac chắn</p>
                                    </div>
                                    <div className="lg:flex  bg-slate-300 py-4 rounded-s-lg">
                                          <p className="mx-4">Thương Hiêu</p>
                                          <p className='w-100%'>Kết câu chac chắn</p>
                                    </div>
                                    <div className="lg:flex bg-slate-300 py-4 rounded-s-lg">
                                          <p className="mx-4">Điều kiên giao dịch</p>
                                          <p className='w-100%'>Kết câu chac chắn</p>
                                    </div>
                                    <div className="lg:flex bg-slate-300 py-4 rounded-s-lg">
                                          <p className="mx-4">Điều kiên giao dịch</p>
                                          <p className='w-100%'>Kết câu chac chắn</p>
                                    </div>
                                    <div className="lg:flex bg-slate-300 py-4 rounded-s-lg">
                                          <p className="mx-4">Điều kiên giao dịch</p>
                                          <p className='w-100%'>Kết câu chac chắn</p>
                                    </div>
                                    <div className="lg:flex bg-slate-300 py-4 rounded-s-lg">
                                          <p className="mx-4">Điều kiên giao dịch</p>
                                          <p className='w-100%'>Kết câu chac chắn</p>
                                    </div>
                                    <div className="lg:flex bg-slate-300 py-4 rounded-s-lg">
                                          <p className="mx-4">Điều kiên giao dịch</p>
                                          <p className='w-100%'>Kết câu chac chắn</p>
                                    </div>
                              </div>
                        </div>

                  </section>
            </>
      )
};

export default DetailProuct;