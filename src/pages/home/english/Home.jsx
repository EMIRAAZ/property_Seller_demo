import './home.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import HomeFormCard from '../homeformcard';
import HomeFeatured from '../homefeatured';

const Home = () => {
  return (
    <div className="home-english">
      <Header />
      <ImageFrame />
      <HomeFormCard />
      <HomeFeatured />
    </div>
  );
};

export default Home;
