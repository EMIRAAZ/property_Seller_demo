import './home.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import HomeFormCard from '../homeformcard';
import Footer from '../../../components/footer/english';
import HomeProperty from '../homeProperty';
import HomeCategory from '../homecategory';
import RenderComponent from '../../../components/renderComponent';

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
      <HomeCategory />
      {props.homeProperty.property && props.homeProperty.property.length > 0 ? (
        <div className="property-render-header">
          <p className="heading-home">Properties</p>
          <p className="sub-home">
            {props.homeProperty.count} Properties found
          </p>
        </div>
      ) : null}
      <RenderComponent
        data={props.homeProperty.property}
        propertyCallApi={props.getHomeProperty}
      />
      {/* <HomeProperty
        property={props.homeProperty}
        onChangePage={props.changePageHomeProperty}
        getProperty={props.getHomeProperty}
      /> */}
      <Footer />
    </div>
  );
};

export default Home;
