import React, { Suspense } from "react";
import { isLoggedIn } from "../utils/Common";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";
import Usage from "../Pages/Usage";
import Details from "../Pages/Details";
import NotFound from "../Pages/NotFound";
import Header from "../Components/Header";

const MyUsers = React.lazy(() => import("../Pages/Users")); //lazy loading of the users component

const LoggedInPages = () => {
  if (!isLoggedIn()) {
    return (
      <>
        <Navigate to="/login" replace />
      </>
    );
  } else {
    return (
      <>
        <div>
          <Header /> {/**This component renders the navigation links */}
        </div>
        <Routes>
          {/**This component is responsible for rendering the appropriate component based on the current URL */}
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/**<NotFound /> component will be rendered for any unmatched routes */}
          <Route
            path="/users"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MyUsers />
              </Suspense>
            }
          />
          {/* you need to wrap the lazy loading component with <Suspense> component which is a inbuilt component of React, you can customize the fallback UI here */}
          <Route path="/details/:id/*" element={<Details />} />
          {/* :id is a variable to pass dynamic data such as user ID */}
          {/**< Route path="details/:id/" element={<Details />} >
                <Route index element={<Marks  data={userData}/>} />
                <Route path="sports" element={<Sports  data={userData}/>} />
                <Route path="remarks" element={<Remarks  data={userData}/>} />
         * </ Route>   // this is the nested route, use <Outlet /> on the details.jsx to print this components*/}
        </Routes>
      </>
    );
  }
};

export default LoggedInPages;
