import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details() {
  const obj = useParams();
  const [userData, setUserData] = useState(null);
  console.log(obj);
  const userId = obj.id;
  useEffect(() => {
    axios("/Users.json").then((response) => {
      console.log("resp", response.data);
      const user = response.data.find((data) => data.id === parseInt(userId));
      setUserData(user);
    });
  }, [userId]);
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
    </div>
  );
}

export default Details;
