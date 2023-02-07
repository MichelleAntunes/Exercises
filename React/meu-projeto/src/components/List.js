import Item from "./item";

function List() {
  return (
    <>
      <h1> Minha Lista</h1>
      <ul>
        <Item marca="bananinnha" ano_lancamento={1985} />
        <Item marca="cebolinha" ano_lancamento={1980} />
        <Item marca="pianinho" ano_lancamento={1960} />
        <Item />
      </ul>
    </>
  );
}

export default List;
