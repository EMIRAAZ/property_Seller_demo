import './nft.scss';
import Header from '../../../components/header';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import MoveToTopComponent from '../../../components/movetotop';

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

const Nft = () => {
  const renderCard = () =>
    card1.map((item, i) => <BlogCard key={i} {...item} />);
  return (
    <div className="nft-main-container">
      <Header />
      <div className="nft-showcase">
        <h1 className="nft-header">
          10 hilarious NFT sales that broke the internet
        </h1>
        <p className="nft-date">AUGust 13, 2021 • Daily digest</p>
        <img className="nft-main-image" src="/assets/image/nft.jpg" alt="nft" />
        <div className="nft-content">
          <p>
            Design comps, layouts, wireframes—will your clients accept that you
            go about things the facile way? Authorities in our business will
            tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
            to forswear forever.
          </p>

          <p>
            Not so fast, I'd say, there are some redeeming factors in favor of
            greeking text, as its use is merely the symptom of a worse problem
            to take into consideration.
          </p>
          <p>
            The toppings you may chose for that TV dinner pizza slice when you
            forgot to shop for foods, the paint you may slap on your face to
            impress the new boss is your business. But what about your daily
            bread?{' '}
          </p>
          <img className="nft-image" src="/assets/image/nft1.png" alt="nft" />
          <p>
            The toppings you may chose for that TV dinner pizza slice when you
            forgot to shop for foods, the paint you may slap on your face to
            impress the new boss is your business. But what about your daily
            bread? Not so fast, I'd say, there are some redeeming factors in
            favor of greeking text, as its use is merely the symptom of a worse
            problem to take into consideration.
          </p>
          <p>
            Design comps, layouts, wireframes—will your clients accept that you
            go about things the facile way? Authorities in our business will
            tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
            to forswear forever.
          </p>
        </div>
        <h1 className="single-news-h1">
          Design comps, layouts, wireframes—we believe that clients will surely
          accept that you go about things the facile way. It’s a matter of time.
        </h1>
        <div className="single-news-paragraph">
          <p>
            Design comps, layouts, wireframes—will your clients accept that you
            go about things the facile way? Authorities in our business will
            tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
            to forswear forever.{' '}
          </p>

          <p>
            The toppings you may chose for that TV dinner pizza slice when you
            forgot to shop for foods, the paint you may slap on your face to
            impress the new boss is your business. But what about your daily
            bread? Not so fast, I'd say, there are some redeeming factors in
            favor of greeking text, as its use is merely the symptom of a worse
            problem to take into consideration.
          </p>

          <p>
            Not so fast, I'd say, there are some redeeming factors in favor of
            greeking text, as its use is merely the symptom of a worse problem
            to take into consideration.
          </p>

          <p>
            Design comps, layouts, wireframes—will your clients accept that you
            go about things the facile way? Authorities in our business will
            tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
            to forswear forever.
          </p>
        </div>
      </div>
      {renderCard()}
      <div className="personal-newsletter">
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
      </div>
      {/* <SocialPanel /> */}
      <MoveToTopComponent />
      <Footer />
    </div>
  );
};

export default Nft;
