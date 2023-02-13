import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext } from "react";
import { NavbarContainer } from "../components/InNavbar"
import { Outlet } from "react-router-dom";

export const Layout = () => {

  const { authState } = useContext(AuthContext);
  const { user } = authState;


  return (
    <>
      <NavbarContainer />
      {/* <Outlet> */}
      {/* // </Outlet> */}
    </>
  );
};
