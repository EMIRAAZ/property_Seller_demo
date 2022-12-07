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
  const renderLinkFromString = str => {
    const strArr = str?.split(' ');
    for (let i = 0; i < strArr?.length; i++) {
      if (strArr[i].includes('http') || strArr[i].includes('https')) {
        if (strArr[i].includes('\n')) {
          const tempStrArr = strArr[i].split('\n');
          for (let i = 0; i < tempStrArr?.length; i++) {
            if (
              tempStrArr[i].includes('http') ||
              tempStrArr[i].includes('https')
            ) {
              tempStrArr[i] = (
                <span>
                  &nbsp;
                  <a
                    href={`https://${tempStrArr[i]}`}
                    target="_blank"
                  >{`${tempStrArr[i]}`}</a>
                </span>
              );
            } else tempStrArr[i] = <span>{` ${tempStrArr[i]}`}</span>;
          }

          strArr[i] = tempStrArr;
        } else {
          strArr[i] = (
            <span>
              &nbsp;
              <a
                href={`https://${strArr[i]}`}
                target="_blank"
              >{`${strArr[i]}`}</a>
            </span>
          );
        }
      } else strArr[i] = <span>{` ${strArr[i]}`}</span>;
    }
    return strArr;
  };

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
        {/* <div className="category">
          {props.news[0] &&
            props.news[0].topics.map((item, i) => (
              <div className="item-div" key={i}>
                <h1 className="item">{item}</h1>
              </div>
            ))}
        </div> */}
        <img
          
          src={props.news[0] && props.news[0].image}
          className="image-div rounded"

          alt=""
        />

        <p className="news-content">
          {props.news[0] && renderLinkFromString(props.news[0].description)}
        </p>
      </div>
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default News;
