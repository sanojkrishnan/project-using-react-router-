import { saveUserInfo } from "../utils/Common";
import data from "./data.json";

const dummyApi= (user) => {   //because we don't have any backend so we are creating a dummy api
      
    if (data[user]) {
        return Promise.resolve(data[user].role);
    }
    return Promise.reject("User not found");
}


const login = (username , password) => {

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

}

export {
    login
};