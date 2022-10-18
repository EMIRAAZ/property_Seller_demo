import "./home.scss";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header";
import ImageFrame from "../imageframe";
import HomeFormCard from "../homeformcard";
import Footer from "../../../components/footer/english";
import ViewAll from "../viewall";
import HomeCategory from "../homecategory";
import RenderComponent from "../../../components/renderComponent";
import ListHeading from "../../../components/ListHeading";
import { MoveToTop } from "../../../components/movetotop";
import Searches from "../../../components/searches";
import { useEffect, useState } from "react";
import FooterNew from "../../../components/footerNew";

import { Helmet } from "react-helmet";

const Home = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.clearHomeProperty();
  }, []);

  const [advancedSearch, setAdvancedSearch] = useState(false);

  return (
    <div className="home-english">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Freehold Properties in Dubai | Residential Properties in Dubai |
          Commercial properties in UAE - UAE Assistant
        </title>
        <meta
          name="keywords"
          content="Freehold Properties in Dubai, Residential Properties in Dubai, Commercial properties in UAE"
        />
        <meta
          name="description"
          content="Looking for Freehold,Commercial and Residential Properties in Dubai, UAE. We are an
          exclusive real estate agent in Dubai, UAE specialized in the best real estate deals for sale and
          rent. Contact us for more details"
        />
      </Helmet>

      <Header customClass="home-header-class" />
      <ImageFrame advancedSearch={advancedSearch} />
      <HomeFormCard
        onInputChange={props.onHomeSearchInputChange}
        onSearchLocation={props.getHomeLocationSearch}
        homeSearch={props.homeSearch}
        onSearch={(params) => {
          navigate(`/property-search?limit=6&offset=0${params}`);
        }}
        advancedSearch={advancedSearch}
        setAdvancedSearch={setAdvancedSearch}
      />
      <HomeCategory advancedSearch={advancedSearch} />
      {/* <ListHeading count={props.homeProperty.count} /> */}
      <RenderComponent
        data={props.homeProperty.property}
        propertyCallApi={props.getHomeProperty}
        newList
      />
      <div className="home-ctrl">
        <ViewAll goToOtherPage link={`/property-search?limit=10&offset=0`} />
        <MoveToTop />
      </div>

      <Searches />
      {/* <Footer /> */}
      <FooterNew />
    </div>
  );
};

export default Home;
