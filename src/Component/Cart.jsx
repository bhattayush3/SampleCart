import React from 'react'
import { CartContext } from '../Context.jsx/Cart'
import { useContext } from 'react'
function Cart() {
    const cart=useContext(CartContext);
    const total=cart.items.reduce((a,b)=>a+b.price,0)
  return (
    <div>
        <h1>Cart</h1>
        {cart && cart.items.map((item)=>(
            <li>{item.name} : price:${item.price}</li>
        ))}
        <p>Total :${total}</p>
        
    </div>
  )
}

export default Cart