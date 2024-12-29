import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const TotalPriceContext = createContext(null)
const TotalPriceDispatchContext = createContext(null)

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      }
    }
    default: {
      throw Error("Unknown action" + action.type)
      }
  }
}

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, {total: 0})
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
  </TotalPriceContext.Provider>
  )
}

TotalPriceProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export {
  TotalPriceContext,
  TotalPriceDispatchContext
}