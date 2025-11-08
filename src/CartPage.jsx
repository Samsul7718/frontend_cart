import React from 'react'
import { useCart } from './context/CartContext.jsx'

const CartPage = () => {
  const {cart}=useCart();
  return (
    <div>
      <div className='flex items-center justify-center p-5'>
        <div></div>
        <h1 className='font-bold text-2xl'>Cart Page</h1>
      </div>
      
        {cart.map((product)=>(
          <li key={product.id}>
            <div>
              <img src={product.imageUrl} alt="product.name" width="100" />

          <div>
          <h4>{product.name}</h4>
          <p>Price: INR {product.price} </p>
          </div>

        </div>
          </li>

        ))}
      
    </div>
  )
}

export default CartPage