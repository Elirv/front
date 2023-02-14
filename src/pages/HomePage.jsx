import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const HomePage = () => {
  const [gif, setGif] = useState([])
  const getGif = async () => {

    try {

      const response = await axios.get("http://localhost:5000/memes/get");

      setGif(response.data)
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(gif)
  useEffect(
    () => {
      getGif()
    }, []
  )

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