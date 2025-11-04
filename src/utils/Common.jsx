const testFn = () => {   //this is a test function to study dynamic imports
    console.log("Hello World");  //dynamic imports allow us to load modules only when they are needed// which can optimizes pre-loading time and improve user experience                                            
}  

const testObj = {
    key1 : "value1",
    key2 : "value2"
};


const saveUserInfo = (data) => {
    localStorage.setItem("cred" , JSON.stringify(data));
};   //this function saves the user info in the local storage of the browser// it is for login purpose check the login.jsx and UserLog.jsx file for more details  //"cred" is the key to store the data

const clearUserInfo = () => {
    localStorage.removeItem("cred");
}


export {
    testFn,
    saveUserInfo,
    clearUserInfo
};



export default testObj; 

//this function is running in the settings component

