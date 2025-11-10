import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const CartContext=createContext();

export const useCart=()=>useContext(CartContext);

export const CartProvider=({children})=>{
    const [cart,setCart]=useState(()=>{
        const storedCart=localStorage.getItem("cart");
        return storedCart?JSON.parse(storedCart):[];
    });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])

    const addToCart=(product)=>{
        const existing=cart.find((p)=>p.id===product.id);
        if(existing){
            setCart(prev=>prev.map((p)=>p.id===product.id?{...p,qty:p.qty+1}:p))
        }else{
            setCart(prev=>[...prev,{...product,qty:1}])
        }
    }
    const incQty=(id)=>{
        setCart((prev)=>prev.map((p)=>p.id===id?{...p,qty:p.qty+1}:p));
    }
    const decQty=(id)=>{
        setCart((prev)=>prev.map((p)=>p.id===id?{...p,qty:p.qty>1?p.qty-1:1}:p));
    }
    const remove=(id)=>{
        setCart((prev)=>prev.filter(p=>p.id !==id));
    }
    return(
        <CartContext.Provider value={{addToCart,cart,incQty,decQty,remove}}>
            {children}
        </CartContext.Provider>
    )
}