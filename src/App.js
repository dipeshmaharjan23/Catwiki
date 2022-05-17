import React from "react";
import './App.css'
import { MainPage } from "./components/MainPage";
// import ImageFetch from "./components/ImageFetch";
// import { createGlobalStyle } from "styled-components";
import FetchImg from "./components/FetchImg";



function App() {
  return (
   
    <div className="App">
    
      <MainPage/>
    {/* <FetchImg/> */}
    {/* <ImageFetch/> */}
    </div>

  );
}

export default App;

// const GlobalStyle=createGlobalStyle`
//   body{
//     font-family: 'Montserrat', sans-serif;
//   }
// `