import './home.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import HomeFormCard from '../homeformcard';
import HomeFeatured from '../homefeatured';
import HomeBestDeals from '../homebestdeals';
import HomeLuxury from '../homeluxury';

const Home = () => {
  return (
    <div className="home-english">
      <Header />
      <ImageFrame />
      <HomeFormCard />
      <HomeFeatured />
      <HomeBestDeals />
      <HomeLuxury />
    </div>
  );
};

export default Home;
