import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./Adv.css";
import "./Brand.css";
import "./NewArrivals.css";
import "./SaleBanner.css";
import "./young.css";
import "./Promo.css";
import "./Footer.css";
import "../pages/ApiCalling.css";
import "../pages/ProductDetail.css";
import logo from "../assets/Vector.png";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("fashionUser")) || null
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    if (!formData.email || !formData.password) return setError("Please fill all fields!");
    if (!isLogin && !formData.name) return setError("Please enter your name!");

    setLoading(true);
    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const body = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong!");
        setLoading(false);
        return;
      }

      // Save to localStorage
      localStorage.setItem("fashionToken", data.token);
      localStorage.setItem("fashionUser", JSON.stringify(data.user));
      setLoggedInUser(data.user);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setShowModal(false);
        setFormData({ name: "", email: "", password: "" });
      }, 2000);

    } catch (err) {
      setError("Server not reachable. Is backend running?");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("fashionToken");
    localStorage.removeItem("fashionUser");
    setLoggedInUser(null);
  };

  return (
    <>
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">FASHION</span>
        </div>

        <nav className="nav-links">
          <Link to="/home">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/cart">CART</Link>
          <Link to="/category">CATEGORY</Link>
        </nav>

        {loggedInUser ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>👋 {loggedInUser.name}</span>
            <button className="signup-btn" onClick={handleLogout}>LOGOUT</button>
          </div>
        ) : (
          <button className="signup-btn" onClick={() => setShowModal(true)}>SIGN UP</button>
        )}
      </header>

      {showModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.5)", display: "flex",
          alignItems: "center", justifyContent: "center", zIndex: 9999
        }}>
          <div style={{
            background: "#fff", borderRadius: "16px", padding: "40px",
            width: "400px", maxWidth: "90%", position: "relative",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
          }}>
            <button onClick={() => { setShowModal(false); setError(""); }} style={{
              position: "absolute", top: "15px", right: "20px",
              background: "none", border: "none", fontSize: "22px",
              cursor: "pointer", color: "#666"
            }}>✕</button>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "50px" }}>🎉</div>
                <h2 style={{ color: "#333", marginTop: "10px" }}>
                  Welcome, {loggedInUser?.name}!
                </h2>
                <p style={{ color: "#888" }}>
                  {isLogin ? "Logged in successfully!" : "Account created successfully!"}
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", marginBottom: "25px", background: "#f5f5f5", borderRadius: "10px", padding: "4px" }}>
                  <button onClick={() => { setIsLogin(false); setError(""); }} style={{
                    flex: 1, padding: "10px", border: "none", borderRadius: "8px", cursor: "pointer",
                    background: !isLogin ? "#000" : "transparent",
                    color: !isLogin ? "#fff" : "#888", fontWeight: "bold"
                  }}>Sign Up</button>
                  <button onClick={() => { setIsLogin(true); setError(""); }} style={{
                    flex: 1, padding: "10px", border: "none", borderRadius: "8px", cursor: "pointer",
                    background: isLogin ? "#000" : "transparent",
                    color: isLogin ? "#fff" : "#888", fontWeight: "bold"
                  }}>Login</button>
                </div>

                <h2 style={{ marginBottom: "20px", color: "#333" }}>
                  {isLogin ? "Welcome Back 👋" : "Create Account 🛍️"}
                </h2>

                {!isLogin && (
                  <input type="text" placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 15px", marginBottom: "15px",
                      border: "1px solid #ddd", borderRadius: "8px",
                      fontSize: "14px", boxSizing: "border-box"
                    }}
                  />
                )}

                <input type="email" placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 15px", marginBottom: "15px",
                    border: "1px solid #ddd", borderRadius: "8px",
                    fontSize: "14px", boxSizing: "border-box"
                  }}
                />

                <input type="password" placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 15px", marginBottom: "15px",
                    border: "1px solid #ddd", borderRadius: "8px",
                    fontSize: "14px", boxSizing: "border-box"
                  }}
                />

                {error && (
                  <p style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}>
                    ⚠️ {error}
                  </p>
                )}

                <button onClick={handleSubmit} disabled={loading} style={{
                  width: "100%", padding: "14px", background: loading ? "#888" : "#000",
                  color: "#fff", border: "none", borderRadius: "8px",
                  fontSize: "16px", fontWeight: "bold", cursor: "pointer"
                }}>
                  {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
                </button>

                <p style={{ textAlign: "center", marginTop: "15px", color: "#888", fontSize: "13px" }}>
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <span onClick={() => { setIsLogin(!isLogin); setError(""); }}
                    style={{ color: "#000", fontWeight: "bold", cursor: "pointer", textDecoration: "underline" }}>
                    {isLogin ? "Sign Up" : "Login"}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;