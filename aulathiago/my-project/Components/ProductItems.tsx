import Link from "next/link";
import React from "react";

export default function ProductItems({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.name}`} legacyBehavior>
        <a>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center">
        <Link href={`/product/${product.name}`} legacyBehavior>
          <a>
            <h2>Name:{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2"> Price:{product.price}</p>
        <p>Brand:{product.brand}</p>
        <p>Rating:{product.rating}</p>
        <p>Reviews:{product.num_reviews}</p>
        <p>Stock:{product.stock}</p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Comprar agora
        </button>
      </div>
    </div>
  );
}
