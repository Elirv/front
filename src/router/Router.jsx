import { Routes, Route, Navigate } from "react-router-dom";
import { MusicProvider } from "../musicProvider/MusicProvider.jsx";
import { AuthProvider } from "../auth/authContext/AuthProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthHomePage } from "../auth/pages/AuthHomePage";
import { ProfilePage, HomePage } from "../pages";
import { Layout } from "../pages/Layout.jsx";

const Router = () => {
  const { isAuthenticated } = useAuth0();
  console.log("islogged?Router: ", isAuthenticated);

  return (
    <>
      <AuthProvider>
        <MusicProvider>
          <Routes>
            <Route index path="/auth" element={
              isAuthenticated ? <Navigate to="/" /> : <AuthHomePage />
            } />
            <Route element={<Layout />}>
              <Route path="/" element={
                isAuthenticated ? <HomePage /> : <Navigate to="/auth" />
              } />
              <Route path="/profile" element={
                isAuthenticated ? <ProfilePage /> : <Navigate to="/auth" />
              } />
              {/* <Route path="/profile" element={<ProfilePage />} /> */}
              {/* <Route path="/library" element={<LibraryPage />} />
              <Route path="/liked" element={<LikedPlayList />} /> */}
            </Route>
          </Routes>
        </MusicProvider>
      </AuthProvider>
    </>
  );
};

export default Router;