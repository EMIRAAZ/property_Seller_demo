import './buy.scss';
import { useState } from 'react';
import Header from '../../../components/header';
import QueryCard from '../../../components/querycard';
import RenderComponent from '../../../components/renderComponent';
import Footer from '../../../components/footer/english';
import ListHeading from '../../../components/ListHeading';
import { MoveToTop } from '../../../components/movetotop';
import FooterNew from '../../../components/footerNew';

import { Helmet } from 'react-helmet';

const Buy = props => {
  const [param, setParam] = useState('');
  return (
    <div className="buy-english">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Luxury Properties for Sale in Dubai, UAE | Best Luxury Properties for
          Sale in Dubai | Buy or Sale luxury properties in Dubai, UAE - UAE
          Assistant
        </title>
        <meta
          name="keywords"
          content="Properties for sale in UAE, Luxury Properties for Sale in Dubai, Properties for sale in UAE, Properties for sale in Dubai"
        />
        <meta
          property="og:title"
          content="Luxury Properties for Sale in Dubai, UAE | Best Luxury Properties for Sale in Dubai | Buy or Sale luxury properties in Dubai, UAE - Property Assistant"
        />
        <meta
          name="description"
          content="Are you searching the luxury properties for sale in Dubai, UAE? Buy or sale luxury properties in Dubai, UAE with the help of the leading real estate agent at best prices. Browse property listings and start your dream home search."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="http://www.propertyassistant.ae/buy" />
        <meta
          property="og:title"
          content="Luxury Properties for Sale in Dubai, UAE | Best Luxury Properties for Sale in Dubai | Buy or Sale luxury properties in Dubai, UAE - Property Assistant"
        />

        <meta
          property="og: description"
          content="Are you searching the luxury properties for sale in Dubai, UAE? Buy or sale luxury properties in Dubai, UAE with the help of the leading real estate agent at best prices. Browse property listings and start your dream home search."
        />
        <meta property="og:url" content="http://www.propertyassistant.ae/buy" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter: description"
          content="Are you searching the luxury properties for sale in Dubai, UAE? Buy or sale luxury properties in Dubai, UAE with the help of the leading real estate agent at best prices. Browse property listings and start your dream home search."
        />
        <meta name="twitter:image" content="" />
        <meta
          name="twitter:title"
          content="Luxury Properties for Sale in Dubai, UAE | Best Luxury Properties for Sale in Dubai | Buy or Sale luxury properties in Dubai, UAE - Property Assistant"
        />
      </Helmet>
      <Header customClass="buy-header-class" />
      <QueryCard
        onInputChange={props.onChangeBuyParams}
        onSearchLocation={props.getBuyLocationSearch}
        isSale={false}
        cardInput={props.cardInput}
        onSearch={params => {
          props.getBuyProperty(`sale=buy&limit=${6}&offset=${0}${params}`);
          setParam(params);
        }}
      />
      <ListHeading main="Buy" count={props.buyProperty.count} />
      <RenderComponent
        data={props.buyProperty.property}
        propertyCallApi={props.getBuyProperty}
        count={props.buyProperty.count}
        iQuery={`sale=buy&limit=${6}&offset=${0}`}
        query={`sale=buy${param}`}
        isPagination
      />
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default Buy;
