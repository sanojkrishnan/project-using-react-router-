import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Users.css";
import { Link } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("Users.json").then((response) => {
      setData(response.data);
    });
  });
  return (
    <div className="page users">
      {data.map((item) => {
        return (
          <div className="users-item" key={item.id}>
            <div className="title">
              <Link to={`/details/${item.id}`}>{item.name}</Link>
            </div>
            <div className="description">
              {item.address}<br />
              {item.class}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
