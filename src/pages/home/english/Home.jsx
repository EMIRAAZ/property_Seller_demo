import './home.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import HomeFormCard from '../homeformcard';
import Footer from '../../../components/footer/english';
import ViewAll from '../viewall';
import HomeCategory from '../homecategory';
import RenderComponent from '../../../components/renderComponent';
import ListHeading from '../../../components/ListHeading';
import { MoveToTop } from '../../../components/movetotop';

const Home = props => {
  const navigate = useNavigate();

  return (
    <div className="home-english">
      <Header customClass="home-header-class" />
      <ImageFrame />
      <HomeFormCard
        onInputChange={props.onHomeSearchInputChange}
        onSearchLocation={props.getHomeLocationSearch}
        homeSearch={props.homeSearch}
        onSearch={params => {
          navigate(`/property-search?limit=6&offset=0${params}`);
        }}
      />
      <HomeCategory />
      {/* <ListHeading count={props.homeProperty.count} /> */}
      <RenderComponent
        data={props.homeProperty.property}
        propertyCallApi={props.getHomeProperty}
        newList
      />
      <div className="home-ctrl">
        <ViewAll
          count={props.homeProperty.count}
          getApi={props.getHomeProperty}
        />
        <MoveToTop />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
