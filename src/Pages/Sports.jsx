import React from 'react'

function Sports({data}) {
  if (!data) return <div>Loading...</div>;
  let highJump;
  let longJump;

  if(data.sports.highJump === 1){
    highJump = "first" ;
  }
  else if(data.sports.highJump === 0){
    highJump = "participated";
  }
  else{
    highJump = "not participated";
  }
  if(data.sports.longJump === 1){
    longJump = "first";
  }
  else if(data.sports.longJump === 0){
    longJump = "participated";
  }
  else{
    longJump = "not participated";
  }

  return (
    <div>
      <h3>Sports Report</h3>
        <ul>
          <li>High Jump : {highJump}</li>
          <li>Long Jump : {longJump}</li>
        </ul>
    </div>
  )
}

export default Sports