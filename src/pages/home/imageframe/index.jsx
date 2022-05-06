import './imageFrame.scss';

const ImageFrame = () => {
  return (
    <div className="home-image-frame">
      <div className="main-div">
        <div className="text">
          <p className="first"> Properties</p>
          <p className="second">Lets Find Your Properties in UAE</p>
          <p className="third">
            Rent, Buy and sell amazing private properties across Dubai.
          </p>
        </div>
      </div>
      <div className="img-div">
        <img src="/assets/image/build1.jpg" alt="building" />
      </div>
      <div className="img-div">
        <img src="/assets/image/build2.jpg" alt="building" />
      </div>
      <div className="img-div">
        <img src="/assets/image/build5.jpg" alt="building" />
      </div>
    </div>
  );
};

export default ImageFrame;
