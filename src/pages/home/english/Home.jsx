import './home.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import HomeFormCard from '../homeformcard';
import ViewAll from '../viewall';
import HomeCategory from '../homecategory';
import RenderComponent from '../../../components/renderComponent';
import { MoveToTop } from '../../../components/movetotop';
import Searches from '../../../components/searches';
import { useEffect, useState } from 'react';
import FooterNew from '../../../components/footerNew';

import { Helmet } from 'react-helmet';

const Home = props => {
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
          Commercial properties in UAE - Property Assistant
        </title>
        <meta
          name="keywords"
          content="Freehold Properties in Dubai, Residential Properties in Dubai, Commercial properties in UAE"
        />
        <meta
          property="og:title"
          content="Freehold Properties in Dubai | Residential Properties in Dubai | Commercial properties in UAE - Property Assistant "
        />

        <meta
          name="description"
          content="Looking for Freehold,Commercial and Residential Properties in Dubai, UAE. We are an exclusive real estate agent in Dubai, UAE specialized in the best real estate deals for sale and rent. Contact us for more details."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <link rel="canonical" href="https://www.propertyassistant.ae" />

        <meta
          property="og:title"
          content="Freehold Properties in Dubai | Residential Properties in Dubai | Commercial properties in UAE - Property Assistant"
        />

        <meta
          property="og: description"
          content="Looking for Freehold,Commercial and Residential Properties in Dubai, UAE. We are an exclusive real estate agent in Dubai, UAE specialized in the best real estate deals for sale and rent. Contact us for more details."
        />

        <meta property="og:url" content="http://www.propertyassistant.ae" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter: description"
          content="Looking for Freehold,Commercial and Residential Properties in Dubai, UAE. We are an exclusive real estate agent in Dubai, UAE specialized in the best real estate deals for sale and rent. Contact us for more details."
        />
        <meta name="twitter:image" content="" />
        <meta
          name="twitter:title"
          content="Freehold Properties in Dubai | Residential Properties in Dubai | Commercial properties in UAE - Property Assistant"
        />
      </Helmet>

      <Header customClass="home-header-class" />
      <ImageFrame advancedSearch={advancedSearch} />
      <HomeFormCard
        onInputChange={props.onHomeSearchInputChange}
        onSearchLocation={props.getHomeLocationSearch}
        homeSearch={props.homeSearch}
        onSearch={params => {
          navigate(`/property-search?limit=6&offset=0${params}`);
        }}
        advancedSearch={advancedSearch}
        setAdvancedSearch={setAdvancedSearch}
      />
      <HomeCategory advancedSearch={advancedSearch} />
      <div className="w-full p-5 bg-black text-white font-bold text-xl flex justify-center banner-cls sm:text-lg">
        Explore what is up for&nbsp;
        <span style={{ color: '#FCA120' }}>Sale</span>, Everyday
      </div>
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
      <FooterNew />
    </div>
  );
};

export default Home;
