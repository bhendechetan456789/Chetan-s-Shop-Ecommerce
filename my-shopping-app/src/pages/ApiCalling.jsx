import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Apicalling() {
  const [products, setProducts] = useState([]);
  const [cartMsg, setCartMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://chetan-s-shop-ecommerce.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("API Error:", err));
  }, []);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("fashionCart")) || [];
    const found = existingCart.find((item) => item._id === product._id);

    if (found) {
      found.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("fashionCart", JSON.stringify(existingCart));
    setCartMsg(`✅ "${product.name}" added to cart!`);
    setTimeout(() => setCartMsg(""), 2000);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Explore Our Products</h1>

      {/* Success Message */}
      {cartMsg && (
        <div style={{
          background: "#e8f5e9", color: "#2e7d32", padding: "12px 20px",
          borderRadius: "8px", marginBottom: "20px", fontWeight: "bold",
          display: "inline-block"
        }}>
          {cartMsg}
        </div>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "30px", marginTop: "30px",
      }}>
        {products.map((item) => (
          <div key={item._id} style={{
            border: "1px solid #ddd", borderRadius: "12px",
            overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}>
            <img
              src={new URL(`../assets/${item.image}`, import.meta.url).href}
              alt={item.name}
              style={{ width: "100%", height: "280px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3>{item.name}</h3>
              <p>{item.brand} • {item.category}</p>
              <p style={{ fontSize: "20px", fontWeight: "bold", color: "#e91e63" }}>
                ₹{item.price}
              </p>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <button
                  onClick={() => addToCart(item)}
                  style={{
                    flex: 1, padding: "10px", background: "#000",
                    color: "#fff", border: "none", borderRadius: "8px",
                    cursor: "pointer", fontWeight: "bold", fontSize: "13px"
                  }}>
                  🛒 Add to Cart
                </button>
                <button
                  onClick={() => navigate(`/product/${item._id}`)}
                  style={{
                    flex: 1, padding: "10px", background: "#fff",
                    color: "#000", border: "2px solid #000", borderRadius: "8px",
                    cursor: "pointer", fontWeight: "bold", fontSize: "13px"
                  }}>
                  👁 View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apicalling;