import './imgpropcarousel.scss';
import { useState } from 'react';
import LeftCarousel from '../svg/leftcarousel';
import RightCarousel from '../svg/rightcarousel';

const ImgPropCarousel = ({ imgArray = ['/assets/image/noimage.jpg'] }) => {
  const [index, setIndex] = useState(0);

  const onsetIndex = add => {
    if (index === 0 && add === -1) {
      setIndex(imgArray.length - 1);
    } else if (index === imgArray.length - 1 && add === 1) {
      setIndex(0);
    } else setIndex(index + add);
  };
  return (
    <div className="image-carousel">
      <div className="carousel-panel">
        <LeftCarousel
          customClass="left-carousel-arrow"
          onClick={() => onsetIndex(-1)}
        />
        <RightCarousel
          customClass="right-carousel-arrow"
          onClick={() => onsetIndex(1)}
        />
      </div>
      <img className="carousel-img-tag" src={imgArray[index]} alt="img" />
    </div>
  );
};

export default ImgPropCarousel;
