import { useAuth0 } from "@auth0/auth0-react";
import { MemeContext } from "../auth/memeContext/MemeContext";
import { useContext } from "react";
import React from "react";
import { Button } from "react-bootstrap";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  const { logoutReducer } = useContext(MemeContext);

  function logoutWrapper() {
    logoutReducer();

    logout({ returnTo: window.location.origin + "/auth" });
  }

  return <Button variant="outline-light" onClick={() => logoutWrapper()}>Logout</Button>;
};