import "./blog.scss";
import Header from "../../../components/header";
import SocialPanel from "../../../components/socialpanel";
import Footer from "../../../components/footer";

const card1 = [
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    date: "AUGust 13, 2021 ",
    image: "/assets/image/blog1.jpg",
  },
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    date: "AUGust 13, 2021 ",
    image: "/assets/image/blog2.jpg",
  },
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    date: "AUGust 13, 2021 ",
    image: "/assets/image/blog3.jpg",
  },
];
const card2 = [
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    date: "AUGust 13, 2021 ",
    image: "/assets/image/blog4.jpg",
  },
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    date: "AUGust 13, 2021 ",
    image: "/assets/image/blog5.jpg",
  },
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    date: "AUGust 13, 2021 ",
    image: "/assets/image/blog6.jpg",
  },
];
const card3 = [
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    date: "AUGust 13, 2021 ",
    image: "/assets/image/blog6.jpg",
  },
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    date: "AUGust 13, 2021 ",
    image: "/assets/image/blog8.jpg",
  },
  {
    heading:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    date: "AUGust 13, 2021 ",
    image: "/assets/image/blog9.jpg",
  },
];

const BlogCard = ({ date, heading, description, image }) => {
  return (
    <>
      <div className='blog-card-container'>
        <div className='blog-desciption'>
          <p className='blog-date'>{date}</p>
          <div className='blog-content'>
            <h1 className='blog-heading'>{heading}</h1>
            <p className='blog-description'>{description}</p>
          </div>
        </div>

        <img className='blog-main-image' src={image} alt='blog' />
      </div>
    </>
  );
};

const Blog = () => {
  const renderCard1 = () =>
    card1.map((item, i) => <BlogCard key={i} {...item} />);
  const renderCard2 = () =>
    card2.map((item, i) => <BlogCard key={i} {...item} />);
  const renderCard3 = () =>
    card3.map((item, i) => <BlogCard key={i} {...item} />);

  return (
    <>
      <div className='blog-container'>
        <Header />
        <div className='daily-blog'>
          <div className='heading-bt-container'>
            <h1>Daily Blog</h1>
            <button>View all</button>
          </div>
          {renderCard1()}
        </div>
        <div className='design-tools'>
          <div className='heading-bt-container'>
            <h1>Design Tools</h1>
            <button>View all</button>
          </div>
          {renderCard2()}
        </div>
        <div className='tutorials'>
          <div className='heading-bt-container'>
            <h1>Tutorials</h1>
            <button>View all</button>
          </div>
          {renderCard3()}
        </div>
        <SocialPanel />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
