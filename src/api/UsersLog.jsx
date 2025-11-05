import { saveUserInfo } from "../utils/Common";
import data from "./data.json";

const dummyApi= (user) => {   //because we don't have any backend so we are creating a dummy api
      
    if (data[user]) {
        return Promise.resolve(data[user].role); //if user is found then return the role of the user
    }
    return Promise.reject("User not found");
}


const login = (username , password) => {  //login function to authenticate the user

    return dummyApi(username, password) //this function returns a promise
    .then((role) => {
        saveUserInfo({
            username,
            role
        });
        return {
            status : "success",
            data : role
        }
    });

} //this function is used to login the user by calling the dummyApi function// if the user is found then it saves the user information used in the local storage using the saveUserInfo function from Common.jsx

export {
    login
};