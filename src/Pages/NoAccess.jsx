import React from "react";
import { useNavigate } from "react-router-dom";

function NoAccess() {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/");
  };
  return (
    <div>
      Sorry only Admins can access this Page !
      <div>
        <button onClick={handleChange}>back to home</button>
      </div>
    </div>
  );
}

export default NoAccess;
