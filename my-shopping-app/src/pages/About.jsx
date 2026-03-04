import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "900px", margin: "60px auto", padding: "0 30px" }}>

      {/* Hero */}
      <div style={{
        background: "#000", borderRadius: "20px", padding: "60px 40px",
        textAlign: "center", marginBottom: "50px"
      }}>
        <h1 style={{ color: "#fff", fontSize: "40px", margin: "0 0 15px" }}>
          About <span style={{ color: "#f5c518" }}>FASHION</span>
        </h1>
        <p style={{ color: "#aaa", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
          We believe fashion is more than clothing — it's a lifestyle, an expression, a statement.
        </p>
      </div>

      {/* Mission */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px", marginBottom: "50px"
      }}>
        {[
          { icon: "🎯", title: "Our Mission", desc: "To make premium fashion accessible to everyone across India." },
          { icon: "👁️", title: "Our Vision", desc: "To become India's most loved fashion brand by 2030." },
          { icon: "💎", title: "Our Values", desc: "Quality, Sustainability, Inclusivity, and Style." }
        ].map((item) => (
          <div key={item.title} style={{
            border: "1px solid #eee", borderRadius: "16px", padding: "30px",
            textAlign: "center", boxShadow: "0 4px 15px rgba(0,0,0,0.06)"
          }}>
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>{item.icon}</div>
            <h3 style={{ margin: "0 0 10px" }}>{item.title}</h3>
            <p style={{ color: "#888", margin: 0, fontSize: "14px" }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div style={{
        background: "#f9f9f9", borderRadius: "16px", padding: "40px",
        marginBottom: "50px"
      }}>
        <h2 style={{ marginBottom: "15px" }}>Our Story 📖</h2>
        <p style={{ color: "#555", lineHeight: "1.8", fontSize: "15px" }}>
          Chetan's Fashion was started with a simple dream — to bring stylish, affordable clothing
          to every corner of India. From a small idea to a full-fledged e-commerce platform,
          we have grown with the love and support of our customers. We offer curated collections
          for Men and Women, handpicked from top brands like H&M, Levi's, Raymond, and more.
        </p>
      </div>

      {/* Stats */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px", marginBottom: "50px", textAlign: "center"
      }}>
        {[
          { number: "50+", label: "Products" },
          { number: "5K+", label: "Happy Customers" },
          { number: "20+", label: "Top Brands" }
        ].map((stat) => (
          <div key={stat.label} style={{
            border: "2px solid #000", borderRadius: "16px", padding: "30px"
          }}>
            <h2 style={{ margin: "0 0 5px", fontSize: "32px" }}>{stat.number}</h2>
            <p style={{ margin: 0, color: "#888" }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <button onClick={() => navigate('/products')} style={{
          padding: "14px 40px", background: "#000", color: "#fff",
          border: "none", borderRadius: "10px", fontSize: "16px",
          fontWeight: "bold", cursor: "pointer"
        }}>
          Shop Now 🛍️
        </button>
      </div>
    </div>
  );
}

export default About;