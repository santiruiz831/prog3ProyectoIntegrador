import React, {Component} from "react";
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
                <form>
                    <input onChange={(datos)=>this.capturarDatos(datos)} type="text" value={this.state.value} />
                </form>    
            
            </div>
        )
    }

}

export default Header;