import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "../authContext/AuthContext";
import { motion } from "framer-motion";
import { StartNavbar } from "../../components/StartNavbar";
import axios from "axios";
import "../../components/Slider/Slider.css";

export const AuthHomePage = () => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const { isLogged } = authState;
  const { isAuthenticated } = useAuth0();

  const [trendData, setTrendData] = useState([]);
  const [animalsData, setAnimalsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories",
        {
          params: {
            api_key: "0z1KsHPYH5H3QRR917Fnp65Ys2afUUmG",
            limit: 50
          },
        }
      );
      console.log(results);
      setCategoriesData(results.data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resultsi = await axios(
        "https://api.giphy.com/v1/gifs/trending",
        {
          params: {
            api_key: "0z1KsHPYH5H3QRR917Fnp65Ys2afUUmG",
            limit: 50
          },
        }
      );
      console.log(resultsi);
      setTrendData(resultsi.data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories/animals",
        {
          params: {
            api_key: "0z1KsHPYH5H3QRR917Fnp65Ys2afUUmG",
            limit: 50
          },
        }
      );
      console.log(results);
      setAnimalsData(results.data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <StartNavbar />
      <div className="home">
        <h2>Categories</h2>
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1910 }}
          >
            {categoriesData?.map((categories) => {
              return (
                <motion.div className="item" key={categories.id}>
                  <img src={categories.gif.images.fixed_height.url} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <h2>Trending</h2>
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1910 }}
          >
            {trendData?.map((trend) => {
              return (
                <motion.div className="item" key={trend.id}>
                  <img src={trend.images.fixed_height.url} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <h2>Animals</h2>
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -780 }}
          >
            {animalsData?.map((animal) => {
              return (
                <motion.div className="item" key={animal.id}>
                  <img src={animal.gif.images.fixed_height.url} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

      </div>
    </>
  );
};