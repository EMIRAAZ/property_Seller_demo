import Footer from '../../../components/footer';
import Header from '../../../components/header';
import { MoveToTop } from '../../../components/movetotop';
import FooterNew from '../../../components/footerNew';

import './news.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const News = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  useEffect(() => {
    props.getSingleNews(getID());
  }, []);
  let date = new Date(props.news[0] && props.news[0].updatedAt);

  return (
    <div className="news-main-container">
      <Header />

      <div className="container">
        <h1 className="heading">{props.news[0] && props.news[0].title}</h1>
        <p className="date">
          {date.toDateString() !== 'Invalid Date' ? date.toDateString() : ''}
        </p>
        <div className="category">
          {props.news[0] &&
            props.news[0].topics.map((item, i) => (
              <div className="item-div" key={i}>
                <h1 className="item">{item}</h1>
              </div>
            ))}
        </div>
        <img
          src={props.news[0] && props.news[0].images[0]}
          className="image-div"
          alt=""
        />

        <p className="news-content">
          {props.news[0] && props.news[0].description}
        </p>
      </div>
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default News;
