const testFn = () => {   //this is a test function to study dynamic imports
    console.log("Hello World");  //dynamic imports allow us to load modules only when they are needed// which can optimizes pre-loading time and improve user experience                                            
}  

const testObj = {
    key1 : "value1",
    key2 : "value2"
};


const saveUserInfo = (data) => {
    localStorage.setItem("data" , JSON.stringify(data));
};   //this function saves the user info in the local storage of the browser// it is for login purpose check the login.jsx and UserLog.jsx file for more details  //"cred" is the key to store the data

const clearUserInfo = () => {
    localStorage.removeItem("data");
}


const isLoggedIn = () => {   //isLoggedIn function to check if the user is logged in or not
    try{    //used try catch to avoid errors if the local storage item is giving any issues // if there is an issue it will also return as not logged in or false
       const log = JSON.parse(localStorage.getItem('data'));
       return !!log ; //this will return true if log is not null or undefined else it will return false
    } catch{
       return false;
    }
}



export {
    testFn,
    saveUserInfo,
    clearUserInfo,
    isLoggedIn
};



export default testObj; 

//this function is running in the settings component

