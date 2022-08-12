import './offplan.scss';
import ImgPropCarousel from '../../imgpropcarousel';

function OffplanCard(props) {
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
  console.log(props);
  return (
    <div className="image-container">
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
