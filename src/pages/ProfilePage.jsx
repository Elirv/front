import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MemeContext } from "../auth/memeContext/MemeContext";

export const ProfilePage = () => {
  const { user} = useAuth0();

  // const { login, authState } = useContext(memeContext);
  // const { isLogged, user } = authState;
console.log(user);
  return (
    <>
          <div>
            <div>
              <label className="line">Username:</label>
              <p> {user?.name}</p>
            </div>
            <div>
              <label className="line">Name:</label>
              <p> {user?.name}</p>
            </div>
            <div>
              <label className="line">First Name:</label>
              <p> {user?.nickname}</p>
            </div>
            <div>
              <label className="line">Email:</label>
              <p> {user?.email}</p>
            </div>
          </div>
    </>
  );
};
