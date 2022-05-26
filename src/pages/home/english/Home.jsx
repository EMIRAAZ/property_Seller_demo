import './home.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import HomeFormCard from '../homeformcard';
import HomeFeatured from '../homefeatured';
import HomeBestDeals from '../homebestdeals';
import HomeLuxury from '../homeluxury';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer/english/Footer';
import HomeProperty from '../homeProperty';

const Home = props => {
  console.log(props);

  return (
    <div className="home-english">
      <Header />
      <ImageFrame />
      <HomeFormCard
        onInputChange={props.onHomeSearchInputChange}
        onSearchLocation={props.getHomeLocationSearch}
        homeSearch={props.homeSearch}
        onSearch={props.getHomeProperty}
      />
      <HomeProperty property={props.homeProperty} />
      <HomeFeatured
        featured={props.homeFeatured}
        getFeatured={props.getHomeFeatured}
      />
      <HomeBestDeals />
      <HomeLuxury luxury={props.homeLuxury} getLuxury={props.getHomeLuxury} />
      <SocialPanel />
      <Footer />
    </div>
  );
};

export default Home;
