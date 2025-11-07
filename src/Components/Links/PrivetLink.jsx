import React from 'react'
import { NavLink, useResolvedPath } from 'react-router-dom'
import { isPathAllowed } from '../../utils/Common'

function PrivetLink(props) {  //passing the props because all the other navLinks needs to work from this one

    const to = props.to ;// to is the prop of NavLink. Accessing it to get the information of the navigation bar's position
    const path = useResolvedPath(to) ;//useResolvedPath is a react-router-dom path which help us to find the complete path using the navigation position
    const isAllowed = isPathAllowed(path.pathname);

  return (isAllowed && <NavLink {...props}/> );  /** only show the NavLink if it is allowed */

}

export default PrivetLink