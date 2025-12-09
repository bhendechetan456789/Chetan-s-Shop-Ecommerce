import React, { useState, useEffect } from 'react';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    quantity: ''
  });
  const [submitData, setSubmitData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitData(prev => [...prev, formData]);
  }

  return (
    <>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="150" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>

      {
        !showForm && (
          <button onClick={() => setShowForm(true)}>Buy Now</button>
        )
      }

      {
        showForm && (
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
        )
      }

      {
        submitData.map((item) => (
          <>
            <h2>Name: {item.name}</h2>
            <h2>Phone: {item.phone}</h2>
            <h2>Address: {item.address}</h2>
            <h2>Quantity: {item.quantity}</h2>
          </>
        ))
      }
    </>
  );
}

export default ProductDetails;
