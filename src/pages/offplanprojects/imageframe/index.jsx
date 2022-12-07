import "./imageframe.scss";
import ShortTermFormCard from "./managementformcard";

const ImageFrame = () => {
  return (
    <div className="management-image-frame">
      <img
        className="img-frame"
        src="/assets/image/offplan.png"
        alt="building"
      />
      {/* <p className="heading">
        Property <br />
        Management
      </p> */}
      <ShortTermFormCard />
    </div>
  );
};

export default ImageFrame;
