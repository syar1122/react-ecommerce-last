import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("authToken");

export const appApiSlice = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers) => {
      console.log("headers token", token);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", token);
      }

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      getCategories: builder.query({
        query: () => `/categories`,
      }),
      getSubCategories: builder.query({
        query: (id) => `/categories/subCategories?parentId=${id}`,
      }),
      getMainCategories: builder.query({
        query: (id) => `/categories/mainCategories`,
      }),
      getProducts: builder.query({
        query: () => `/products`,
      }),
      getProductsWithQuery: builder.query({
        query: (queryStr) => `/products?${queryStr}`,
      }),
      getProductById: builder.query({
        query: (id) => `/products/${id}`,
      }),
      postRegister: builder.mutation({
        query: (data) => ({
          url: "auth/signup",
          method: "POST",
          body: data,
        }),
      }),
      login: builder.mutation({
        query: (data) => ({
          url: "auth/login",
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

export const {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetMainCategoriesQuery,
  useGetProductsQuery,
  useGetProductsWithQueryQuery,
  useGetProductByIdQuery,
  usePostRegisterMutation,
  useLoginMutation,
} = appApiSlice;
