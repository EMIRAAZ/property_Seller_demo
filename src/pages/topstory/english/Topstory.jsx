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
    heading:
      "Samsung Galaxy F22 launched in India: Price, features, other details",
    description:
      "Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.",
    image: "/assets/image/blog6.jpg",
  },
];
const storycard1 = [
  {
    heading:
      "Samsung Galaxy F22 launched in India: Price, features, other details",
    description:
      "Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.",
    image: "/assets/image/blog6.jpg",
  },
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
  },
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    image: "/assets/image/blog9.jpg",
  },
];

const StoryCard = ({ heading, description, image }) => {
  return (
    <>
      <div className='story-card-container'>
        <div className='story-desciption'>
          <div className='story-content'>
            <h1 className='story-heading'>{heading}</h1>
            <p className='story-description'>{description}</p>
          </div>
        </div>
        <img className='story-main-image' src={image} alt='blog' />
      </div>
    </>
  );
};

const StoryCard1 = ({ heading, description }) => {
  return (
    <>
      <div className='story1-card-container'>
        <div className='story1-desciption'>
          <div className='story1-content'>
            <h1 className='story1-heading'>{heading}</h1>
            <p className='story1-description'>{description}</p>
          </div>
        </div>
        {/* <img className='story1-main-image' src={image} alt='blog' /> */}
      </div>
    </>
  );
};

const Topstory = () => {
  const renderstory = () =>
    storycard.map((item, i) => <StoryCard key={i} {...item} />);
  const renderstory1 = () =>
    storycard1.map((item, i) => <StoryCard1 key={i} {...item} />);
  return (
    <div className='top-stories-main-container'>
      <div className='top-story-container'>
        <div className='head-categories'>
          <h2 className='heading'>Top stories for you</h2>

          {buttonlist.map((item) => {
            return <button className='category-button'>{item}</button>;
          })}
          <button className='prop-button'>...</button>
        </div>
        {renderstory()}
        <div className='break-story'>{renderstory1()}</div>
      </div>
    </div>
  );
};

export default Topstory;
