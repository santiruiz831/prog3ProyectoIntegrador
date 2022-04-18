import React, { Component } from "react";
import Card from "../Card/Card";
import Header from '../Header/Header'
import './movies.css'


class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        peliculas: [],
        next: 1,
        peliculaOrdenada: "peliculaColumna",
        peliculasYaFiltradas: [],

    };
  }

  componentDidMount() {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US&page="+this.state.next;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState(
          {
              peliculas: data.results,
              next: this.state.next++,
              peliculasYaFiltradas: data.results
          

          }
      ))
      .catch((error) => console.log(error));
  }

  verMas(){
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US&page="+this.state.next
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState(
        {
          peliculas: this.state.peliculas.concat(data.results),
          peliculasYaFiltradas:this.state.peliculas.concat(data.results),
          next: this.state.next++
        }
      ))
      .catch((error) => console.log(error));
  }

  filtrarPeliculas(textoAFiltrar){
    let peliculasFiltradas = [];
    peliculasFiltradas = this.state.peliculas.filter( unaPelicula => unaPelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
    
    this.setState({
      peliculasYaFiltradas: peliculasFiltradas
    })

  }

  borrar (id) {
    let peliculasFiltradas = [];
    peliculasFiltradas = this.state.peliculas.filter(unaPelicula => unaPelicula.id !== id);

    this.setState ({
      peliculasYaFiltradas: peliculasFiltradas,
      peliculas: peliculasFiltradas
    })
  }

  filas() {
    this.setState ({
        peliculaOrdenada: "peliculaFila"
    })
}

columnas() {
    this.setState ({
        peliculaOrdenada: "peliculaColumna"
    })
}

  render() {
    console.log(this.state.peliculas)
    return(
      <React.Fragment> 
      <Header filtrarPeliculas={(textoAFiltrar)=>this.filtrarPeliculas(textoAFiltrar)}/>
        <button className="pedir-mas" type="button" onClick={()=> this.verMas ()} > Pedir más</button>
        
        <div className = "orden">
          <i className="fas fa-th" onClick={() => this.columnas()}/>
          <i className="fas fa-align-justify" onClick={() => this.filas()}/>
        </div>

        <section className={`card-container`}>
            {
                this.state.peliculas.length === 0 ?
                <p>Cargando...</p> :
                this.state.peliculasYaFiltradas.length === 0 ?
                <p>No hay datos que coincidan con su búsqueda</p> :
                this.state.peliculasYaFiltradas.map((pelis, idx) => <Card key={pelis.title + idx} dataPelis={pelis} borrarPeliculas= {(id) => this.borrar(id)} cardClassName={this.state.peliculaOrdenada} />)
            }
        </section>
      </React.Fragment>
    )
  }
}

export default Movies;
