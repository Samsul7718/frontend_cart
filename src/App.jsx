import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import CartPage from "./CartPage"


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </Router>
  
  )
}

export default App
