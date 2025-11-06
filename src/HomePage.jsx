import React from 'react'
import { useState } from 'react'

const HomePage = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/api/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(err=>console.log(err))
    })
  return (
    <div>HomePage</div>
  )
}

export default HomePage