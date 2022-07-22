import './Offplanview.scss';

import Footer from '../../../components/footer';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import OffplanCard from '../../../components/offpaln/offplanCard/OffplanCard';
import ImgPropCarousel from '../../../components/imgpropcarouselview';
import LarrowIcon from '../../../components/svg/larrow';
import RarrowIcon from '../../../components/svg/rarrow';
import { useState } from 'react';
import Bed from '../../../components/svg/bed';
import { MoveToTop } from '../../../components/movetotop';

const OffplanView = () => {
  return (
    <>
      <div className="offplan-main-container">
        <Header />
        <ImageFrame />
        <div className="offplans-projects">
          <p className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            voluptatibus doloribus adipisci maxime voluptas amet. Incidunt
            obcaecati officia accusamus atque! Iste amet placeat iure atque
            libero veritatis at nulla recusandae.
          </p>
          <h1 className="Heading">Amenities</h1>
        </div>
        <div className="amenities">
          <Amenities />
        </div>
        <div className="offplans-projects">
          <h1 className="Heading">Image Gallery</h1>
          <div className="image-slider-container">
            <ImageSlider />
          </div>
          <h1 className="Heading">Availability</h1>
          <div className="availability">
            <Availability />
            <Availability />
          </div>
          <h1 className="Heading">similar projects</h1>
        </div>
        <MoveToTop />
        <Footer />
      </div>
    </>
  );
};

////////////////////////////////

const Amenities = () => {
  return (
    <div className="amenities-div">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M59.5962 35.988C59.5962 32.8645 58.3554 29.8689 56.1467 27.6602C53.9381 25.4516 50.9425 24.2108 47.819 24.2108H12.4872C11.7063 24.2108 10.9574 24.521 10.4053 25.0731C9.8531 25.6253 9.5429 26.3742 9.5429 27.1551V43.5254C9.53422 47.2202 10.815 50.8022 13.1644 53.6539H3.65427C2.87339 53.6539 2.1245 53.9641 1.57233 54.5162C1.02016 55.0684 0.709961 55.8173 0.709961 56.5982C0.709961 57.3791 1.02016 58.128 1.57233 58.6801C2.1245 59.2323 2.87339 59.5425 3.65427 59.5425H56.6519C57.4328 59.5425 58.1817 59.2323 58.7338 58.6801C59.286 58.128 59.5962 57.3791 59.5962 56.5982C59.5962 55.8173 59.286 55.0684 58.7338 54.5162C58.1817 53.9641 57.4328 53.6539 56.6519 53.6539H47.1418C48.6071 51.8516 49.662 49.7517 50.2333 47.5003C52.8777 46.9464 55.2512 45.5002 56.9559 43.4042C58.6606 41.3082 59.5928 38.6897 59.5962 35.988ZM53.7076 35.988C53.7065 37.0206 53.4339 38.0349 52.9172 38.9289C52.4004 39.8229 51.6576 40.5653 50.7633 41.0817V30.8943C51.6576 31.4107 52.4004 32.1531 52.9172 33.0471C53.4339 33.9411 53.7065 34.9554 53.7076 35.988ZM25.56 53.6539C22.8737 53.6539 20.2975 52.5868 18.3981 50.6873C16.4986 48.7879 15.4315 46.2117 15.4315 43.5254V30.0994H44.8747V43.5254C44.8747 46.2117 43.8076 48.7879 41.9081 50.6873C40.0087 52.5868 37.4324 53.6539 34.7462 53.6539H25.56ZM18.3758 15.3778C19.1567 15.3778 19.9056 15.0676 20.4578 14.5154C21.0099 13.9633 21.3202 13.2144 21.3202 12.4335C21.3202 10.8717 21.9406 9.37395 23.0449 8.26961C24.1492 7.16528 25.647 6.54488 27.2088 6.54488H44.8747C45.6555 6.54488 46.4044 6.23467 46.9566 5.68251C47.5088 5.13034 47.819 4.38144 47.819 3.60056C47.819 2.81968 47.5088 2.07078 46.9566 1.51862C46.4044 0.966453 45.6555 0.65625 44.8747 0.65625H27.2088C24.0853 0.65625 21.0897 1.89706 18.881 4.10573C16.6723 6.31439 15.4315 9.30998 15.4315 12.4335C15.4315 13.2144 15.7417 13.9633 16.2939 14.5154C16.8461 15.0676 17.595 15.3778 18.3758 15.3778ZM30.1531 12.4335C29.3722 12.4335 28.6233 12.7437 28.0711 13.2959C27.519 13.848 27.2088 14.5969 27.2088 15.3778C27.2088 16.1587 27.519 16.9076 28.0711 17.4598C28.6233 18.0119 29.3722 18.3221 30.1531 18.3221H47.819C50.9425 18.3221 53.9381 17.0813 56.1467 14.8727C58.3554 12.664 59.5962 9.6684 59.5962 6.54488C59.5962 5.764 59.286 5.0151 58.7338 4.46293C58.1817 3.91077 57.4328 3.60056 56.6519 3.60056C55.871 3.60056 55.1221 3.91077 54.57 4.46293C54.0178 5.0151 53.7076 5.764 53.7076 6.54488C53.7076 8.10664 53.0872 9.60443 51.9829 10.7088C50.8785 11.8131 49.3807 12.4335 47.819 12.4335H30.1531Z"
          fill="black"
        />
      </svg>
      <h1 className="sub-heading">Cafes</h1>
    </div>
  );
};
////////////////////

const Availability = () => {
  return (
    <div className="availability-div">
      <Bed width="40" height="40" />
      <h1 className="title">4 Bed</h1>
      <h1 className="sub-title">View Floor Plan</h1>
    </div>
  );
};

//////////////////////////////////

const ImageSlider = ({ imgArray = ['/assets/image/noimage.jpg'] }) => {
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
      className="image-container"
      style={{
        backgroundImage: `url(${imgArray[index]})`,
      }}
    >
      <div className="div-1">
        <LarrowIcon className="rArrow" onClick={() => onsetIndex(-1)} />
      </div>
      <div className="div-2">
        <RarrowIcon className="rArrow" onClick={() => onsetIndex(1)} />
      </div>
    </div>
  );
};

export default OffplanView;
