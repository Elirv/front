import { MemeContext } from "../auth/memeContext/MemeContext";
import { useContext } from "react";
import { NavbarContainer } from "../components/InNavbar"
import { Outlet } from "react-router-dom";

export const Layout = () => {

  const { memeState } = useContext(MemeContext);
  const { user } = memeState;

  return (
    <>
      <NavbarContainer />
      <Outlet>
      </Outlet> 
    </>
  );
};
