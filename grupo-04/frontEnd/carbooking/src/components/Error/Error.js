import React from 'react'
import "../Error/Error.css";
import { FaSearch} from 'react-icons/fa';
const Error = () => {
  return (
    <div className='fondo'>
        <div class="loader"> 
        <FaSearch style={{ color:"#FCA311", fontSize: "100px" }}/> 
        </div>
       <img src='/notFound.jpg' alt='error' style={{ height: "500px", width:"1200px"}}/>
    </div>
  )
}

export default Error