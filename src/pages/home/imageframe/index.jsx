import './imageFrame.scss';

const ImageFrame = props => {
  const adjustSizeWithScreen = () => {
    if (window.innerHeight < 640) {
      return 'ls-home-img-frame';
    }
    return 'gt-home-img-frame';
  };
  return (
    <div className={`home-image-frame ${adjustSizeWithScreen()}`}>
      <p className="home-properties-caption">Find Properties for Sale</p>
    </div>
  );
};

export default ImageFrame;
