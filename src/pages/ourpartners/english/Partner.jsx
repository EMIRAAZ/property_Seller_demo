import "./partner.scss"
import SocialPanel from "../../../components/socialpanel";
import Footer from "../../../components/footer";
// import Footer from '../../../components/footer'

const image = ["/assets/image/img1.jpg","/assets/image/img2.jpg","/assets/image/img3.jpg","/assets/image/img4.jpg","/assets/image/img5.jpg","/assets/image/img6.jpg"];
// const iname= ["vishnu","hari","bahul"]
// const iposition = ["ceo","hr","cto",]

const TeamCard = ({url,name,position}) => {
  return (
    <>
    <div className="card-container">
    {/* {image.map(item=>{
     return <div className="team-card">
     <img className='team-image' src={item} alt ="team"  />
      </div>
   })} */}
   <div className="card-image-container">
     <h2 className="header">Our Partners</h2>
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
   <div className="ourpartner-main-container">
     
   <img className='partner-main-image' src="/assets/image/partner-main.jpg" alt ="about us"  />
   <div className="partner-container">

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
   <SocialPanel/>
   <Footer/>
    
     </div> 
   </>
  )
}

export default Ourpartner