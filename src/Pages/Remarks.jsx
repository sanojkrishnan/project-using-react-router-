import React from 'react'

function Remarks({data}) {
  if (!data) return <div>Loading...</div>;

  return (
    <div>Remarks : {data.remarks}</div>
  )
}

export default Remarks