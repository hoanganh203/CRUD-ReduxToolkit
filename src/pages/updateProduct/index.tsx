import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useGetProductsByIdQuery, useUpdateProductsMutation } from '../../queryApi';
import { IProduct } from '../../interfaces/product';

export const UpdateProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data } = useGetProductsByIdQuery(Number(id));
  const [product, setProduct] = useState<IProduct>({
    name: '',
    price: 0,
  });
  const [updateProduct] = useUpdateProductsMutation();

  useEffect(() => {
    if (data) {
      setProduct({ ...data });
    }
  }, [data]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedProduct = { ...data, ...product };
    await updateProduct(updatedProduct);
    navigate("/admin");
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  0151 475 4450
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      type="text"
                      value={product.images || ''}
                      onChange={(event) =>
                        setProduct({ ...product, images: event.target.value })
                      }
                    />
                  </div>

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
                  <label className="sr-only">Description</label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Description"
                    value={product.description || ''}
                    onChange={(event) =>
                      setProduct({
                        ...product,
                        description: event.target.value,
                      })
                    }
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};