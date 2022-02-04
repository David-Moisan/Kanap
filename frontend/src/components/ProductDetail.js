import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const API_URL = "http://127.0.0.1:8000";
  const { id } = useParams();

  useEffect(() => {
    const loadDataForOneProductFromAPI = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/product/` + id + '/');
        console.log(response);
        setProduct(response.data);
      } catch (error) {}
    };
    loadDataForOneProductFromAPI();
  }, [id]);

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <img
              className="img-product"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="col-lg-6 col-md-8 mx-auto product">
            <h1 className="product__name fw-light">{product.name}</h1>
            <h2 className="product__price">{product.price}€</h2>
            <hr className="product__sep" />
            <h3 className="product__description--title">Description</h3>
            <p className="product__description">{product.description}</p>
            <hr className="product__sep" />
            <div className="form-group">
              <p className="product__color">Choisir une couleur :</p>
              <input value={product.color} type="color" name="product-color" />
            </div>
            <div className="form-group">
              <p className="product__color">Quantité :</p>
              <input
                value={product.quantity}
                type="number"
                name="product-quantity"
              />
            </div>
            <hr className="product__sep" />
            <Link to="/" className="btn btn-dark">
              Ajouter au panier
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
