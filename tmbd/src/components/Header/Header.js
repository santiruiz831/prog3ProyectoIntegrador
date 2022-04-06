import React, {Component} from "react";
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
           <img src="../persona.jpg"></img>
        </div>
    )
}

}

export default Header;