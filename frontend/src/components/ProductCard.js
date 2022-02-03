import React from "react";

export default function ProductCard() {
  return (
    <div className="col mb-3">
      <div className="card shadow">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src=""
          alt=""
        />
        <div className="card-body">
          <h3 className="card-title mb-5">Product Name</h3>
          <p className="card-text">
            Je fais le job dont je revais écolier, plus le temps d'être fonfon
            sous bedo bière.
          </p>
          <button type="button" className="btn btn-outline-dark">
            Voir
          </button>
        </div>
      </div>
    </div>
  );
}
