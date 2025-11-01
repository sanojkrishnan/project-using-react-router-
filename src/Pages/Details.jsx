import React, { useEffect, useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./Details.css";
import axios from "axios";
import Marks from "./Marks";
import Remarks from "./Remarks";
import Sports from "./Sports";

function Details() {
  const obj = useParams(); //useParams hook is used to access the dynamic parameters from the URL. here we are accessing the "id" parameter
  const urlId = obj.id;
  console.log("userId", urlId); //id from the url
  const location = useLocation(); //useLocation hook is used to access the current location object, which contains information about the current URL
  const state = location.state || {}; //state property of the location object is used to access the state data that was passed during navigation to this route
  const navigate = useNavigate(); //useNavigate hook is used to programmatically navigate to different routes in the application
  const [userData, setUserData] = useState(state.user); //initializing userData state with the user data from the location state

  useEffect(() => {
    //fetching user data if not available in state
    if (!userData) {
      //only fetch if userData is not already available
      axios("/Users.json").then((response) => {
        //fetching the Users.json file
        console.log("resp", response.data); //logging the response data
        const user = response.data.find((data) => data.id === parseInt(urlId)); //finding the user with the matching id from the response data
        setUserData(user); //setting the userData state with the found user data
      });
    }
  }, [urlId, userData]); //dependencies for the useEffect hook

  if (!userData) {
    return null; //or a loading indicator can be returned here
  }

  return (
    <div className="details">
      <h1 className="title">
        {userData ? userData.name : "Loading..."}
        {userData && userData.isActive ? (
          <div className="green">Active</div>
        ) : (
          <div className="red">Inactive</div>
        )}
      </h1>
      <div className="body">
        {userData ? userData.address : " "} <br />
        {userData ? userData.class : " "} <br />
        {userData ? userData.phone : " "}
      </div>
      <div className="sub-menu">
        <NavLink to={`/details/${urlId}/marks`} >
          <span>Marks</span>
        </NavLink>
        <NavLink to={`/details/${urlId}/sports`}>
          <span>Sports</span>
        </NavLink>
        <NavLink to={`/details/${urlId}/remarks`}>
          <span>Remarks</span>
        </NavLink>
      </div>
      <div className="details-body">
        <Routes>
          <Route path="" element={<Marks />} />
          <Route path="marks" element={<Marks />} />
          <Route path="sports" element={<Sports />} />
          <Route path="remarks" element={<Remarks />} />
        </Routes>
      </div>
      <div>
        <button
          onClick={() => {
           // navigate(-1); //-1 means go back to the previous page
            navigate("/users"); //navigating back to the users page 
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Details;
