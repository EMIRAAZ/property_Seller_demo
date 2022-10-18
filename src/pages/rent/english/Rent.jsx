import "./rent.scss";
import { useState } from "react";
import Header from "../../../components/header";
import QueryCard from "../../../components/querycard";
import RenderComponent from "../../../components/renderComponent";
import Footer from "../../../components/footer";
import ListHeading from "../../../components/ListHeading";
import { MoveToTop } from "../../../components/movetotop";
import FooterNew from "../../../components/footerNew";
import { Helmet } from "react-helmet";

const Rent = (props) => {
  const [param, setParam] = useState("");

  return (
    <div className="rent-english">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Luxury Properties for Rent in Dubai | Best Luxury Properties for Rent
          in Dubai - UAE Assistant
        </title>
        <meta
          name="keywords"
          content="Properties for Rent in Dubai, Luxury Properties for Rent in Dubai"
        />
        <meta
          name="description"
          content="Find the perfect luxury properties for rent in Dubai. With our selection of luxury properties for
          rent in Dubai, you'll find the perfect home for your family to settle down. Contact us now!"
        />
      </Helmet>
      <Header customClass="rent-header-class" />
      <QueryCard
        onInputChange={props.onChangeRentParams}
        onSearchLocation={props.getRentLocationSearch}
        isSale={false}
        cardInput={props.cardInput}
        onSearch={(params) => {
          props.getRentProperty(`sale=rent&limit=${6}&offset=${0}${params}`);
          setParam(params);
        }}
      />
      <ListHeading main="Rent" count={props.rentProperty.count} />
      <RenderComponent
        data={props.rentProperty.property}
        propertyCallApi={props.getRentProperty}
        count={props.rentProperty.count}
        iQuery={`sale=rent&limit=${6}&offset=${0}`}
        query={`sale=rent${param}`}
        isPagination
      />
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default Rent;
