import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ANIME_API_BASE_URL, ANIME_DB_KEY } from "../utils/config";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ANIME_API_BASE_URL,
    prepareHeaders: headers => {
      headers.set("Accept", "application/json")
      return headers
    },
  }),
  endpoints: builder => ({
    getAnimes: builder.query({
      query: () => `/anime?api_key=${ANIME_DB_KEY}`
    })
  })
})

export const { useGetAnimesQuery } = animeApi