import './imageFrame.scss';

const ImageFrame = props => {
  return (
    <div
      className={`home-image-frame ${
        props.advancedSearch ? 'ad-s-on-frame' : ''
      }`}
    >
      <p className="home-properties-caption">Find Properties for Sale</p>
    </div>
  );
};

export default ImageFrame;
