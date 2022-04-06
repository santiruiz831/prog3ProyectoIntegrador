import React from "react";
import Movies from "./components/Movies/Movies";
import Footer from './components/Footer/Footer'
import './app.css'

function App() {
  return (
    <div className="Container">
      <Movies />
      <Footer/>
    </div>
  );
}

export default App;
