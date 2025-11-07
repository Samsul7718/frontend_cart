import { useContext } from "react";
import { createContext } from "react";

const CartContext=createContext();

export const useCart=()=>useContext(CartContext);

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);

    const addToCart=(product)=>{
        const existing=cart.find((p)=>p.id===product.id);
    }
    return(
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}