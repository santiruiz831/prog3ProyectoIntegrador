import React, {Component} from "react";
import "./Card.css"

class Card extends Component{
constructor(props){
    super(props)
    this.state={
        link: "https://image.tmdb.org/t/p/w342",
        text: "Ver más",
        viewMore: false,
    };

}

    viewMore() {
        if (this.state.viewMore) {
            this.setState({
                viewMore: false,
                text: "Ver más",
            });
        } else {
            this.setState({
                viewMore: true,
                text: "Ver menos",
            });
        }
    }

render(){
    return(
        <section className="todo">
        <div className="container">
            
            
                <h3>{this.props.dataPelis.title}</h3>
                <img src={this.state.link + this.props.dataPelis.poster_path} alt={this.props.dataPelis.title} />
                <p>Descripcion: {this.props.dataPelis.overview}</p>
          
               
                <section
                    className={`${this.state.viewMore ? "aditional-info-show" : "aditional-info"
                        }`}
                >
                    
                    <p>Rating: {this.props.dataPelis.vote_average}</p>
                    <p>Estreno: {this.props.dataPelis.release_date}</p>
                    <p>Popularidad: {this.props.dataPelis.popularity}</p>
                
                </section>
                <button className="more" onClick={() => this.viewMore()}>
                    {this.state.text}
                </button>
                <button onClick={() => this.props.borrarPeliculas(this.props.dataPelis.id)}>Borrar</button>
               
                
        </div>
        </section>
    )
}

}

export default Card;