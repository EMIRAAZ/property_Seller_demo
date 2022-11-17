import './offplan.scss';
import ImgPropCarousel from '../../imgpropcarousel';
import { useNavigate } from 'react-router-dom';
import RightArrow from '../../svg/rightarrow';
import Favourite from '../../svg/favourite';






const OffplanCard =({image,heading,description,position,address})=>{

  return(
    <div className='offplan-card-container'>
      
     
      <ImgPropCarousel
      className='offplan-card-image'
        // customClass="prop-list-img"
        imgArray={image}
        curImgClass="prop-list-img"
      />
      <div className='offplan-main-div'>
        <div className='offplan-description'>
          <p className='offplan-head'>{heading}</p>
          <div className='of-ad'>
          <p className='of-ad-info1'>{address}</p>
            <img className='of-ad-info2' src='EMAAR_WORD_MARK_EN.png'></img>
          </div>
          <p className='of-ty'>{position}</p>
          <div className='off-info'>
            <p className='off-info-box1'>hai</p>
            <p className='off-info-box'>hai</p>
            <p className='off-info-box2'>hai</p>
          </div>
          <p className='of-des'>{description}</p>
          
        

        </div>
        <div className='off-card-footer'>
          <div className='shortlist'><p className='shortlist-info'>shortlist</p> <Favourite fill="#1FA0E9" width='100%'
          height='15px'/></div>
          <h2 className='amount'>ASRSUGIS</h2>
          <div className='blue-arrow'><RightArrow/></div>
         </div>

      </div>
    </div>
  )
}

// function OffplanCard(props) {
//   let navigate = useNavigate();

//   const navigateTo = () => {
//     navigate(`/off-plan/${props.id}`);
//   };

//   const renderDescription = description => {
//     return description.length < 120
//       ? description
//       : description.substring(0, 140) + '...';
//   };

//   const renderAddress = address => {
//     let add = `${address.placeAddress}, ${
//       address.building ? address.building : ''
//     } ${address.city}`;

//     return add.length < 50 ? add : add.substring(0, 50) + ' . . .';
//   };
//   return (
//     <div className="image-container" onClick={navigateTo}>
//       <ImgPropCarousel
//         customClass="prop-list-img"
//         imgArray={props.images}
//         curImgClass="prop-list-img"
//       />
//       <div className="details-div">
//         <h1 className="heading">{props.title}</h1>
//         <div className="logo-div">
//           <h1 className="description">{props.description}</h1>
//         </div>
//       </div>
//     </div>
//   );
// }
export default OffplanCard;
