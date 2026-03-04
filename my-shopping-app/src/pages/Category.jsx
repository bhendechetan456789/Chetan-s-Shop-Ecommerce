import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://chetan-s-shop-ecommerce.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  const filtered = selected === "All"
    ? products
    : products.filter((p) => p.category === selected);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("fashionCart")) || [];
    const found = existingCart.find((item) => item._id === product._id);
    if (found) {
      found.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("fashionCart", JSON.stringify(existingCart));
    alert(`✅ "${product.name}" added to cart!`);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "10px" }}>Shop by Category</h1>
      <p style={{ color: "#888", marginBottom: "30px" }}>
        {filtered.length} products found
      </p>

      {/* Filter Buttons */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "35px", flexWrap: "wrap" }}>
        {["All", "Men", "Women"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            style={{
              padding: "10px 28px",
              borderRadius: "25px",
              border: "2px solid #000",
              background: selected === cat ? "#000" : "#fff",
              color: selected === cat ? "#fff" : "#000",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            {cat === "All" ? "🛍️ All" : cat === "Men" ? "👔 Men" : "👗 Women"}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: "50px" }}>😕</div>
          <h2 style={{ color: "#888" }}>No products found!</h2>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "25px"
        }}>
          {filtered.map((item) => (
            <div key={item._id} style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              transition: "transform 0.2s"
            }}>
              <img
                src={new URL(`../assets/${item.image}`, import.meta.url).href}
                alt={item.name}
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                {/* Category Badge */}
                <span style={{
                  background: item.category === "Men" ? "#e3f2fd" : "#fce4ec",
                  color: item.category === "Men" ? "#1565c0" : "#c62828",
                  padding: "3px 10px", borderRadius: "20px",
                  fontSize: "11px", fontWeight: "bold"
                }}>
                  {item.category === "Men" ? "👔 Men" : "👗 Women"}
                </span>

                <h3 style={{ margin: "10px 0 5px" }}>{item.name}</h3>
                <p style={{ color: "#888", margin: "0 0 8px", fontSize: "13px" }}>
                  {item.brand}
                </p>
                <p style={{ color: "#e91e63", fontWeight: "bold", fontSize: "20px", margin: "0 0 12px" }}>
                  ₹{item.price}
                </p>

                <div style={{ display: "flex", gap: "8px" }}>
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
      )}
    </div>
  );
}

export default Category;