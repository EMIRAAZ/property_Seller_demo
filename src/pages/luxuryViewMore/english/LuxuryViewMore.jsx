import "./luxuryViewMore.scss";
import SocialPanel from "../../../components/socialpanel";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import RightArrow from "../../../components/svg/rightarrow";

const luxuaryvillas = [
  {
    heading: "Villa 1",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/lux1.jpg",
    place: "Dountown",
    timw: "1 month ago",
  },
  {
    heading: "villa 2",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/lux2.jpg",
    place: "Dubai",
    timw: "1 month ago",
  },
  {
    heading: "villa 3",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/lux3.jpg",
    place: "Dubai",
    timw: "1 month ago",
  },
];

const luxuaryappartments = [
  {
    heading: "resort 1",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/resort1.jpg",
    place: "Dountown",
    timw: "1 month ago",
  },
  {
    heading: "resort 2",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/resort2.jpg",
    place: "Dubai",
    timw: "1 month ago",
  },
  {
    heading: "resort 3",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/resort3.jpg",
    place: "Dubai",
    timw: "1 month ago",
  },
];

const luxuarytownhouse = [
  {
    heading: "appartment 1",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/appart1.jpg",
    place: "Dountown",
    timw: "1 month ago",
  },
  {
    heading: "appartment 2",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/appart2.jpg",
    place: "Dubai",
    timw: "1 month ago",
  },
  {
    heading: "appartment 3",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/appart3.jpg",
    place: "Dubai",
    timw: "1 month ago",
  },
];
const luxuarypenthouse = [
  {
    heading: "apartment 1",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/appart1.jpg",
    place: "Dountown",
    timw: "1 month ago",
  },
  {
    heading: "apartment 2",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/appart2.jpg",
    place: "Dubai",
    timw: "1 month ago",
  },
  {
    heading: "apartment 3",
    description:
      "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
    image: "/assets/image/appart3.jpg",
    place: "Dubai",
    timw: "1 month ago",
  },
];

const LuxuaryCard = ({ image, heading, description, place, timw }) => {
  return (
    <>
      <div className="luxv1-card-container">
        <div className="lux1-desciption">
          <div className="lux1-content">
            <img className="lux1-image" src={image} alt="blog" />
            <div className="dateandtime">
              <p className="place">{place}</p>
              <p className="time">{timw}</p>
            </div>
            <h1 className="lux1-heading">{heading}</h1>
            <p className="lux2-description">{description}</p>
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

const LuxuryViewMore = () => {
  const renderstory1 = () =>
    luxuaryvillas.map((item, i) => <LuxuaryCard key={i} {...item} />);
  const renderstory2 = () =>
    luxuaryappartments.map((item, i) => <LuxuaryCard key={i} {...item} />);
  const renderstory3 = () =>
    luxuarytownhouse.map((item, i) => <LuxuaryCard key={i} {...item} />);
  const renderstory4 = () =>
    luxuarypenthouse.map((item, i) => <LuxuaryCard key={i} {...item} />);
  return (
    <div className="luxuaryv-container">
      <Header />

      <div className="lux-main">
        <div className="viewall">
          <div className="luxuary-text-width">
            <h2 className="l-heading">Luxry Property</h2>
            <p className="l-description">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
          </div>
          <div className="card-row">{renderstory1()}</div>
        </div>
      </div>

      {/* <SocialPanel /> */}
      <Footer />
    </div>
  );
};

export default LuxuryViewMore;
