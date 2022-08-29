import "./imageframe.scss";
import ShortTermFormCard from "./managementformcard";

const ImageFrame = ({ props }) => {
  return (
    <div className="management-image-frame">
      <img
        className="img-frame"
        // src={props.offplan && props.offplan.images[0]}
        alt="building"
      />

      {/* <ShortTermFormCard /> */}
    </div>
  );
};

export default ImageFrame;
