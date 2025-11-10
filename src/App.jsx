import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import CartPage from "./CartPage"
import Checkout from "./Checkout"


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  
  )
}

export default App
