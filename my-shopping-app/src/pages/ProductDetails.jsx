import React, { useState, useEffect } from 'react';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    quantity: ''
  });
  const [orders, setOrders] = useState([]);

  // Static product (sir ne dynamic URL wala nahi sikhaya isliye yahan hardcoded ek product use karenge)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1') // ek hi product dekhne ke liye
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setOrders(prev => [...prev, formData]);
  }

  return (
    <>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="150" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>

      <h3>Place Your Order</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Enter Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <input type="submit" value="Place Order" />
      </form>

      <h3>Orders:</h3>
      {orders.map((item, index) => (
        <div key={index}>
          <h4>Name: {item.name}</h4>
          <p>Phone: {item.phone}</p>
          <p>Address: {item.address}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </>
  );
}

export default ProductDetails;
