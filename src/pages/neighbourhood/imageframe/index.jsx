import './imageFrame.scss';
import RightArrow from '../../../components/svg/rightarrow';

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
      {/* <div className="background-square"></div>
      <div className="main-div">
        <div className="text">
          <p className="first"> Properties</p>
          <p className="second">Lets Find Your Properties in UAE</p>
          <p className="third">
            Rent, Buy and sell amazing private properties across Dubai.
          </p>
          <div className="neighbourhood-black-btn">
            <RightArrow
              customClass="right-arrow-rotate"
              width="25"
              height="20"
              viewBox="4 -6 16 14"
            />
          </div>
        </div>
      </div>
      <div className="img-div">
        <img src="/assets/image/build1.jpg" alt="building" />
      </div>
      <div className="img-div no-mobile">
        <img
          className="desktop-only"
          src="/assets/image/build2.jpg"
          alt="building"
        />
      </div>
      <div className="img-div no-mobile">
        <img
          className="desktop-only"
          src="/assets/image/build5.jpg"
          alt="building"
        />
      </div> */}
    </div>
  );
};

export default ImageFrame;
