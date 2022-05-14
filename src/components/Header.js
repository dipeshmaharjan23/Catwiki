import React from "react";
import { CustomLogo } from "./CustomLogo";
import "./Header.css";
import { FaSistrix } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <div className="container">
        <div className="sub-container">
          <div className="logo">
            <CustomLogo className="logo" fill="white" />
          </div>
          <p>Get to know more about your cat breed</p>
          <form>
            <FaSistrix></FaSistrix>
            <input
              className="input"
              placeholder="Enter your breed here"
            ></input>
          </form>
        </div>
      </div>

      <div className="second-container">
        <p>Most Searched Breeds</p>
        <div className="abc">
          <h1>66+ Breeds For you to discover</h1>
          <h2>SEE MORE</h2>
        </div>
        
      </div>
    </>
  );
};
