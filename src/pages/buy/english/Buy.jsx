import "./buy.scss";
import { useState } from "react";
import Header from "../../../components/header";
import QueryCard from "../../../components/querycard";
import RenderComponent from "../../../components/renderComponent";
import Footer from "../../../components/footer/english";
import ListHeading from "../../../components/ListHeading";
import { MoveToTop } from "../../../components/movetotop";
import FooterNew from "../../../components/footerNew";

import { Helmet } from "react-helmet";

const Buy = (props) => {
  const [param, setParam] = useState("");
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
          name="description"
          content="Are you searching the luxury properties for sale in Dubai, UAE? Buy or sale luxury properties in
          Dubai, UAE with the help of the leading real estate agent at best prices. Browse property listings
          and start your dream home search.
          "
        />
      </Helmet>
      <Header customClass="buy-header-class" />
      <QueryCard
        onInputChange={props.onChangeBuyParams}
        onSearchLocation={props.getBuyLocationSearch}
        isSale={false}
        cardInput={props.cardInput}
        onSearch={(params) => {
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
