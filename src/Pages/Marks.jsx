import React from 'react'

function Marks({data}) {
  if (!data) return <div>Loading...</div>;
  
  return (
    <div>
      <h3>Marks for {data.name}</h3>
      <div>
        <h4>Math</h4>
        <ul>
          {data.marks.math.map((mark, index) => (
            <li key={index}>Test {index + 1}: {mark}</li>
          ))}
        </ul>

        <h4>Science</h4>
        <ul>
          {data.marks.science.map((mark, index) => (
            <li key={index}>Test {index + 1}: {mark}</li>
          ))}
        </ul>

        <h4>English</h4>
        <ul>
          {data.marks.english.map((mark, index) => (
            <li key={index}>Test {index + 1}: {mark}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Marks