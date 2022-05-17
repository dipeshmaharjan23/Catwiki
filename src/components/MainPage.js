import React from "react";
import styled from "styled-components";
import { CustomLogo } from "./CustomLogo";
import img from "../Assests/HeroImagelg.png";
import { FaSearch } from "react-icons/fa";
import ImageFetch from "./ImageFetch";

export const MainPage = () => {
  return (
    <Wrapper>
      <CustomLogo width={128} height={43} fill="black" />
      <BodyMain>
        <BodySub>
          <Logo>
            <CustomLogo width={"100%"} height={100} fill="white" />
            <Para>Get to know more about your cat breed</Para>
            <FormSearch>
              <div>
                <input className="input" placeholder="Enter your breed here" />
                <FaSearch />
              </div>
            </FormSearch>
          </Logo>
        </BodySub>

        <BodySec>
          <BodyWrap>
            <span>Most Searched Breeds</span>
            <h1>66+ Breeds For You to discover</h1>
            <span>SEE MORE</span>
          </BodyWrap>
          <ImageFetch/>
        </BodySec>
      </BodyMain>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1.5rem 1rem;
`;

const BodyMain = styled.div`
  border: 1px solid red;
  height: 150vh;
  border-radius: 2rem;
  overflow: hidden;
`;

const BodySub = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 75vh;
  border: 1px solid;
  object-fit: cover;
  object-position: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-origin: border-box;
  color: white;
  background-size: cover;
`;
const Logo = styled.div`
  margin: 200px 95px;
  width: 25%;
`;

const Para = styled.p`
  font-size: 1.125rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`;

const FormSearch = styled.form`
  div {
    position: relative;
  }
  input {
    width: 100%;
    margin: 24px 0px;
    border-radius: 30px;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    color: #291507;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    outline: none;
  }
  svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-100%, -50%);
    color: black;
  }
`;

const BodySec = styled.div`
  background-color: #e3e1dc;
  width: 100%;
  height: 100%;
  position:relative;
`;

const BodyWrap = styled.div`
  width: 80%;
  margin: 0px auto;
 

  span{
    padding:10px 0px;
  }
`;
