import './luxuary.scss';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import { useEffect } from 'react';

const luxuaryvillas = [
  {
    heading: 'Villa 1',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/lux1.jpg',
    place: 'Dountown',
    timw: '1 month ago',
  },
  {
    heading: 'villa 2',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/lux2.jpg',
    place: 'Dubai',
    timw: '1 month ago',
  },
  {
    heading: 'villa 3',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/lux3.jpg',
    place: 'Dubai',
    timw: '1 month ago',
  },
];

const luxuaryappartments = [
  {
    heading: 'resort 1',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/resort1.jpg',
    place: 'Dountown',
    timw: '1 month ago',
  },
  {
    heading: 'resort 2',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/resort2.jpg',
    place: 'Dubai',
    timw: '1 month ago',
  },
  {
    heading: 'resort 3',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/resort3.jpg',
    place: 'Dubai',
    timw: '1 month ago',
  },
];

const luxuarytownhouse = [
  {
    heading: 'appartment 1',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/appart1.jpg',
    place: 'Dountown',
    timw: '1 month ago',
  },
  {
    heading: 'appartment 2',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/appart2.jpg',
    place: 'Dubai',
    timw: '1 month ago',
  },
  {
    heading: 'appartment 3',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/appart3.jpg',
    place: 'Dubai',
    timw: '1 month ago',
  },
];
const luxuarypenthouse = [
  {
    heading: 'apartment 1',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/appart1.jpg',
    place: 'Dountown',
    timw: '1 month ago',
  },
  {
    heading: 'apartment 2',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/appart2.jpg',
    place: 'Dubai',
    timw: '1 month ago',
  },
  {
    heading: 'apartment 3',
    description:
      'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
    image: '/assets/image/appart3.jpg',
    place: 'Dubai',
    timw: '1 month ago',
  },
];

const Luxuary = props => {
  useEffect(() => {
    props.getLuxuryVillaWeb();
  }, []);
  console.log(props);
  const renderstory1 = () =>
    props.villa.data.map((item, i) => <LuxuaryCard key={i} {...item} />);
  const renderstory2 = () =>
    luxuaryappartments.map((item, i) => <LuxuaryCard key={i} {...item} />);
  const renderstory3 = () =>
    luxuarytownhouse.map((item, i) => <LuxuaryCard key={i} {...item} />);
  const renderstory4 = () =>
    luxuarypenthouse.map((item, i) => <LuxuaryCard key={i} {...item} />);
  return (
    <div className="luxuary-container">
      <Header />
      <div className="l-image-container">
        <h2 className="luxuary-header">Luxury properties</h2>
        <img
          className="luxuary-image"
          src="/assets/image/luxuary.jpg"
          alt="luxuary properties"
        />
      </div>
      <div className="luxuary-properties">
        <h2 className="luxuary-property-header"></h2>
        <div className="luxuary-text-width">
          <p className="l-properties-3">
            Being a landlord is great! Until you need to find a new tenant or
            deal with a faulty AC on your own. We’ll take care of it. From
            marketing your home and collecting rent to carrying out maintenance
            – and everything in between – our comprehensive property management
            service gives you total peace of mind. What’s more, our goal is to
            ensure maximum return on your investment. In addition to providing
            you with a hassle-free experience, we make it our business to
            maintain a high occupancy rate. .
          </p>
        </div>
      </div>

      <div className="lux-main">
        <div className="viewall">
          <div className="luxuary-text-width">
            <h2 className="l-heading">Luxry Villas</h2>
            <p className="l-description">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
          </div>
          <div className="card-row">{renderstory1()}</div>
        </div>
      </div>
      <div className="lux-main">
        <div className="viewall">
          <div className="luxuary-text-width">
            <h2 className="l-heading">Luxury Appartments</h2>
            <p className="l-description">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
          </div>
          {/* <div className="card-row">{renderstory2()}</div> */}
        </div>
      </div>

      <div className="lux-main">
        <div className="viewall">
          <div className="luxuary-text-width">
            <h2 className="l-heading">Luxry Townhouse</h2>
            <p className="l-description">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
          </div>
          {/* <div className="card-row">{renderstory3()}</div> */}
        </div>
      </div>

      <div className="lux-main">
        <div className="viewall">
          <div className="luxuary-text-width">
            <h2 className="l-heading">Luxry Penthouse</h2>
            <p className="l-description">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
          </div>
          {/* <div className="card-row">{renderstory4()}</div> */}
        </div>
      </div>

      {/* <SocialPanel /> */}
      <Footer />
    </div>
  );
};

const LuxuaryCard = villa => {
  return (
    <>
      <div className="lux1-card-container">
        <div className="lux1-desciption">
          <div className="lux1-content">
            <img className="lux1-image" src={villa.images[0]} alt="blog" />
            <div className="dateandtime">
              <p className="place">{villa.address.city}</p>
              <p className="time">{villa.updatedAt}</p>
            </div>
            <h1 className="lux1-heading">{villa.title}</h1>
            <p className="lux2-description">{villa.description}</p>
            <p className="more">
              view more
              <svg
                width="19"
                height="12"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{}}
              >
                <g clip-path="url(#clip0_0_2066)">
                  <path
                    d="M4.23926 9.33301H14.6096"
                    stroke="#313131"
                    stroke-width="1.11111"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.6484 12.296L14.6114 9.33301"
                    stroke="#313131"
                    stroke-width="1.11111"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.6484 6.37012L14.6114 9.33308"
                    stroke="#313131"
                    stroke-width="1.11111"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_2066">
                    <rect
                      width="17.7778"
                      height="17.7778"
                      fill="white"
                      transform="translate(0.537109 0.444336)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Luxuary;
