import './imageFrame.scss';

const ImageFrame = () => {
  return (
    <div className="neighbourhood-image-frame">
      <p className="neighbourhood-properties-caption">
        Lets Find Your <span>Properties in UAE</span>
      </p>
      <img
        className="img-main-neighbourhood"
        src="/assets/image/neighbourhood-main.jpg"
        alt="building"
      />
    </div>
  );
};

export default ImageFrame;
