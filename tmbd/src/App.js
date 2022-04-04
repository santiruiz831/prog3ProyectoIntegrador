import React from "react";
import Movies from "./components/Movies/Movies";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="Container">
      <Header/>
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
