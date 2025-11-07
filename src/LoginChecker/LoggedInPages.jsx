import React, { Suspense } from "react";
import { isLoggedIn, isPathAllowed } from "../utils/Common";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";
import Usage from "../Pages/Usage";
import Details from "../Pages/Details";
import NotFound from "../Pages/NotFound";
import Header from "../Components/Header";
import NoAccess from "../Pages/NoAccess";

const MyUsers = React.lazy(() => import("../Pages/Users"));

const LoggedInPages = () => {
  const { pathname } = useLocation();

  // 1) If not logged in, redirect to login
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  // 2) If logged in but path is not allowed, redirect to home (or show Unauthorized)
  if (!isPathAllowed(pathname)) {
    return <Navigate to="/sorry" replace />;
  }

  // 3) Otherwise render routes (use relative paths because this component mounted at "/*")
  return (
    <>
      <Header />
      <Routes>
        <Route index element={!isLoggedIn ? <Navigate to={"/login"} /> : <Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/sorry" element={<NoAccess />} />
        <Route path="usage" element={<Usage />} />
        <Route
          path="users"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MyUsers />
            </Suspense>
          }
        />
        <Route path="details/:id/*" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default LoggedInPages;
