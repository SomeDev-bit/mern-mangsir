import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),


  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (q) => ({
        url: '/products',
        method: 'GET'
      })
    }),




  })





});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productApi;

