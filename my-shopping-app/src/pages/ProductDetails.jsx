import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartMsg, setCartMsg] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '', address: '', phone: '', payment: 'COD'
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => { setProduct(data); setLoading(false); })
      .catch(err => { console.log(err); setLoading(false); });
  }, [id]);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("fashionCart")) || [];
    const found = existingCart.find((item) => item._id === product._id);
    if (found) { found.quantity += 1; }
    else { existingCart.push({ ...product, quantity: 1 }); }
    localStorage.setItem("fashionCart", JSON.stringify(existingCart));
    setCartMsg("✅ Added to Cart!");
    setTimeout(() => setCartMsg(""), 2000);
  };

  const handleOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all fields!"); return;
    }
    setOrderPlaced(true);
    setShowForm(false);
  };

  if (loading) return (
    <div style={{ textAlign: "center", padding: "100px", fontSize: "20px" }}>
      Loading... ⏳
    </div>
  );

  if (!product) return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <h2>Product not found! 😕</h2>
    </div>
  );

  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 30px" }}>

      {/* Order Placed */}
      {orderPlaced && (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: "60px" }}>🎉</div>
          <h2 style={{ color: "#2e7d32" }}>Order Placed Successfully!</h2>
          <p style={{ color: "#888" }}>Delivery in 3-5 business days</p>
          <button onClick={() => navigate("/products")} style={{
            marginTop: "20px", padding: "12px 30px", background: "#000",
            color: "#fff", border: "none", borderRadius: "8px",
            cursor: "pointer", fontWeight: "bold", fontSize: "15px"
          }}>Continue Shopping 🛍️</button>
        </div>
      )}

      {!orderPlaced && (
        <div style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>

          {/* Product Image */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <img
              src={new URL(`../assets/${product.image}`, import.meta.url).href}
              alt={product.name}
              style={{
                width: "100%", borderRadius: "16px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
            />
          </div>

          {/* Product Details */}
          <div style={{ flex: 1, minWidth: "280px" }}>

            {/* Badge */}
            <span style={{
              background: product.category === "Men" ? "#e3f2fd" : "#fce4ec",
              color: product.category === "Men" ? "#1565c0" : "#c62828",
              padding: "4px 12px", borderRadius: "20px",
              fontSize: "12px", fontWeight: "bold"
            }}>
              {product.category === "Men" ? "👔 Men" : "👗 Women"}
            </span>

            <h1 style={{ margin: "15px 0 5px", fontSize: "28px" }}>{product.name}</h1>
            <p style={{ color: "#888", fontSize: "15px", margin: "0 0 15px" }}>
              Brand: <strong>{product.brand}</strong>
            </p>

            <p style={{ fontSize: "32px", fontWeight: "bold", color: "#e91e63", margin: "0 0 25px" }}>
              ₹{product.price}
            </p>

            {/* Cart Message */}
            {cartMsg && (
              <div style={{
                background: "#e8f5e9", color: "#2e7d32", padding: "10px 15px",
                borderRadius: "8px", marginBottom: "15px", fontWeight: "bold"
              }}>
                {cartMsg}
              </div>
            )}

            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
              <button onClick={addToCart} style={{
                flex: 1, padding: "14px", background: "#000", color: "#fff",
                border: "none", borderRadius: "10px", fontSize: "15px",
                fontWeight: "bold", cursor: "pointer"
              }}>🛒 Add to Cart</button>

              <button onClick={() => setShowForm(true)} style={{
                flex: 1, padding: "14px", background: "#e91e63", color: "#fff",
                border: "none", borderRadius: "10px", fontSize: "15px",
                fontWeight: "bold", cursor: "pointer"
              }}>⚡ Buy Now</button>
            </div>

            <button onClick={() => navigate(-1)} style={{
              background: "none", border: "none", color: "#888",
              cursor: "pointer", fontSize: "14px", textDecoration: "underline"
            }}>← Back</button>
          </div>
        </div>
      )}

      {/* Buy Now Form Modal */}
      {showForm && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.5)", display: "flex",
          alignItems: "center", justifyContent: "center", zIndex: 9999
        }}>
          <div style={{
            background: "#fff", borderRadius: "16px", padding: "40px",
            width: "420px", maxWidth: "90%", position: "relative"
          }}>
            <button onClick={() => setShowForm(false)} style={{
              position: "absolute", top: "15px", right: "20px",
              background: "none", border: "none", fontSize: "22px", cursor: "pointer"
            }}>✕</button>

            <h2 style={{ marginBottom: "20px" }}>📦 Buy Now — {product.name}</h2>
            <p style={{ color: "#e91e63", fontWeight: "bold", marginBottom: "20px" }}>
              Total: ₹{product.price}
            </p>

            <input type="text" placeholder="Full Name" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: "100%", padding: "12px", marginBottom: "12px",
                border: "1px solid #ddd", borderRadius: "8px",
                fontSize: "14px", boxSizing: "border-box"
              }}
            />
            <input type="text" placeholder="Delivery Address" value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              style={{
                width: "100%", padding: "12px", marginBottom: "12px",
                border: "1px solid #ddd", borderRadius: "8px",
                fontSize: "14px", boxSizing: "border-box"
              }}
            />
            <input type="tel" placeholder="Phone Number" value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{
                width: "100%", padding: "12px", marginBottom: "15px",
                border: "1px solid #ddd", borderRadius: "8px",
                fontSize: "14px", boxSizing: "border-box"
              }}
            />

            {/* Payment */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Payment:</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {["COD", "UPI", "Card"].map((m) => (
                  <button key={m} onClick={() => setFormData({ ...formData, payment: m })}
                    style={{
                      flex: 1, padding: "10px", border: "2px solid",
                      borderColor: formData.payment === m ? "#000" : "#ddd",
                      borderRadius: "8px",
                      background: formData.payment === m ? "#000" : "#fff",
                      color: formData.payment === m ? "#fff" : "#333",
                      cursor: "pointer", fontWeight: "bold", fontSize: "13px"
                    }}>
                    {m === "COD" ? "💵 COD" : m === "UPI" ? "📱 UPI" : "💳 Card"}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleOrder} style={{
              width: "100%", padding: "14px", background: "#e91e63",
              color: "#fff", border: "none", borderRadius: "10px",
              fontSize: "16px", fontWeight: "bold", cursor: "pointer"
            }}>
              Place Order 🎉
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;