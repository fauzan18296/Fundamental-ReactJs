import { useContext } from 'react'
import { TotalPriceDispatchContext } from '../context/TotalPriceContext'

export const useTotalPriceDispatch = () => {
  return useContext(TotalPriceDispatchContext)
}

