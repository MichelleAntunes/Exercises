import React from "react";

const Adega = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.id}</p>
      <p>{props.description}</p>
      <img>{props.img_url}</img>
    </div>
  );
};

export default Adega;
