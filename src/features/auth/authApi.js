import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.73:5000/api/users' }),
  endpoints: (builder) => ({

    loginUser: builder.mutation({
      query: (q) => ({
        url: '/login',
        body: q,
        method: 'POST'
      })
    })

  }),
})

export const { useLoginUserMutation } = authApi;