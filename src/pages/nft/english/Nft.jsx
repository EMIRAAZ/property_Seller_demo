import './nft.scss';
import Header from '../../../components/header';
import { MoveToTop } from '../../../components/movetotop';
import { useEffect } from 'react';
import FooterNew from '../../../components/footerNew';
import { useLocation } from 'react-router-dom';

const BlogCard = ({ date, heading, description, image }) => {
  let newDate = new Date(date);

  return (
    <>
      <div className="nft-card-container">
        <div className="nft-desciption">
          <p className="nft-date">{newDate.toDateString()}</p>
          <div className="nft-content">
            <h1 className="nft-heading">{heading}</h1>
            <p className="nft-description">{description}</p>
          </div>
        </div>

        <img className="nft-main-image" src={image} alt="blog" />
      </div>
    </>
  );
};

const Nft = props => {
  let location = useLocation();

  useEffect(() => {
    props.getByIdBlog(getID());
  }, []);

  const getID = () => location.pathname.split('/').pop();

  let newDate = new Date(props.blog.createdAt);

  return (
    <div className="nft-main-container">
      <Header />
      <div className="nft-showcase">
        <h1 className="nft-header">{props.blog.title}</h1>
        <p className="date">{newDate.toDateString()}</p>
        <img
          className="nft-main-image rounded"
          src={props.blog.image}
          alt="nft"
        />
        <div className="nft-content">
          <p>{props.blog.description}</p>
        </div>
      </div>
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default Nft;
