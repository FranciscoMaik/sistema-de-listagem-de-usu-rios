import { useContext } from 'react'

import { UserContextStateProps, UserContext } from '../context/UserAuth'

export const useUserContext = (): UserContextStateProps =>
  useContext(UserContext)
