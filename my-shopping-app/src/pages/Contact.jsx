import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields!"); return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "60px auto", padding: "0 30px" }}>
      {submitted ? (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: "60px" }}>✅</div>
          <h2 style={{ color: "#2e7d32", marginTop: "15px" }}>Message Sent!</h2>
          <p style={{ color: "#888" }}>We'll get back to you within 24 hours.</p>
          <button onClick={() => navigate('/home')} style={{
            marginTop: "20px", padding: "12px 30px", background: "#000",
            color: "#fff", border: "none", borderRadius: "8px",
            cursor: "pointer", fontWeight: "bold"
          }}>Back to Home</button>
        </div>
      ) : (
        <>
          <h1 style={{ marginBottom: "8px" }}>Contact Us 📬</h1>
          <p style={{ color: "#888", marginBottom: "35px" }}>
            Have a question? We'd love to hear from you!
          </p>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}>Full Name</label>
            <input type="text" placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{
                width: "100%", padding: "12px 15px",
                border: "1px solid #ddd", borderRadius: "8px",
                fontSize: "14px", boxSizing: "border-box"
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}>Email Address</label>
            <input type="email" placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={{
                width: "100%", padding: "12px 15px",
                border: "1px solid #ddd", borderRadius: "8px",
                fontSize: "14px", boxSizing: "border-box"
              }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}>Message</label>
            <textarea placeholder="Write your message here..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              style={{
                width: "100%", padding: "12px 15px",
                border: "1px solid #ddd", borderRadius: "8px",
                fontSize: "14px", boxSizing: "border-box",
                resize: "vertical"
              }}
            />
          </div>

          <button onClick={handleSubmit} style={{
            width: "100%", padding: "14px", background: "#000",
            color: "#fff", border: "none", borderRadius: "10px",
            fontSize: "16px", fontWeight: "bold", cursor: "pointer"
          }}>
            Send Message 📤
          </button>
        </>
      )}
    </div>
  );
}

export default Contact;