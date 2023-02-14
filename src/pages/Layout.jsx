import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext, useEffect, useState } from "react";
import { NavbarContainer } from "../components/InNavbar"
import { Outlet } from "react-router-dom";
import {createMemes} from '../api/getMemes'
import axios from "axios";
export const Layout = () => {

  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const [someData, setSomeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories/anime",
        {
          params: {
            api_key: "0z1KsHPYH5H3QRR917Fnp65Ys2afUUmG",
            limit: 5
          },
        }
      );
      console.log(results);
      setSomeData(results.data.data);
    };
    fetchData();
  }, []);

  

  return (
    <>
      <NavbarContainer />
      {/* <Outlet> */}
      {/* // </Outlet> */}
      {/* <div>
        <input
        className="image-title"
          type="text"
          placeholder="title"
          value={title}
          // onChange={(e) => setTitle(e.target.value)}
        />
        <select onChange={handleCategory} value={category}>
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      
        <button 
        // onClick={handleOnClick}
        >Upload your gif</button>
      </div> */}
    </>
  );
};
