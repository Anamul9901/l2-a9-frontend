"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://l2-a9-backend.vercel.app/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",
    baseUrl: "https://l2a9-ecom.vercel.app/api/v1",
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["product", "shop", "user", "follower", "cart", "order", "coupon", "category", 'newsletter'],
  endpoints: () => ({}),
});
