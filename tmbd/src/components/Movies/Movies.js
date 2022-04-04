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
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US&page=1"; //Definir que URL le vamos a pasar
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState(
          {
              peliculas: data.results,

          }
      ))
      .catch((error) => console.log(error));
  }

  verMas(){
    let url
  }

  borrar (id) {
    let peliculasFiltradas = [];
    peliculasFiltradas = this.state.peliculas.filter(unaPelicula => unaPelicula.id !== id);

    this.setState ({
      peliculas: peliculasFiltradas
    })
  }

  render() {
    console.log(this.state.peliculas)
    return(
        <section>
            {
                this.state.peliculas.length === 0 ?
                <p>Cargando...</p> :
                this.state.peliculas.map((pelis, idx) => <Card key={pelis.title + idx} dataPelis={pelis} />)
            }
        </section>
    )
  }
}

export default Movies;
