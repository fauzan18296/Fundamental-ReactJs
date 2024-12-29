import { useContext } from 'react'
import { TotalPriceContext } from '../context/TotalPriceContext'

export const useTotalPrice = () => {
  return useContext(TotalPriceContext)
}
