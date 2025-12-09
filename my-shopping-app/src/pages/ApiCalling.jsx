import React, { useEffect, useState } from "react";

function Apicalling() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("API Error:", err));
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Explore Our Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {products.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={new URL(`../assets/${item.image}`, import.meta.url).href}
              alt={item.name}
              style={{ width: "100%", height: "280px", objectFit: "cover" }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{item.name}</h3>
              <p>
                {item.brand} • {item.category}
              </p>
              <p style={{ fontSize: "20px", fontWeight: "bold", color: "#e91e63" }}>
                ₹{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apicalling;