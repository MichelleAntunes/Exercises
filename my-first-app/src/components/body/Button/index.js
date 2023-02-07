import React, { useState, useEffect } from "react";
import Adega from "./Adega/Adega";

async function getWines() {
  let response = await fetch("http://localhost:3000/api/wines.json");
  let data = await response.json();
  return data;
}

const ButtonSearch = () => {
  const [wines, setWines] = useState("");

  useEffect(() => {
    getWines().then((data) => {
      setWines(data["wines"]);
    });
  }, []);
  console.log(wines);

  return (
    <div>
      {/* <form>
        +
        <input
          type="text"
          name="search"
          id="search"
          value={wines}
          // onChange={chooseWine}
        ></input>
      </form> */}
      {wines.map((element, index) => {
        console.log(element);
        <Adega
          key={index}
          name={element.name}
          description={element.description}
          img_url={element.img_url}
          link={element.link}
          id={element.name}
        />;
      })}
    </div>
  );
};

export default ButtonSearch;
