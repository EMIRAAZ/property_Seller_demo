import Footer from "../../../components/footer";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header";
import "./topstory.scss";
const buttonlist = [
  "All",
  "Sports",
  "Dubai",
  "Politics",
  "Techno",
  "NanoTechnology",
  "MentalHealth",
];
const storycard = [
  {
    id: 2,
    heading:
      "Samsung Galaxy F22 hshslaunched in India: Price, features, other details",
    description:
      "Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.",
    image: "/assets/image/blog6.jpg",
    location: "UAE",
    time: "15 mins ago",
  },
];
const storycard1 = [
  {
    id: 2,

    heading:
      "Samsung Galaxy F22 launched in India: Price, features, other details",
    description:
      "Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.",
    image: "/assets/image/blog6.jpg",
    location: "UAE",
    time: "15 mins ago",
  },
  {
    id: 3,

    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    location: "UAE",
    time: "15 mins ago",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
  },
  {
    id: 4,

    location: "UAE",
    time: "15 mins ago",
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    image: "/assets/image/blog9.jpg",
  },
];

const Topstory = () => {
  return (
    <div className="top-stories-main-container">
      <Header />
      <div className="container">
        <h2 className="heading">Top stories for you</h2>
        <div className="categories">
          {buttonlist.map((item, i) => (
            <div key={i} className="item-div">
              <h1 className="item-name">{item}</h1>
            </div>
          ))}
        </div>
        <div className="news-div">
          {storycard.map((item, i) => (
            <div key={i}>
              <StoryCard item={item} />
            </div>
          ))}
          {storycard1.map((item, i) => (
            <div key={i} className="story-card-small-main">
              <StoryCardSmall item={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const StoryCard = ({ item }) => {
  let navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/news/${item.id}`);
  };
  return (
    <div className="storycard-div" onClick={navigateTo}>
      <div className="text-div">
        <h1 className="heading-news-item"> {item.heading}</h1>
        <p className="description">{item.description}</p>
        <div className="location-div">
          <h1 className="location">{item.location}</h1>
          <h1 className="time">{item.time}</h1>
        </div>
      </div>
      <div className="image-div">
        <img src={item.image} className="img-class" alt="" />
      </div>
    </div>
  );
};

/////////////////////////////////////

const StoryCardSmall = ({ item }) => {
  let navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/news/${item.id}`);
  };
  return (
    <div className="storycard-small-div" onClick={navigateTo}>
      <div className="text-div">
        <h1 className="heading-news-item"> {item.heading}</h1>
        <p className="description">{item.description}</p>
        <div className="location-div">
          <h1 className="location">{item.location}</h1>
          <h1 className="time">{item.time}</h1>
        </div>
      </div>
      {item.image && (
        <div className="image-div">
          <img src={item.image} className="img-class" alt="" />
        </div>
      )}
    </div>
  );
};
export default Topstory;
