import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Users.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  const [params, setParams] = useSearchParams({}); //useSearchParams hook is used to read and modify the query string in the URL . its a react router dom hook
  const cls = params.get("class"); //get method is used to get the value of a specific query parameter from the URL. here we are getting the value of the "class" parameter

  const navigate = useNavigate(); //useNavigate hook is used to programmatically navigate to different routes in the application 

  const handleClick = (id) => {
    navigate(`/details/${id}`, {
      //replace: true, ////////remember this option, the issue that showing in browser back button is because of this option
      state: {
        user: data.find((item) => item.id === id),
      },
    }); //navigating to the details page of the user with the given id //replace:true means the current entry in the history stack will be replaced with the new one. //state:{} is used to pass additional state data to the target route
  }

  useEffect(() => {
    axios("/project-using-react-router-/Users.json").then((response) => {
      setData(response.data);
    });
  },[]);

  const handleSelectChange =(e) => {
    if (e.target.value === "All") {
      setParams({}); //if "All" is selected,we clear the query parameters from the URL
      
    }
    else{setParams({class: e.target.value});} //otherwise we set the "class" query parameter to the selected value
  }
  return (
    <div className="page users">
      <div className="options">
        <div>Select Class:</div>
        <div>
          <select onChange={handleSelectChange} value={cls || "All"}>
            <option>All</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
      </div>
      {data
        .filter((item) => {
          if (!cls) {
            return true;
          }
          return item.class === cls;
        })
        .map((item) => {
          return (
            <div className="users-item" key={item.id} onClick={() => handleClick(item.id)}>
              <div className="title">
                {item.name}
              </div>
              <div className="description">
                {item.address}
                <br />
                {item.class}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Users;
