import React, {Component} from "react";
import "./Card.css"

class Card extends Component{
constructor(props){
    super(props)
    this.state={
        link: "https://image.tmdb.org/t/p/w342"
    }
}

render(){
    return(
        <div className="container">
            <h3>{this.props.dataPelis.title}</h3>
            <img src={this.state.link + this.props.dataPelis.poster_path} alt={this.props.dataPelis.title} />
            <p>Descripcion: {this.props.dataPelis.overview}</p>
            <p onClick={ ()=> this.props.verMas(this.props.dataPelis.id)}>Ver Más</p>
                <p>Rating: {this.props.dataPelis.vote_average}</p>
                <p>Estreno: {this.props.dataPelis.release_date}</p>
                <p>Popularidad: {this.props.dataPelis.popularity}</p>
            <button onClick={ ()=> this.props.borrarPelicula(this.props.dataPelis.id)}>Borrar</button>
        </div>
    )
}

}

export default Card;