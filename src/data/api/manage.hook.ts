import getConfig from 'next/config'
import { UseQueryOptions } from '@tanstack/react-query'
import { QueryKeyT, useDelete, useFetch, usePost , usePut} from './common/react_query'
const { publicRuntimeConfig } = getConfig()
import { ManageInterface } from 'src/domain/manage.domain'

// export type LoginParam = {
//   username: string
//   password: string
// }

export function useManage() {
    return useFetch<ManageInterface[]>(`${publicRuntimeConfig.BASE_API}/api/manage`)
  }


  export function approveManage( options?: UseQueryOptions<unknown, Error, unknown, QueryKeyT>) {
    return usePost(`${publicRuntimeConfig.BASE_API}/api/manage/approve`, options)
  }

  export function editPersonDetail( options?: UseQueryOptions<unknown, Error, unknown, QueryKeyT>) {
    return usePut(`${publicRuntimeConfig.BASE_API}/api/manage/person`, options)
  }