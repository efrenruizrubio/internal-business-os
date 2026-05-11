import { useQuery } from '@tanstack/react-query'
import { authQueryKeys } from '../constants/query-keys'
import { getSession } from '../services'

export const useSession = () => {
  return useQuery({
    queryKey: authQueryKeys.session(),
    queryFn: getSession,
    staleTime: Infinity,
    retry: false,
  })
}
