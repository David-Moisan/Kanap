import React from "react";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <main className="home text-center" id="home">
      <h1 className="home__title">Nos produits</h1>
      <p className="lead">Une gamme d'articles exclusifs</p>
      <section className="home__block container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
