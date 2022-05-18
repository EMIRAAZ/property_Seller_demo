import "./ourteam.scss"
import React from 'react'
// import img1 from "/assets/image/img1.jpg";
// import founder from "../../../../public/assets/image/founder.jpg";
import img1 from "./img1.jpg"

const Ourteam = () => {
  return (
   <> 
    <img className='founder-image' src={img1} alt ="founder"  />
   </>
  )
}

export default Ourteam