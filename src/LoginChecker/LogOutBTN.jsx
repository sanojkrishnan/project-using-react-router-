import React from 'react'
import { clearUserInfo } from '../utils/Common';
import {  useNavigate } from 'react-router-dom';

function LogOutBTN() {

    const navigate = useNavigate();
    const handleClick = () => {
        clearUserInfo();                // removes "data"
        navigate("/login", { replace: true }); // go to login page //replace true means we are replacing the current entry in the history stack instead of adding a new one

    }
  return (
    <div>
        <button onClick={handleClick}>Log Out</button>
    </div>
  )
}

export default LogOutBTN