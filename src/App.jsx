import React, { Suspense } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Usage from "./Pages/Usage";
import NotFound from "./Pages/NotFound";
import Details from "./Pages/Details";
import Header from "./Components/Header";
import Login from "./Pages/Login";

const MyUsers = React.lazy(() => import("./Pages/Users")); //lazy loading of the users component

function App() {
  return (
    <HashRouter>
      {/* wrapper component for routing. this helps with reading ULs, to store history, and also with navigation */}
      <div>
        <Header /> {/**This component renders the navigation links */}
      </div>
      <div className="page">
        <Routes>
          <Route path="login" element={<Login />} />
          {/**This component is responsible for rendering the appropriate component based on the current URL */}
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/usage" element={<Usage />} />

          <Route
            path="/users"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MyUsers />
              </Suspense>
            }
          />
          {/* you need to wrap the lazy loading component with <Suspense> component which is a inbuilt component of React, you can customize the fallback UI here */}

          <Route path="*" element={<NotFound />} />
          <Route path="/details/:id/*" element={<Details />} />
          {/* :id is a variable to pass dynamic data such as user ID */}
          {/**< Route path="details/:id/" element={<Details />} >
                <Route index element={<Marks  data={userData}/>} />
                <Route path="sports" element={<Sports  data={userData}/>} />
                <Route path="remarks" element={<Remarks  data={userData}/>} />
         * </ Route>   // this is the nested route, use <Outlet /> on the details.jsx to print this components*/}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
