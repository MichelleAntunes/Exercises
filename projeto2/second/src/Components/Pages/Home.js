import React from "react";
import "./Home.css";

export default function Home({ product, handleClick }) {
  return (
    <div>
      <section>
        <div className="card">
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => handleClick(product)}>Comprar</button>
        </div>
      </section>
    </div>
  );
}
