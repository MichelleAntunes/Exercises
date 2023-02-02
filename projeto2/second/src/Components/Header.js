import React from "react";

export default function Header({
  namePesquisa,
  setNamePesquisa,
  pricePesquisa,
  setPricePesquisa,
  ordemPesquisa,
  setOrdemPesquisa,
  cart,
  setCart,
}) {
  const haldleName = (e) => {
    setNamePesquisa(e.target.value);
  };

  const calcTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const handleRemove = (index) => {
    setCart((remove) => remove.filter((_, i) => i !== index));
  };
  return (
    <nav>
      <h1>Filtros</h1>
      <select
        value={ordemPesquisa}
        onChange={(e) => {
          setOrdemPesquisa(e.target.value);
        }}
      >
        <option value="Ordem">Ordem</option>
        <option value="decrescente">Decrescente</option>
        <option value="crescente">Crescente</option>
      </select>
      <input
        type="text"
        placeholder="Digite um nome"
        value={namePesquisa}
        onChange={haldleName}
      />
      <input
        type="number"
        placeholder="Digite um preço"
        value={pricePesquisa}
        onChange={(e) => {
          setPricePesquisa(e.target.value);
        }}
      />

      <div className="cart">
        {cart.map((product, index) => (
          <div key={index}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button onClick={() => handleRemove(index)}>Remover</button>
          </div>
        ))}
      </div>
      <span>Total: R${calcTotal()}</span>
    </nav>
  );
}
