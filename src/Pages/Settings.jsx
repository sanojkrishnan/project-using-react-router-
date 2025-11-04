import React from "react";

function Settings() {
  return (
    <div>
      Settings
      <div>
        <button
          onClick={() => {
            const pr = import("../utils/Common"); //this is dynamic import //dynamic imports returns a promise
            pr.then((module) => {
              console.log(module.default); //module is an object that contains the exports from the common.jsx file
              module.testFn(); //we can access the named export using module.testFn (testFn is the named export from Common.jsx)
            });
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}

export default Settings;
