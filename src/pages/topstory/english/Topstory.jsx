import Footer from '../../../components/footer';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header';
import { useEffect, useState } from 'react';
import { MoveToTop } from '../../../components/movetotop';
import './topstory.scss';
import FooterNew from '../../../components/footerNew';

const Topstory = props => {
  useEffect(() => {
    props.getTopStory();
    props.getTopStoryTopics();
  }, []);

  const [selected, setSelected] = useState('All');

  const onChipClick = topic => {
    setSelected(topic);
    if (topic === 'All') {
      props.getTopStory();
    } else {
      let newTopic = topic.replace(/ /g, '%20');
      props.getTopStory(`topic=${newTopic}`);
    }
  };
  return (
    <div className="top-stories-main-container">
      <Header />
      <div className="container">
        <h2 className="heading">Top News for you</h2>
        <div className="categories">
          <div
            key={'fiunf83f838'}
            className={`item-div ${selected === 'All' ? 'topic-selected' : ''}`}
            onClick={() => onChipClick('All')}
          >
            <h1 className="item-name">{'All'}</h1>
          </div>
          {props.newsTopics.map(item => (
            <div
              key={item.id}
              className={`item-div ${
                selected === item.name ? 'topic-selected' : ''
              }`}
              onClick={() => onChipClick(item.name)}
            >
              <h1 className="item-name">{item.name}</h1>
            </div>
          ))}
        </div>

        <div className="news-div">
          {props.news.map((item, i) =>
            i === 0 ? (
              <div key={i} style={{ width: '100%' }}>
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
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

const StoryCard = ({ item }) => {
  let navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/news/${item.id}`);
  };
  let date = new Date(item.updatedAt);

  return (
    <div className="storycard-div" onClick={navigateTo}>
      <div className="text-div">
        <h1 className="heading-news-item"> {item.title}</h1>
        <p className="date">{date.toDateString()}</p>
        <p className="description">{item.description}</p>
        <div className="location-div">
          <h1 className="location">{item.location}</h1>
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
  let date = new Date(item.updatedAt);

  return (
    <div className="storycard-small-div" onClick={navigateTo}>
      <div className="text-div">
        <h1 className="heading-news-item"> {item.title}</h1>
        <p className="date">{date.toDateString()}</p>
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
