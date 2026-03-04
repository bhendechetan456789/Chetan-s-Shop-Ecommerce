import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("fashionCart")) || []
  );
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({ name: "", address: "", phone: "", payment: "COD" });
  const navigate = useNavigate();

  const updateQuantity = (id, change) => {
    const updated = cart.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    setCart(updated);
    localStorage.setItem("fashionCart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    setCart(updated);
    localStorage.setItem("fashionCart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all fields!");
      return;
    }
    localStorage.removeItem("fashionCart");
    setCart([]);
    setShowCheckout(false);
    setOrderPlaced(true);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>

      {/* Order Placed Success */}
      {orderPlaced && (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <div style={{ fontSize: "70px" }}>🎉</div>
          <h1 style={{ color: "#2e7d32", marginTop: "15px" }}>Order Placed Successfully!</h1>
          <p style={{ color: "#888", fontSize: "16px" }}>Thank you for shopping with Chetan's Fashion!</p>
          <p style={{ color: "#888" }}>Delivery in <strong>3-5 business days</strong></p>
          <button onClick={() => { setOrderPlaced(false); navigate("/products"); }} style={{
            marginTop: "25px", padding: "14px 35px", background: "#000",
            color: "#fff", border: "none", borderRadius: "10px",
            cursor: "pointer", fontWeight: "bold", fontSize: "16px"
          }}>
            Continue Shopping 🛍️
          </button>
        </div>
      )}

      {/* Cart Items */}
      {!orderPlaced && (
        <>
          <h1 style={{ marginBottom: "30px" }}>🛒 Your Cart</h1>

          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: "60px" }}>🛍️</div>
              <h2 style={{ color: "#888", marginTop: "15px" }}>Your cart is empty!</h2>
              <button onClick={() => navigate("/products")} style={{
                marginTop: "20px", padding: "12px 30px", background: "#000",
                color: "#fff", border: "none", borderRadius: "8px",
                cursor: "pointer", fontWeight: "bold", fontSize: "15px"
              }}>Shop Now</button>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item._id} style={{
                  display: "flex", alignItems: "center", gap: "20px",
                  border: "1px solid #eee", borderRadius: "12px",
                  padding: "15px", marginBottom: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
                }}>
                  <img
                    src={new URL(`../assets/${item.image}`, import.meta.url).href}
                    alt={item.name}
                    style={{ width: "90px", height: "90px", objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: "0 0 5px" }}>{item.name}</h3>
                    <p style={{ color: "#888", margin: "0 0 5px", fontSize: "13px" }}>{item.brand} • {item.category}</p>
                    <p style={{ color: "#e91e63", fontWeight: "bold", fontSize: "18px", margin: 0 }}>₹{item.price}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button onClick={() => updateQuantity(item._id, -1)} style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      border: "1px solid #ddd", background: "#fff",
                      cursor: "pointer", fontSize: "18px", fontWeight: "bold"
                    }}>−</button>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, 1)} style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      border: "1px solid #000", background: "#000", color: "#fff",
                      cursor: "pointer", fontSize: "18px", fontWeight: "bold"
                    }}>+</button>
                  </div>
                  <div style={{ minWidth: "80px", textAlign: "right" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>₹{item.price * item.quantity}</p>
                  </div>
                  <button onClick={() => removeItem(item._id)} style={{
                    background: "none", border: "none", fontSize: "20px",
                    cursor: "pointer", color: "#ff4444"
                  }}>🗑️</button>
                </div>
              ))}

              {/* Total */}
              <div style={{
                border: "2px solid #000", borderRadius: "12px",
                padding: "20px 25px", marginTop: "20px",
                display: "flex", justifyContent: "space-between", alignItems: "center"
              }}>
                <div>
                  <p style={{ margin: 0, color: "#888" }}>{cart.length} item(s)</p>
                  <h2 style={{ margin: "5px 0 0" }}>Total: ₹{total}</h2>
                </div>
                <button onClick={() => setShowCheckout(true)} style={{
                  padding: "14px 35px", background: "#000", color: "#fff",
                  border: "none", borderRadius: "10px", fontSize: "16px",
                  fontWeight: "bold", cursor: "pointer"
                }}>
                  Checkout ✓
                </button>
              </div>
            </>
          )}
        </>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.5)", display: "flex",
          alignItems: "center", justifyContent: "center", zIndex: 9999
        }}>
          <div style={{
            background: "#fff", borderRadius: "16px", padding: "40px",
            width: "450px", maxWidth: "90%", position: "relative",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
          }}>
            <button onClick={() => setShowCheckout(false)} style={{
              position: "absolute", top: "15px", right: "20px",
              background: "none", border: "none", fontSize: "22px",
              cursor: "pointer", color: "#666"
            }}>✕</button>

            <h2 style={{ marginBottom: "25px" }}>📦 Order Details</h2>

            {/* Order Summary */}
            <div style={{ background: "#f9f9f9", borderRadius: "10px", padding: "15px", marginBottom: "20px" }}>
              <p style={{ margin: "0 0 5px", fontWeight: "bold" }}>Order Summary</p>
              {cart.map(item => (
                <p key={item._id} style={{ margin: "4px 0", fontSize: "13px", color: "#555" }}>
                  {item.name} x{item.quantity} — ₹{item.price * item.quantity}
                </p>
              ))}
              <p style={{ margin: "10px 0 0", fontWeight: "bold", color: "#e91e63" }}>Total: ₹{total}</p>
            </div>

            <input type="text" placeholder="Full Name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{
                width: "100%", padding: "12px 15px", marginBottom: "15px",
                border: "1px solid #ddd", borderRadius: "8px",
                fontSize: "14px", boxSizing: "border-box"
              }}
            />

            <input type="text" placeholder="Delivery Address" value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              style={{
                width: "100%", padding: "12px 15px", marginBottom: "15px",
                border: "1px solid #ddd", borderRadius: "8px",
                fontSize: "14px", boxSizing: "border-box"
              }}
            />

            <input type="tel" placeholder="Phone Number" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              style={{
                width: "100%", padding: "12px 15px", marginBottom: "15px",
                border: "1px solid #ddd", borderRadius: "8px",
                fontSize: "14px", boxSizing: "border-box"
              }}
            />

            {/* Payment Method */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Payment Method:</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {["COD", "UPI", "Card"].map((method) => (
                  <button key={method} onClick={() => setForm({ ...form, payment: method })}
                    style={{
                      flex: 1, padding: "10px", border: "2px solid",
                      borderColor: form.payment === method ? "#000" : "#ddd",
                      borderRadius: "8px", background: form.payment === method ? "#000" : "#fff",
                      color: form.payment === method ? "#fff" : "#333",
                      cursor: "pointer", fontWeight: "bold", fontSize: "13px"
                    }}>
                    {method === "COD" ? "💵 COD" : method === "UPI" ? "📱 UPI" : "💳 Card"}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleOrder} style={{
              width: "100%", padding: "14px", background: "#000",
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

export default Cart;