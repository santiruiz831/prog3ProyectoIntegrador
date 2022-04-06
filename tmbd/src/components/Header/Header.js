import React, {Component} from "react";
import Filter from "../Filter/Filter";
import "./header.css"

class Header extends Component{
constructor(props){
    super(props)
    this.state={
        value:''
    }
}

capturarDatos(datos) {
    this.setState({
        value: datos.target.value
    },
    
    ()=> console.log(this.state.value))
}

evitarDefault(accionDefault) {
    console.log('Evitando envio del formulario');
    accionDefault.preventDefault();
}

render(){
    return(
        <div className="header-container">
             <Filter />
            <form onSubmit={(event) => this.evitarDefault(event)}>
              <input onChange={(datos) => this.capturarDatos(datos)} type='text' value={this.state.value}></input>
            </form>
           <img src="../persona.jpg"></img>
        </div>
    )
}

}

export default Header;