import data from "@/data/data";
import Layout from "@/Components/Layouts.tsx/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

import { Store } from "@/data/Store";

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const products = data.products.find((x) => x.slug === slug);
  if (!products) {
    return <div>Seu produto não foi encontrado</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (x) => x.slug === products.slug
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (products.stock < quantity) {
      alert("Produto não encontra mais em estoque");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...products, quantity } });
  };
  return (
    <Layout title={products.name}>
      <div className="py-2">
        <Link href={"/"} legacyBehavior>
          Voltar aos produtos
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={products.image}
            alt={products.name}
            width={350}
            height={350}
          />
          <div>
            <ul>
              <li>{products.name}</li>
              <li>Marca do produto:{products.brand}</li>
              <li>
                {products.rating} de {products.num_reviews}
              </li>
              <li>Descrição do produto:{products.description}</li>
            </ul>
          </div>
          <div>
            <div>
              Preço
              <div>R${products.price}</div>
            </div>
            <div>
              Status
              <div>
                {products.stock > 0 ? "produto em estoque" : "sem estoque"}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={addToCartHandler}
              >
                Comprar agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
