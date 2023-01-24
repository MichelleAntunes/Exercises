import React, { Fragment } from "react";
import Planet from "./planet";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

//transformando a funcao em classe para conseguir mudar seu estado
class Planets extends React.Component {
  constructor(props) {
    // obrigatório preencher essa linha dessa forma
    super(props); // obrigatório preencher essa linha dessa forma
    this.state = {
      //atribuindo o state para esse componente
      planets: [
        //colocar os planetas aqui substitui o async function e o componentDidMount que vem de API
        // {
        //   name: "Mercúrio",
        //   description: "Lore lore lore lore",
        //   img_url:
        //     "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sonda-new-horizons-registrou-imagem-plutao-em-julho-2015-55a55da01dda4.jpg",
        //   link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
        // },
        // {
        //   name: "Plutão",
        //   description: "Lorem lorem lorem lorem",
        //   img_url:
        //     "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sonda-new-horizons-registrou-imagem-plutao-em-julho-2015-55a55da01dda4.jpg",
        //   link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
        // },
        // {
        //   name: "Plutão",
        //   description: "Lorem lorem lorem lorem",
        //   img_url:
        //     "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sonda-new-horizons-registrou-imagem-plutao-em-julho-2015-55a55da01dda4.jpg",
        //   link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
        // },
      ],
    };
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data["planets"],
      }));
    });
  }
  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };
  duplicateLastPlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planet],
    }));
  };
  render() {
    return (
      <Fragment>
        <h3> Planet List</h3>
        <button onClick={this.removeLast}>Remove Last!</button>
        <button onClick={this.duplicateLastPlanet}>Duplicate Last!</button>
        {this.state.planets.map((element) => (
          <Planet
            name={element.name}
            description={element.description}
            img_url={element.img_url}
            link={element.link}
            id={element.name}
          />
        ))}
      </Fragment>
    );
  }
}
export default Planets;
