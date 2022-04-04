import React from "react";
import Movies from "./components/Movies/Movies";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";

function App() {
  return (
    <div className="Container">
      <Header/>
      <Formulario/>
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
