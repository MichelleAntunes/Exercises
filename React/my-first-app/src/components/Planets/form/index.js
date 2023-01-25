import React, { Fragment, useState } from "react";

const initialState = {
  name: "",
  description: "",
  link: "",
  img_url: "",
};
const Form = (props) => {
  const [fields, setfields] = useState(initialState);
  const handleChange = (e) =>
    setfields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = (event) => {
    props.addPlanet(fields);
    event.preventDefault();
    setfields(initialState);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            type="text"
            name="description"
            value={fields.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="img_url">Imagen:</label>
          <input
            id="img_url"
            type="text"
            name="img_url"
            value={fields.img_url}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            type="text"
            name="link"
            value={fields.link}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Form;
