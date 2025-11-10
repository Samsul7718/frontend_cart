import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './context/CartContext.jsx'

const Checkout = () => {
    const {cart}=useCart();
    const total=cart.reduce((sum,item)=>sum+item.price*(item.qty || 1),0);
  return (
    <div >
        <h1 className='text-center font-bold text-2xl p-10'>Checkout Page</h1>
        <div className='flex text-row items-center justify-center gap-20 p-10 '>
            <h4 className='font-bold text-bold-400 text-gray-700'>Total Payble Amount:  <span className='text-green-600'>INR {total}</span></h4>
        </div>
        <div className='flex justify-center gap-10'>
            <Link to='/'>
            <button className='bg-yellow-200 p-4 rounded-md shadow-md '>shop more</button>
            </Link>
            <button className='bg-green-500 text-white p-4 rounded-md shadow-md '>Pay Now</button>

        </div>
    </div>
  )
}

export default Checkout