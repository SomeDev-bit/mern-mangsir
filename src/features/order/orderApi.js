import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../app/apiUrls";

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/orders` }),
  endpoints: (builder) => ({

    getOrders: builder.query({
      query: () => ({
        url: '/',
        method: 'GET'
      }),
      providesTags: ['Order'],
    }),

    createOrder: builder.mutation({
      query: (q) => ({
        url: '/',
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Order']
    })



  }),
})

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;