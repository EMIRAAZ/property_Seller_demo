import "./imageFrame.scss";

const ImageFrame = (props) => {
  return (
    <div
      className={`home-image-frame ${
        props.advancedSearch ? "ad-s-on-frame" : ""
      }`}
    >
      <p className="home-properties-caption">Your Property Assistant.</p>
    </div>
  );
};

export default ImageFrame;
