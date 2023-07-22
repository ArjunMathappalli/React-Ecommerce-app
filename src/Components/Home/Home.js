import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../ApiService/api";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt="alternative" />
          <h2>{product.title}</h2>
          <p>
            <span className="price">${product.price}</span>
          </p>
          <Link to={`/product/${product.id}`}>
          <button>product details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
