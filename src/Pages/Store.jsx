import React from 'react'
import data from '../data'
import Product from "../components/Product"

const Store = () => {
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center"}}>
{data.map((product,index)=><Product product={product} key={index}/>)}
    </div>
  )
}

export default Store