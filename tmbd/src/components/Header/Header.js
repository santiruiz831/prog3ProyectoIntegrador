import React, {Component} from "react";
import Filter from "../Filter/Filter";
import "./header.css"

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            value:'',
        }
    }

    capturarDatos(datos) {
        this.setState({
            value: datos.target.value
        },
        
        ()=>this.props.filtrarPeliculas(this.state.value))
    }

    evitarDefault(accionDefault) {
        console.log('Evitando envio del formulario');
        accionDefault.preventDefault();
    }


    render(){
        return(
            <div className="header-container">

                <h4>Nombre de la pagina</h4>

                <form onSubmit={(event) => this.evitarDefault(event)}>
                <input className="buscador" onChange={(datos) => this.capturarDatos(datos)} type='text' name="usuario" placeholder='ingrese pelicula' value={this.state.value}></input>
                </form>
                

            </div>
        )
    }

}

export default Header;