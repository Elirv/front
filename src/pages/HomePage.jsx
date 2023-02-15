import React, { useEffect, useState } from "react";
import axios, { HttpStatusCode } from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const HomePage = () => {
  const [gif, setGif] = useState([])

  const getGif = async () => {
    try {

      const response = await axios.get("http://localhost:5000/memes/get");

      console.log(HttpStatusCode.data.name);
      setGif(response.data)
      // console.log(response.data.data._id); 
    } catch (error) {
      console.log(error);
    }
  }
  // const deleteMeme = async (gif) => {
  //   // try {
  //     // console.log(gif.id);
  //     const response = await axios.delete("http://localhost:5000/memes/" + id);

  //     setGif(response.data)
  //   //   // console.log(response.data);
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // }

  console.log(gif)
  useEffect(
    () => {
      getGif()
    }, []
  )

  // useEffect(
  //   () => {
  //     deleteMeme()
  //   }, []
  // )

  return (
    <>
      <div className="container" style={{ width: '18rem' }}>
        {gif?.data?.map((gifs) => {
          return (
            <div className="card" key={gifs._id}>
              <Card.Title>{gifs.name}</Card.Title>
              <Card.Img variant src={gifs.url} />
              <Card.Body>
                <Button variant="primary">Delete</Button>
              </Card.Body>
            </div>
          )
        })}
      </div>
    </>
  );
}