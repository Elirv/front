import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext } from "react";
import { MusicContext } from "../musicProvider/MusicProvider";
import { NavbarContainer } from "../components/InNavbar"
import { Outlet } from "react-router-dom";

export const Layout = () => {

  const { authState } = useContext(AuthContext);
  const { user } = authState;

  const { Player } = useContext(MusicContext);
  const items = [
    {
      slug: "/profile",
      anchor: "Profile",
    },
  ];

  return (
    <>
      <NavbarContainer />
      {/* <Outlet> */}
      {/* // </Outlet> */}
    </>
  );
};
