import './imageframe.scss';
import ShortTermFormCard from './shorttermformcard';

const ImageFrame = () => {
  return (
    <div className="shortterm-image-frame">
      <img
        className="img-frame"
        src="/assets/image/shortterm.jpg"
        alt="building"
      />
      <p className="heading">
        Your Home <br />
        Away From Home
      </p>
      <ShortTermFormCard />
    </div>
  );
};

export default ImageFrame;
