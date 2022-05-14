import './imageframe.scss';
import SellFormCard from './sellformcard';

const ImageFrame = () => {
  return (
    <div className="rent-image-frame">
      <img className="img-frame" src="/assets/image/sell.jpg" alt="building" />
      <p className="heading">List Your Properties With Us.</p>
      <SellFormCard />
    </div>
  );
};

export default ImageFrame;
