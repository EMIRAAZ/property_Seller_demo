import './imageframe.scss';
import ShortTermFormCard from './mortgageformcard';

const ImageFrame = () => {
  return (
    <div className="mortgage-image-frame">
      <img
        className="img-frame"
        src="/assets/image/mortgage.jpg"
        alt="building"
      />
      <p className="heading">
        Mortgage <br />
        Services
      </p>
      <ShortTermFormCard />
    </div>
  );
};

export default ImageFrame;
