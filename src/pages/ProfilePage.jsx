import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const ProfilePage = () => {
  const { user} = useAuth0();

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
