import Footer from '../../../components/footer';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header';
import { useEffect } from 'react';
import MoveToTopComponent from '../../../components/movetotop';
import './topstory.scss';

const Topstory = props => {
  useEffect(() => {
    props.getTopStory();
    props.getTopStoryTopics();
  }, []);
  return (
    <div className="top-stories-main-container">
      <Header />
      <div className="container">
        <h2 className="heading">Top stories for you</h2>
        <div className="categories">
          {props.newsTopics.map(item => (
            <div key={item.id} className="item-div">
              <h1 className="item-name">{item.name}</h1>
            </div>
          ))}
        </div>

        <div className="news-div">
          {props.news.map((item, i) =>
            i === 0 ? (
              <div key={i}>
                <StoryCard item={item} />
              </div>
            ) : (
              <div key={i} className="story-card-small-main">
                <StoryCardSmall item={item} />
              </div>
            )
          )}
        </div>
      </div>
      <MoveToTopComponent />
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
        <h1 className="heading-news-item"> {item.mainTitle}</h1>
        <p className="description">{item.description}</p>
        <div className="location-div">
          <h1 className="location">{item.location}</h1>
          <h1 className="time">{item.time}</h1>
        </div>
      </div>
      <div className="image-div">
        <img
          src={item.images && item.images.length && item.images[0]}
          className="img-class"
          alt=""
        />
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
        <h1 className="heading-news-item"> {item.title}</h1>
        <p className="description">{item.description}</p>
        <div className="location-div">
          <h1 className="location">{item.location}</h1>
          <h1 className="time">{item.time}</h1>
        </div>
      </div>
      {item.images && (
        <div className="image-div">
          <img
            src={item.images.length && item.images[0]}
            className="img-class"
            alt=""
          />
        </div>
      )}
    </div>
  );
};
export default Topstory;
