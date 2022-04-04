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
        <section className="todo">
        <div className="container">
            
            <div className="pre-ver-mas">
                <h3>{this.props.dataPelis.title}</h3>
                <img src={this.state.link + this.props.dataPelis.poster_path} alt={this.props.dataPelis.title} />
                <p>Descripcion: {this.props.dataPelis.overview}</p>
            </div>
            <div className="post-ver-mas">
                <p onClick={ ()=> this.props.verMas(this.props.dataPelis.id)}>Ver Más</p>
                    <p>Rating: {this.props.dataPelis.vote_average}</p>
                    <p>Estreno: {this.props.dataPelis.release_date}</p>
                    <p>Popularidad: {this.props.dataPelis.popularity}</p>
                <button onClick={ ()=> this.props.borrarPeliculas(this.props.dataPelis.id)}>Borrar</button>
           </div>
        </div>
        </section>
    )
}

}

export default Card;