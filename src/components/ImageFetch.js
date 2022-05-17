import React, { useEffect, useState } from "react";
// import './ImgFetch.css'
import styled from 'styled-components'

const ImageFetch = () => {
  const [FetchImage, setFetchImage] = useState([]);

  const GetImage = async () => {
    const image = await fetch(
      `https://api.thecatapi.com/v1/breeds?apikey=${process.env.api_key}&limit=4`
    );
    const data =await image.json();
    setFetchImage(data);
  
  };

  useEffect(() => {
    GetImage();
  }, []);

  return( 
  <ImgWrap>
     {FetchImage.map((item)=>{
                return(
                    <Wrap key ={item.id}>
                        <img src={item.image.url} />
                        <h4>{item.name}</h4>
                    </Wrap>
                )
            })}
  </ImgWrap>
  );
};

export default ImageFetch;

const ImgWrap =styled.div`
  border:1px solid red;
  display:flex;
`
const Wrap = styled.div`
  width:200px ;
  /* display:flex; */
  border:1px solid green;
  border-radius: 15px;
  margin:0 auto;
  img{
    width:100%;
    height:100% ;
    object-fit:cover;
    margin:10px 10px;
    background-repeat: no-repeat;
    background
  }
`