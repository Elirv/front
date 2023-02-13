import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext } from "react";
import React from "react";
import { Button } from "react-bootstrap";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  const { logoutReducer } = useContext(AuthContext);

  function logoutWrapper() {
    logoutReducer();

    logout({ returnTo: window.location.origin + "/auth" });
  }

  return <Button variant="outline-light" onClick={() => logoutWrapper()}>Logout</Button>;
};