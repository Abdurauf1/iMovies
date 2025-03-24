import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMDB_API_BASE_URL, TMDB_API_KEY } from "../utils/config";

interface ParamType {
  category: string | undefined
  type?: string
  page?: number
  searchQuery?: string
  showSimilarShows?: boolean
  id?: number
}

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_API_BASE_URL }),
  endpoints: builder => ({
    getShows: builder.query({
      query: ({ category, type, page, searchQuery, showSimilarShows, id }: ParamType) => {
        if (searchQuery) {
          return `search/${category}?api_key=${TMDB_API_KEY}&query=${searchQuery}&page=${page}`
        }

        if (showSimilarShows) {
          return `${category}/${id}/similar?api_key=${TMDB_API_KEY}`
        }

        return `${category}/${type}?api_key=${TMDB_API_KEY}&page=${page}`
      }
    }),
    getShow: builder.query({
      query: ({ category, id }: ParamType) => {
        return `${category}/${id}?append_to_response=videos,credits&api_key=${TMDB_API_KEY}`
      }
    })
  })
})

export const { useGetShowQuery, useGetShowsQuery } = tmdbApi