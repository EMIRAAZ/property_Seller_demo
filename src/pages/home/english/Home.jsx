import './home.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import HomeFormCard from '../homeformcard';
import HomeFeatured from '../homefeatured';
import HomeBestDeals from '../homebestdeals';
import HomeLuxury from '../homeluxury';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer/english/Footer';

const Home = () => {
  return (
    <div className="home-english">
      <Header />
      <ImageFrame />
      <HomeFormCard />
      <HomeFeatured />
      <HomeBestDeals />
      <HomeLuxury />
      <SocialPanel />
      <Footer />
    </div>
  );
};

export default Home;
