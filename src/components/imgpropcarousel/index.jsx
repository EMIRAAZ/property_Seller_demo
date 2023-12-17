import './imgpropcarousel.scss';
import { useState } from 'react';
import LeftCarousel from '../svg/leftcarousel';
import RightCarousel from '../svg/rightcarousel';

const ImgPropCarousel = ({
  imgArray = ['/assets/image/noimage.jpg'],
  customClass = '',
  curImgClass = '',
  imageOnclickRedirectLink
}) => {
  const [index, setIndex] = useState(0);

  const onsetIndex = add => {
    if (index === 0 && add === -1) {
      setIndex(imgArray.length - 1);
    } else if (index === imgArray.length - 1 && add === 1) {
      setIndex(0);
    } else setIndex(index + add);
  };
  return (
    <div
    onClick={imageOnclickRedirectLink}
      className={`image-carousel ${customClass}`}
      onContextMenu={e => e.preventDefault()}
    >
      <div className="carousel-panel">
        <LeftCarousel
          customClass="left-carousel-arrow"
          onClick={(e) =>{ 
            e.stopPropagation()
            onsetIndex(-1)
          }
         }
        />
        <RightCarousel
          customClass="right-carousel-arrow"
          onClick={(e) =>{ 
            e.stopPropagation()
            onsetIndex(1)
          }
        }
        />
      </div>
      <img
  
  
        className={`carousel-img-tag ${curImgClass}`}
        src={imgArray[index]}
        alt="img"
      />
    </div>
  );
};

export default ImgPropCarousel;
