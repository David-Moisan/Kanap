import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = "http://127.0.0.1:8000";

  useEffect(() => {
    const loadProductFromAPI = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/product/`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
        if (error) return <i className="fa fa-times" aria-hidden="true"></i>;
      }
    };

    loadProductFromAPI();
  }, []);

  const getProduct = () => {
    let list = [];
    let result = [];

    product.map((product) => {
      return list.push(
        <>
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            src={product.image}
            alt={product.name}
          />
          <div className="card-body">
            <h3 className="card-title mb-5">{product.name}</h3>
            <p className="card-text">{product.description}</p>
            <Link to={`/product/${product.id}`} className="btn btn-outline-dark">
              Voir
<<<<<<<Link HEAD
=======
            </Link>
            <Link to="/" className="btn btn-success">
              <i className="fa fa-plus" aria-hidden="true"></i>
>>>>>>> homepage
            </Link>
          </div>
        </>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <>
          <div className="col mb-3">
            <div className="card shadow" key={i}  id={product.id} style={{minHeight: "40rem"}}>{list[i]}</div>
          </div>
          <div className="col mb-3">
            <div className="card shadow" key={i} id={product.id}>{list[i + 1] ? list[i + 1] : error}</div>
          </div>
        </>
      );
    }
    return result;
  };

  return <>{getProduct()}</>;
}
