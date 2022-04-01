import React, { Component } from "react";
import Card from "../Card/Card";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        peliculas: []
    };
  }

  componentDidMount() {
    let url = ""; //Definir que URL le vamos a pasar
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState(
          {
              peliculas: data.results
          }
      ))
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.personajes)
    return(
        <section>
            {
                this.state.peliculas.length === 0 ?
                <p>Cargando...</p> :
                this.state.peliculas.map((pelis, idx) => <Card key={pelis.name + idx} dataPelis={pelis} />)
            }
        </section>
    )
  }
}

export default Movies;
