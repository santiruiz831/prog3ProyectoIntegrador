import React, {Component} from "react";
import Formulario from "../Formulario/Formulario";
import "./header.css"

class Header extends Component{
constructor(props){
    super(props)
    this.state={
        
    }
}

render(){
    return(
        <div className="header-container">
            <Formulario/>
           <img src="../persona.jpg"></img>
        </div>
    )
}

}

export default Header;