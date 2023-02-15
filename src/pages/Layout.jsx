import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext, useEffect, useState } from "react";
import { NavbarContainer } from "../components/InNavbar"
import axios from "axios";
import { Outlet } from "react-router-dom";

export const Layout = () => {

  const [someData, setSomeData] = useState(
    {
      name: '',
      url: ''
    });

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {

      const response = await axios.post("http://localhost:5000/memes/create", someData);
      console.log(response);
      if(response.statusText==='OK') {
        alert('uploaded successfully')
        // formulario.reset()
        // setSomeData({})
        // resetValues();
      }

    } catch (error) {
      console.log(error);
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   useEffect(() => {
  //     fetch('http://localhost:5000/memes/create')
  //       .then((response) => {
  //         return response.json
  //       })
  //       .then((someData) => {
  //         setSomeData(someData)
  //       })
  //   }, [])
  //   console.log(someData);
  // }

  return (
    <>
      <NavbarContainer />
      <form id="formulario" onSubmit={handleSubmit}>
        <input type='text' name="name" value={someData.name} onChange={(e) =>  setSomeData({ ...someData, name: e.target.value }) } />
        <input type='text' name="url" value={someData.url} onChange={(e) => setSomeData({ ...someData, url: e.target.value }) } />
        <button>Upload your gif</button>
      </form>
      <Outlet>
        
      </Outlet>
    </>
  );
};
