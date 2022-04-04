import React, {Component} from "react";

class Footer extends Component{
constructor(props){
    super(props)
    this.state={
        
    }
}

render(){
    return(
        <div className="container">
           <img src="../facebook.png"></img>
           <img src="../instagram.png"></img>
           <img src="../twitter.png"></img>
           <img src="../youtube.png"></img>
           <ul>
               <li>Ayuda</li>
               <li>Términos de Uso</li>
               <li>Contactanos</li>
               <li>Privacidad</li>
           </ul>
           <p>@2022 Lapidus Nicole, Katz Tatiana, Ruiz Santiago</p>
        </div>
    )
}

}

export default Footer;