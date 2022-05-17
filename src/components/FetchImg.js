import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchImg = () => {
    // const config ={
    //     method: 'get',
    //     url : 'https://api.thecatapi.com/v1/breeds?apikey=${process.env.api_key}&limit=4'
    // }
    // const GetImg = async ()=>{
    //     try{
    //         const response = await axios(config);
    //         cons
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }
     
    // const[image,setImage] =useState([]);
    const GetImg = ()=>{
        axios.get('https://api.thecatapi.com/v1/breeds?apikey=${process.env.api_key}&limit=4')
        .then((response)=>{
            console.log(response);
        })
       
    }
 
    // useEffect(()=>{
    //     FetchImg()
    // },[]);

  return (
    <div>
       {/* {image.map((result) =>{
            return(
                <div key={result.id}>
                <img src={result.image.url} alt="" />
                </div>
            )
        })
    } */}
    </div>

  )
}

export default FetchImg;