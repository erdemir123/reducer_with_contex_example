import React, { useContext} from 'react'
import { CardContext } from '../context/MainContext';
import Cart from "../components/Cart"


const Card = () => {
    const [state,dispatch]=useContext(CardContext)
  return (
    <div>
        {state.map(item=> <Cart item={item}/>)}
    </div>
  )
}

export default Card