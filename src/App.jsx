import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Checkout from "./pages/Checkout"
import Navbar from "./components/Navbar"
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"
import CartProvider from "./context/CartContext";
import ProductDetails from "./pages/ProductDetails"





function App() {
  


  return (
    <AuthProvider>
    <CartProvider>
    <div className="app">
      <Navbar/>
       <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/checkout"  element={
        <ProtectedRoute>
          <Checkout/>
        </ProtectedRoute>
      }/>
    </Routes>
    </div>
    </CartProvider>
    </AuthProvider>
  )
}

export default App
