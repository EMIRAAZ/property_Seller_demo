import './offplan.scss';
import ImgPropCarousel from '../../imgpropcarousel';
import { useNavigate } from 'react-router-dom';

function OffplanCard(props) {
  let navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/off-plan/${props.id}`);
  };

  const renderDescription = description => {
    return description.length < 120
      ? description
      : description.substring(0, 140) + '...';
  };

  const renderAddress = address => {
    let add = `${address.placeAddress}, ${
      address.building ? address.building : ''
    } ${address.city}`;

    return add.length < 50 ? add : add.substring(0, 50) + ' . . .';
  };
  return (
    <div className="image-container" onClick={navigateTo}>
      <ImgPropCarousel
        customClass="prop-list-img"
        imgArray={props.images}
        curImgClass="prop-list-img"
      />
      <div className="details-div">
        <h1 className="heading">{props.title}</h1>
        <div className="logo-div">
          <h1 className="description">{props.description}</h1>
        </div>
      </div>
    </div>
  );
}
export default OffplanCard;
