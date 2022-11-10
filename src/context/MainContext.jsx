import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer'
export const CardContext = createContext()

const MainContext = ({children}) => {
    const data = useReducer(reducer,initialState)
  
  return (
    <CardContext.Provider value={data}>{children}</CardContext.Provider>
  )
}

export default MainContext;