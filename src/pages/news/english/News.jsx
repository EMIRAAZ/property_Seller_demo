import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { MoveToTop } from "../../../components/movetotop";
import FooterNew from "../../../components/footerNew";

import "./news.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const News = (props) => {
  let location = useLocation();

  const getID = () => location.pathname.split("/").pop();

  useEffect(() => {
    props.getSingleNews(getID());
  }, []);

  return (
    <div className="news-main-container">
      <Header />

      <div className="container">
        <h1 className="heading">{props.news[0] && props.news[0].mainTitle}</h1>
        <div className="category">
          {props.news[0] &&
            props.news[0].topics.map((item, i) => (
              <div className="item-div" key={i}>
                <h1 className="item">{item}</h1>
              </div>
            ))}
        </div>
        <h1 className="sub-heading">{props.news[0] && props.news[0].title}</h1>
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
