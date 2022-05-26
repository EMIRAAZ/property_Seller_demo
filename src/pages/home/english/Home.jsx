import './home.scss';
import { useEffect } from 'react';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import HomeFormCard from '../homeformcard';
import HomeFeatured from '../homefeatured';
import HomeBestDeals from '../homebestdeals';
import HomeLuxury from '../homeluxury';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer/english/Footer';
import HomeProperty from '../HomeProperty';

const Home = props => {
  console.log(props.homeSearch);

  return (
    <div className="home-english">
      <Header />
      <ImageFrame />
      <HomeFormCard
        onInputChange={props.onHomeSearchInputChange}
        homeSearch={props.homeSearch}
        onSearch={props.getHomeProperty}
      />
      <HomeProperty property={props.homeProperty} />
      <HomeFeatured />
      <HomeBestDeals />
      <HomeLuxury />
      <SocialPanel />
      <Footer />
    </div>
  );
};

export default Home;
