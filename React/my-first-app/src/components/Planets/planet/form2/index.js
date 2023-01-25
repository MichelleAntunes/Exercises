import React, { Fragment, useState } from "react";

const initialSateSatellite = {
  name: "",
};
const Form = (props) => {
  const [fields, setfields] = useState(initialSateSatellite);
  const handleChangeSatellites = (e) =>
    setfields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmitSatellites = (event) => {
    event.preventDefault();
    props.addSatellites(fields);
    setfields(initialSateSatellite);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmitSatellites}>
        <div>
          <label htmlFor="name">Nome do satélite:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChangeSatellites}
          ></input>
        </div>
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Form;
