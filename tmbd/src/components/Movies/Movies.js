import React, { Component } from "react";
import Card from "../Card/Card";


class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        peliculas: [],
        next: "https://api.themoviedb.org/3/movie/upcoming?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US&page=1",
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
    let url = this.state.next
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState(
        {
          peliculas: this.state.peliculas.concat(data.results),
          next: data.info.next,
        }
      ))
      .catch((error) => console.log(error));
  }

  filtrarPeliculas(textoAFiltrar) {
    let peliculasFiltradas = [];
    peliculasFiltradas = this.state.peliculas.filter(unaPelicula => unaPelicula.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))
    this.setState({
      peliculas: peliculasFiltradas
    })

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
      <React.Fragment>
        <button type="button" onClick={()=> this.verMas ()} > Pedir más</button>
        <section>
            {
                this.state.peliculas.length === 0 ?
                <p>Cargando...</p> :
                this.state.peliculas.map((pelis, idx) => <Card key={pelis.title + idx} dataPelis={pelis} borrarPeliculas= {(id) => this.borrar(id)} />)
            }
        </section>
      </React.Fragment>
    )
  }
}

export default Movies;
