import React from 'react'
import "../cssfile/pagenotfound.css"
import {useLocation} from "react-router-dom"

const Pagenotfound = () => {
  let location = useLocation();
  return (
    <div className="pagenotfound">
      <h1>
        Sorry the page <span className='location'>{location.pathname}</span> you're trying to
        accessing is not found.
      </h1>
      <h1>You might need to check that path and try again!</h1>
    </div>
  );
}

export default Pagenotfound
