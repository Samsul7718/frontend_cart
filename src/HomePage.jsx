import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const HomePage = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/api/products")
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <div className='flex items-center justify-center'>
          <div>

          </div>
        <h1 className='text-2xl font-bold'>Home Page</h1>
        </div>
        {products.map((product)=>(
            <li key={product.id}>
                <div className='flex flex-row items-center gap-3 justify-between p-5'>
                <img src={product.imageUrl} alt={product.name} width="100"/>    
                <div>
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>

                </div>
                <button className='bg-green-400 rounded-md shadow-md p-3'>Add to cart</button>
                </div>
            </li>
        ))}
    </div>
  )
}

export default HomePage