import './blog.scss';
import Header from '../../../components/header';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import { useEffect } from 'react';
import { MoveToTop } from '../../../components/movetotop';
import FooterNew from '../../../components/footerNew';
import { useNavigate } from 'react-router-dom';

export const BlogCard = ({ id, updatedAt, title, images, description }) => {
  let navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/viewblog/${id}`);
  };
  let date = new Date(updatedAt);

  return (
    <div className="blog-card-container" onClick={navigateTo}>
      <div className="blog-desciption">
        <div className="blog-content">
          <h1 className="blog-heading">{title}</h1>
          <p className="date">{date.toDateString()}</p>
          <p className="blog-description">{description}</p>
        </div>
      </div>

      <img
        className="blog-main-image"
        src={images.length && images[0]}
        alt="blog"
      />
    </div>
  );
};

const Blog = props => {
  useEffect(() => {
    props.getBlogWeb();
  }, []);

  const renderCard = () =>
    props.blogs.map((item, i) => <BlogCard key={i} {...item} />);

  return (
    <>
      <div className="blog-container">
        <Header />
        <div className="daily-blog">
          <div className="heading-bt-container">
            <h1>Daily Blog</h1>
            {/* <button>View all</button> */}
          </div>
          {renderCard()}
        </div>
        {/* <SocialPanel /> */}
        <MoveToTop />

        <FooterNew />
      </div>
    </>
  );
};

export default Blog;
