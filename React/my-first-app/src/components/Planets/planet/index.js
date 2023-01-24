import React from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/DescriptionWithLink";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      satellites: [],
    };
  }
  componentDidMount() {
    getSatellites(this.props.id).then((data) => {
      this.setState((state) => ({
        satellites: data["satellites"],
      }));
    });
  }
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <DescriptionWithLink
          description={this.props.description}
          link={this.props.link}
        />
        <GrayImg img_url={this.props.img_url} />
        <h4>Satélites</h4>
        <ul>
          {this.state.satellites.map((element, index) => (
            <li key={index}>{element.name}</li>
          ))}
        </ul>

        {/* <h1>Lista de satélites</h1>
      <ul>
        {names.map((element) => (
          <li>Nome: {element.toUpperCase()}</li>
        ))}
      </ul> */}
      </div>
    );
  }
}

export default Planet;
