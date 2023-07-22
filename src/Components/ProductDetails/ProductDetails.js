import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductId } from "../../ApiService/api";
import './ProductDetails.css'
function ProductDetails() {
  const { id } = useParams();
  const [productDetails,setProductDetails] = useState({})

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data)
    };
    fetchProductDetails();
  }, [id]);
  const handleBuynow = ()=>{
    window.confirm("Out of stock")
  }

  return (
    <div className="product-details-container">
      <img src={productDetails.image} alt="image" className="product-image" />
      <div className="product-info">
      <h2 className="product-title">{productDetails.title}</h2>
      <p className="product-des">{productDetails.description}</p>
      <p className="product-price">{productDetails.price}</p>
      
      <button className="buy-now-button" onClick={handleBuynow}>BUY NOW</button>
      <Link to='/'>
      <button className="go-back">GO BACK TO HOME</button>
      </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
