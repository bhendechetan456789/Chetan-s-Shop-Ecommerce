import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
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
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} width="150" />
            <p className="price">${item.price}</p>
            <div className="btn-group">
              <button>Add to Cart</button>
              <Link to={`/product/${item.id}`}>
                <button>View More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apicalling;
