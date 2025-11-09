import React from 'react'
import { useCart } from './context/CartContext.jsx'

const CartPage = () => {
  const {cart,incQty,decQty,remove}=useCart();
  const total=cart.reduce((sum,product)=>sum+product.price*(product.qty || 1),0);
  return (
    <div>
      <div className='flex items-center justify-center p-5'>
        <div></div>
        <h1 className='font-bold text-2xl'>Cart Page</h1>
      </div>
      
        {cart.map((product)=>(
          <li key={product.id}>
            <div className="bg-sky-50 border flex flex-row items-center gap-10 justify-between p-5">
              <img src={product.imageUrl} alt="product.name" width="100" />

            <div>
          <h4>{product.name}</h4>
          <p>INR {product.price} </p>
            </div>
            <div className='flex flex-row items-center gap-3' >
              <button onClick={()=>decQty(product.id)}>-</button>
              <span>{product.qty}</span>
              <button onClick={()=>incQty(product.id)}>+</button>
              <button onClick={()=>remove(product.id)}>remove</button>
            </div>

        </div>
          </li>

        ))}
      
    </div>
  )
}

export default CartPage