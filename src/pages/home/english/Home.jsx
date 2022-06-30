import './home.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import HomeFormCard from '../homeformcard';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer/english/Footer';
import HomeProperty from '../homeProperty';
import Categories from '../categories';

const Home = props => {
  return (
    <div className="home-english">
      <Header customClass="home-header-class" />
      <ImageFrame />
      <HomeFormCard
        onInputChange={props.onHomeSearchInputChange}
        onSearchLocation={props.getHomeLocationSearch}
        homeSearch={props.homeSearch}
        onSearch={props.getHomeProperty}
      />
      <HomeProperty
        property={props.homeProperty}
        onChangePage={props.changePageHomeProperty}
        getProperty={props.getHomeProperty}
      />
      <Categories />
      {/* <HomeFeatured
        featured={props.homeFeatured}
        getFeatured={props.getHomeFeatured}
        onChangePage={props.changePageHomeFeatured}
      />
      <HomeBestDeals />
      <HomeLuxury
        luxury={props.homeLuxury}
        getLuxury={props.getHomeLuxury}
        onChangePage={props.changePageHomeLuxury}
      /> */}
      <SocialPanel />
      <Footer />
    </div>
  );
};

export default Home;
