import getConfig from 'next/config'
import { UseQueryOptions } from '@tanstack/react-query'
import { QueryKeyT, useDelete, useFetch, usePost } from './common/react_query'
const { publicRuntimeConfig } = getConfig()

export type LoginParam = {
  username: string
  password: string
}

export function useLogin( options?: UseQueryOptions<unknown, Error, unknown, QueryKeyT>) {
    return usePost(`${publicRuntimeConfig.BASE_API}/api/user/login`, options)
  }
  