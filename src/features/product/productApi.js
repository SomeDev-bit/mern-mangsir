import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../app/apiUrls";


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/products` }),
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: '/',
        method: 'GET'
      })
    }),

  }),
})

export const { useGetProductsQuery } = productApi;