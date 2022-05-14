import React, { useEffect, useState } from "react";

const ImageFetch = () => {
  // const [FetchImage, setFetchImage] = useState([]);

  const GetImage = async () => {
    const image = await fetch(
      `https://api.thecatapi.com/v1/breeds?apikey=${process.env.api_key}&number=4`
    );
    const data = image.json();
    // setFetchImage(data);
    console.log(data);
    console.log(image);
  };

  useEffect(() => {
    GetImage();
  }, []);

  return <div></div>;
};

export default ImageFetch;
