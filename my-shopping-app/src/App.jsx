import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Apicalling from "./pages/ApiCalling";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter basename="/ecommerce-App">
      <Header />
      <Routes>
       <Route element={<Home/>} path="/home" />
        <Route path="/products" element={<Apicalling />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
