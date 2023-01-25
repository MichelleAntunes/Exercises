import React from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/DescriptionWithLink";
import { useState, useEffect } from "react";
import Form from "./form2";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  const addSatellites = (new_satellites) => {
    setSatellites([...satellites, new_satellites]);
  };
  return (
    <div>
      <h4>{props.name}</h4>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} />
      <h4>Satélites</h4>
      <h2>Adicionando seu satélite</h2>
      <Form addSatellites={addSatellites} />
      <ul>
        {satellites.map((element, index) => (
          <li key={index}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Planet;
