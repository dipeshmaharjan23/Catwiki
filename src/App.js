import React from "react";
import { CustomLogo } from "./components/CustomLogo";
import './App.css'
import { Header } from "./components/Header";
import ImageFetch from "./components/ImageFetch";


function App() {
  return (
    <div className="App">
      <CustomLogo className='logo' fill='black'/>
      <Header/>
      <ImageFetch/>
    </div>
  );
}

export default App;
