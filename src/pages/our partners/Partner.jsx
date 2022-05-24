import "./partner.scss"
import React from 'react'


const image = ["/assets/image/img1.jpg","/assets/image/img2.jpg","/assets/image/img3.jpg","/assets/image/img4.jpg","/assets/image/img5.jpg","/assets/image/img6.jpg"];


const TeamCard = ({url,name,position}) => {
  return (
    <>
    <div className="card-container">

   <div>
     <h2 className="header">Our Team</h2>
   <img className='team-image' src={url} alt ="team"  />
   </div>
   <div className="card-title">
     <p>{name}</p>
   </div>
   <div className="card-description">
    <p>
      {position}
      </p>
      

   </div>
    </div>
    </>
  )
}


const Ourpartner = () => {
  return (
   <>
   <div className="main-container">
     
   <img className='partner-main-image' src="/assets/image/partner-main.jpg" alt ="partner"  />
   <div className="container">

    <div className="partner-card-container">
      
    <TeamCard
    url="/assets/image/img1.jpg"
    name='Name'
    position="Position"    
    />
     <TeamCard
    url="/assets/image/img2.jpg"
    name='Name'
    position="Position"      
    />
     <TeamCard
    url="/assets/image/img3.jpg"
    name='Name'
    position="Position"      
    />
    </div>
    <div className="partner-card-container">
     <TeamCard
    url="/assets/image/img4.jpg"
    name='Name'
    position="Position"      
    />
     <TeamCard
    url="/assets/image/img5.jpg"
    name='Name'
    position="Position"      
    />
     <TeamCard
    url="/assets/image/img6.jpg"
    name='Name'
    position="Position"      
    />

    </div>

   </div>
    
     </div> 
   </>
  )
}

export default Ourteam