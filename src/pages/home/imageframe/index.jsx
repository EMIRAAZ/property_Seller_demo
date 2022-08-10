import "./imageFrame.scss";

const ImageFrame = (props) => {
  return (
    <div
      className={`home-image-frame ${
        props.advancedSearch ? "ad-s-on-frame" : ""
      }`}
    >
      <p className="home-properties-caption">Find Properties in UAE</p>
    </div>
  );
};

export default ImageFrame;
