import React, { useEffect, useState } from "react";
import "./Apicalling.css"; 

function Apicalling() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="product-page">
      <h2>Explore Products</h2>
      <div className="products">
        {data.map((item) => (
          <div className="product-card">
            <img src={item.image} alt={item.title} />
            <p className="price">${item.price}</p>
            <div className="btn-group">
              <button>Add to Cart</button>
              <button>View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apicalling;
