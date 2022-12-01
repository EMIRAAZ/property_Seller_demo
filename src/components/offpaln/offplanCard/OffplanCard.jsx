import './offplan.scss';
import ImgPropCarousel from '../../imgpropcarousel';
import { useNavigate } from 'react-router-dom';
import RightArrow from '../../svg/rightarrow';
import Favourite from '../../svg/favourite';

const OffplanCard = props => {
  let navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/${props.to}/${props.id}`);
  };

  return (
    <div className="offplan-card-container">
      <ImgPropCarousel
        className="offplan-card-image"
        imgArray={props.images}
        curImgClass="prop-list-img"
      />
      <div className="offplan-main-div cursor-pointer" onClick={navigateTo}>
        <div className="offplan-description">
          <p className="offplan-head">{props.title}</p>
          <div className="of-ad">
            <p className="of-ad-info1">{props.address.building}</p>
            <img className="of-ad-info2" src="EMAAR_WORD_MARK_EN.png"></img>
          </div>
          <p className="of-ty">{props.address.city}</p>
          <div className="off-info">
            <p className="off-info-box1">Bedrooms {props.noOfBedroom}</p>
            <p className="off-info-box">{props.noOfBathroom} Baths</p>
            <p className="off-info-box2">Sq Ft {props.propertySize}</p>
          </div>
          <p className="of-des">{props.interiorDetails}</p>
        </div>
        <div className="off-card-footer">
          <div className="shortlist">
            <p className="shortlist-info">shortlist</p>{' '}
            <Favourite fill="#1FA0E9" width="100%" height="15px" />
          </div>
          <h2 className="amount">${props.price[0]}</h2>
          <div className="blue-arrow">
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

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
