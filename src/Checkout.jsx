import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './context/CartContext.jsx'

const Checkout = () => {
   const {cart}=useCart();
    const total=cart.reduce((sum,item)=>sum+item.price*(item.qty || 1),0);
    
  const paymentHandler=async(e)=>{
    const res=await fetch("http://localhost:3000/order",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        amount:total,
        currency:'INR',
        receipt:'receipt#1',
        cartItems:cart,
      
      })
    });
    const order=await res.json();
    console.log(order);
  

  var options = {
    "key": "rzp_test_RaIsMYYAo7K5Fp", // Enter the Key ID generated from the Dashboard
    "amount":"", // Amount 
    "currency": "INR",
    "name": "shop mate", // business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": order.id, // Pass the `id` obtained in the response of Step 1
    "handler": async function (response){
        const body={
          ...response,
        };
        const validateRes=await fetch("http://localhost:3000/order/validate",{
          method:"POST",
          body:JSON.stringify(body),
          headers:{
            "Content-Type":"application/json",
          },
        });
      const validateJson=await validateRes.json();
         console.log("validateJson:", validateJson);
    },
    "prefill": { // customer's contact especially their phone number
        "name": "samsul alam", // customer's name
        "email": "samsul99@gmail.com", 
        "contact": "+918100000000"  
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
 rzp1.open();
    e.preventDefault();
}  
   
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
            <button
            onClick={(e)=>paymentHandler(e)}
            className='bg-green-500 text-white p-4 rounded-md shadow-md '>Pay Now</button>

        </div>
    </div>
  )
}

export default Checkout