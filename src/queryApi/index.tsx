
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interfaces/product';

const productApi = createApi({
    reducerPath: "product",
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        fetchFn: async (...arg) => {

            return await fetch(...arg);
        }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `/products`,
            providesTags: ['Product']
        }),
        
        getProductsById: builder.query<IProduct, number>({
            query: (id) => `/products/${id}`
        }),
        removeProduct: builder.mutation<void, number | string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Product']
        }),

        addProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),

        updateProducts: builder.mutation({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PATCH',
                body: product

            }), invalidatesTags: ['Product']
        }),

    })
});

export const {
    useGetProductsQuery,
    useGetProductsByIdQuery,
    useAddProductMutation, useRemoveProductMutation,
    useUpdateProductsMutation
} = productApi;
export const productReducer = productApi.reducer;
export default productApi;