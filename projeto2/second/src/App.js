import "./App.css";
import Home from "./Components/Pages/Home";
import products from "./dbItens/db";
import Header from "./Components/Header";
import { useState } from "react";
function App() {
  const [namePesquisa, setNamePesquisa] = useState("");
  const [pricePesquisa, setPricePesquisa] = useState("");
  const [ordemPesquisa, setOrdemPesquisa] = useState("");
  const [cart, setCart] = useState([]);
  const handleFilter = (product) => {
    return product.name.toLowerCase().includes(namePesquisa.toLowerCase());
  };
  const handleFilterPrice = (product) => {
    return pricePesquisa ? product.price <= pricePesquisa : true;
  };

  const handleClick = (product) => {
    const filterProduct = { name: product.name, price: product.price };

    setCart([...cart, filterProduct]);
  };
  return (
    <div className="App">
      <Header
        namePesquisa={namePesquisa}
        setNamePesquisa={setNamePesquisa}
        pricePesquisa={pricePesquisa}
        setPricePesquisa={setPricePesquisa}
        ordemPesquisa={ordemPesquisa}
        setOrdemPesquisa={setOrdemPesquisa}
        cart={cart}
        setCart={setCart}
      />
      {products
        .filter(handleFilter)
        .filter(handleFilterPrice)
        .sort((a, b) => {
          if (ordemPesquisa === "crescente") {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return +1;
            } else {
              return 0;
            }
          }
          if (ordemPesquisa === "decrescente") {
            if (a.name < b.name) {
              return +1;
            } else if (a.name > b.name) {
              return -1;
            } else {
              return 0;
            }
          }
        })
        .map((product) => (
          <Home
            product={product}
            key={product.slug}
            handleClick={handleClick}
          ></Home>
        ))}
    </div>
  );
}

export default App;
