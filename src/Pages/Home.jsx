import React, { useState } from 'react'

function Home() {
  const [module , setModule] = useState(null); 
    const Comp = module?.default || React.Fragment; //if module.default is not defined then use React.Fragment //React.fragment is an inbuilt component that does not render anything
  return (
    <div>Home
      <div>
         <Comp />
        <button onClick={()=> {
          const pr = import("../Components/Section"); 
            pr.then((mod) => {
              setModule(mod);
            });
        }} >
          Load Section
        </button>
      </div>
    </div>

  )
}

export default Home