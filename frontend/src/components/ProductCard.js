import React, { useEffect, useState } from "react";
import axios from "axios";

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
            height="100%"
            src={product.image}
            alt={product.name}
          />
          <div className="card-body">
            <h3 className="card-title mb-5">{product.name}</h3>
            <p className="card-text">{product.description}</p>
            <button type="button" className="btn btn-outline-dark">
              Voir
            </button>
          </div>
        </>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div className="col mb-3" key={i} id={product.id}>
          <div className="card shadow">{list[i]}</div>
          <div className="card shadow">{list[i + 1] ? list[i + 1] : error}</div>
        </div>
      );
    }
    return result;
  };

  return <>{getProduct()}</>;
}
