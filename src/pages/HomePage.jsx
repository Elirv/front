import React, { useContext, useEffect, useState } from "react";
import { MemeContext } from "../auth/memeContext/MemeContext";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import axios from "axios";

export const HomePage = () => {
  const { isAuthenticated, user: userFromAuth0 } = useAuth0();
  const { login, memeState } = useContext(MemeContext);
  const { isLogged, user } = memeState;

  useEffect(() => {
    login(userFromAuth0);
  }, [userFromAuth0]);

  const [tracksData, setTracksData] = useState([]);

  const getTracks = async () => {
    const tracksApi = "http://localhost:4000/tracks";

    try {
      const response = await axios.get(tracksApi);
      setTracksData(response.data.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getTracks();
  }, []);

  const getAllAlbums = async () => {
    try {
      const response = await axios.get("http://localhost:4000/albums");
      setAlbumData(response.data.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };


  // const handleOnClick = () => {
  //   // if (!category) {
  //   //   return toast("Please, select a category,", {type: "info", position: "top-center"})
  //   // }

  //   const formData = new FormData();
  //   formData.append("url", url);

  //   axios({
  //     method: "post",
  //     url: "http://localhost:5000/memes/create",
  //     data: formData,
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //     .then(() => {
  //       setIsUpoaded(true);
  //       toast("Upload successful!", { type: "success", position: "top-center" });
  //       resetValues()
  //     })
  //     .catch(() => toast("Upload failed!", { type: "error", position: "top-center" }));
  // };

  // const handleFileChange = (e) => {
  //   const { files } = e.target;
  //   if (files) {
  //     setFile(files[0]);
  //     setTitle(files[0].name.split('.').slice(0, -1).join('.'));
  //   } else {
  //     setFile(undefined);
  //   }
  //   console.log(files);
  // };


  return (
    <>
      <h1>Memes</h1>
      <div className="home">
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1910 }}
          >
            {tracksData?.map((album) => {
              return (
                <motion.div className="item" key={album.id}>
                  <img src={album.thumbnail} alt={album.title} />
                  <p>{album.title}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>




      {/* <label>
        <div className="file-input-placeholder">
        </div>
        <input type="file" style={{ display: "none" }} />
        <input type="file" onChange={handleFileChange} style={{ display: "none" }} />
      </label>
      <input
        className="image-title"
        type="text"
        placeholder="title"
        value={url}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleOnClick}>Upload your gif</button> */}
    </>
  );
};
