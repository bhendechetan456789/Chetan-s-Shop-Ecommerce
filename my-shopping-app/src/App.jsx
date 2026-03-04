import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Apicalling from "./pages/ApiCalling";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import About from "./pages/About";

// import Signup from "./pages/Signup";
// import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter basename="/ecommerce-App">
      <Header />
      <Routes>
       <Route element={<Home/>} path="/home" />
        <Route path="/products" element={<Apicalling />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        
        {/* <Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} /> */}
 <Route path="/cart" element={<Cart />} />
 <Route path="/category" element={<Category />} />
 <Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />}/>
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
