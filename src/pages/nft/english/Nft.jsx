import './nft.scss';
import Header from '../../../components/header';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import { MoveToTop } from '../../../components/movetotop';
import { useEffect } from 'react';
import FooterNew from '../../../components/footerNew';
import { useLocation } from 'react-router-dom';

const card1 = [
  {
    heading:
      '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
    description:
      'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
    date: 'AUGust 13, 2021 ',
    image: '/assets/image/blog1.jpg',
  },
  {
    heading:
      '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
    description:
      'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
    date: 'AUGust 13, 2021 ',
    image: '/assets/image/blog2.jpg',
  },
  {
    heading:
      '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
    description:
      'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
    date: 'AUGust 13, 2021 ',
    image: '/assets/image/blog3.jpg',
  },
];

const BlogCard = ({ date, heading, description, image }) => {
  return (
    <>
      <div className="nft-card-container">
        <div className="nft-desciption">
          <p className="nft-date">{date}</p>
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

  console.log(props);

  const getID = () => location.pathname.split('/').pop();

  const renderCard = () =>
    card1.map((item, i) => <BlogCard key={i} {...item} />);
  return (
    <div className="nft-main-container">
      <Header />
      <div className="nft-showcase">
        <h1 className="nft-header">
          {props.blog.title}
        </h1>
        <p className="nft-date">{props.blog.createdAt}</p>
        <img className="nft-main-image" src={props.blog.images} alt="nft" />
        <div className="nft-content">
          

          <p>
        {props.blog.description}
          </p>
        </div>
        <h1 className="single-news-h1">
          {props.blog.mainTitle}
        </h1>
        <div className="single-news-paragraph">
          <p>
            {props.blog.description}
          </p>

        </div>
      </div>
      {/* {renderCard()} */}
      {/* <div className="personal-newsletter">
        <h2 className="letter-heading">Personally Newsletter</h2>
        <p className="letter-content">
          A bi-weekly newsletter of design inspiration, resources and anything
          related to career development.
        </p>
        <input
          className="letter-input"
          type="text"
          id="lname"
          name="lname"
          placeholder="EMAIL ADDRESS"
        />
        <br />
        <input className="letter-button" type="submit" value="Subscribe" />
      </div> */}
      {/* <SocialPanel /> */}
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default Nft;
