import "./homeformcard.scss";
import { useState } from "react";
import BasicSelect from "../../../components/select/BasicSelect";
import InputSelect from "../../../components/select/InputSelect";
import SearchChiptSelect from "../../../components/select/searchChipSelect";
import LocationIcon from "../../../components/svg/location";
import BasicButton from "../../../components/button/BasicButton";
import SearchIcon from "../../../components/svg/search";
import PlusIcon from "../../../components/svg/plus";
import MinusIcon from "../../../components/svg/minus";
import { makeUrlParam } from "../../../utils";

const HomeFormCard = (props) => {
  const onInputChange = (key, value) => {
    if (key === "priceFrom" || key === "priceTo") {
      const num = Number(value);
      if (Number.isInteger(num)) {
        props.onInputChange({ key, value });
      }
    } else if (key === "location") {
      props.onSearchLocation(value);
      props.onInputChange({ key, value });
    } else {
      props.onInputChange({ key, value });
    }
  };

  const makeParam = () => {
    const newListSearch = { ...props.homeSearch };
    delete newListSearch.locationSearch;
    delete newListSearch.location;
    delete newListSearch.searchArray;

    return `&${makeUrlParam({
      ...newListSearch,
    })}${makeMultipleLocString()}`;
  };

  const makeMultipleLocString = () => {
    const newSearchArray = [...props.homeSearch.searchArray];
    let mlString = "";
    for (let i = 0; i < newSearchArray.length; i++) {
      let currentObject = newSearchArray[i];
      // mlString += `&placeAddress=${currentObject.placeAddress}&city=${currentObject.city}&building=${currentObject.building}`;
      mlString += `city=${currentObject.city}`;
    }
    return mlString;
  };

  return (
    <div className="home-form-card">
      <div
        className={`home-formcard ${
          props.advancedSearch ? "advanced-formcard" : ""
        }`}
      >
        <SearchChiptSelect
          bgColor="white"
          border
          customClass={`search ${
            props.advancedSearch ? "advanced-search-input" : ""
          }`}
          name="Search City, Building, Community .."
          onChange={(value) => onInputChange("location", value)}
          onArrayChange={(value) => onInputChange("searchArray", value)}
          leftIcon={LocationIcon}
          options={props.homeSearch.locationSearch.location.map((location) => {
            return {
              // name: `${location.placeAddress} ${location.building} ${location.city}`,
              name: `${location.city}${
                location.emirate ? `-${location.emirate}` : ""
              } `,
              value: {
                // placeAddress: location.placeAddress,
                // building: location.building,
                city: location.city,
              },
            };
          })}
        />
        <BasicSelect
          bgColor="white"
          border
          customClass={`property ${
            props.advancedSearch ? "advanced-property" : ""
          }`}
          name="Property Type"
          onChange={(value) => onInputChange("propertyType", value)}
          options={[
            { name: "Apartments", value: "apartment" },
            { name: "Villas", value: "villas" },
            { name: "Townhouse", value: "townhouse" },
            { name: "Penthouse", value: "penthouse" },
            { name: "Land", value: "land" },
            { name: "Full Building", value: "fullbuilding" },
            { name: "Hotel Apartment", value: "hotelapartment" },
            { name: "Compound", value: "compound" },
            { name: "Duplex", value: "duplex" },
            { name: "Full Floor", value: "fullfloor" },
          ]}
        />
        <BasicSelect
          bgColor="white"
          customClass={`sale ${props.advancedSearch ? "advanced-sale" : ""}`}
          name="Buy"
          border
          onChange={(value) => onInputChange("sale", value)}
          options={[
            { name: "Buy", value: "buy" },
            { name: "Rent", value: "buy" },
          ]}
        />
        <InputSelect
          customClass={`price-from ${
            props.advancedSearch ? "advanced-price-from" : ""
          }`}
          bgColor="white"
          border
          name="Price From"
          onChange={(value) => onInputChange("priceFrom", value)}
          value={props.homeSearch.priceFrom}
          options={[
            { name: "300,000", value: 300000 },
            { name: "400,000", value: 400000 },
            { name: "500,000", value: 500000 },
            { name: "600,000", value: 600000 },
            { name: "700,000", value: 700000 },
            { name: "800,000", value: 800000 },
            { name: "900,000", value: 900000 },
            { name: "1,000,000", value: 1000000 },
            { name: "1,100,000", value: 1100000 },
            { name: "1,200,000", value: 1200000 },
            { name: "1,300,000", value: 1300000 },
            { name: "1,400,000", value: 1400000 },
            { name: "1,500,000", value: 1500000 },
            { name: "1,600,000", value: 1600000 },
            { name: "1,700,000", value: 1700000 },
            { name: "1,800,000", value: 1800000 },
            { name: "1,900,000", value: 1900000 },
            { name: "2,000,000", value: 2000000 },
            { name: "2,100,000", value: 2100000 },
            { name: "2,200,000", value: 2200000 },
            { name: "2,300,000", value: 2300000 },
            { name: "2,400,000", value: 2400000 },
            { name: "2,500,000", value: 2500000 },
            { name: "2,600,000", value: 2600000 },
            { name: "2,700,000", value: 2700000 },
            { name: "2,800,000", value: 2800000 },
            { name: "2,900,000", value: 2900000 },
            { name: "3,000,000", value: 3000000 },
            { name: "4,000,000", value: 4000000 },
            { name: "5,000,000", value: 5000000 },
          ]}
        />
        <InputSelect
          customClass={`price-two ${
            props.advancedSearch ? "advanced-price-two" : ""
          }`}
          name="Price To"
          bgColor="white"
          border
          onChange={(value) => onInputChange("priceTo", value)}
          value={props.homeSearch.priceTo}
          options={[
            { name: "300,0000", value: 3000000 },
            { name: "400,0000", value: 4000000 },
            { name: "500,0000", value: 5000000 },
            { name: "600,0000", value: 6000000 },
            { name: "700,0000", value: 7000000 },
            { name: "800,000", value: 800000 },
            { name: "900,000", value: 900000 },
            { name: "1,000,000", value: 1000000 },
            { name: "1,100,000", value: 1100000 },
            { name: "1,200,000", value: 1200000 },
            { name: "1,300,000", value: 1300000 },
            { name: "1,400,000", value: 1400000 },
            { name: "1,500,000", value: 1500000 },
            { name: "1,600,000", value: 1600000 },
            { name: "1,700,000", value: 1700000 },
            { name: "1,800,000", value: 1800000 },
            { name: "1,900,000", value: 1900000 },
            { name: "2,000,000", value: 2000000 },
            { name: "2,100,000", value: 2100000 },
            { name: "2,200,000", value: 2200000 },
            { name: "2,300,000", value: 2300000 },
            { name: "2,400,000", value: 2400000 },
            { name: "2,500,000", value: 2500000 },
            { name: "2,600,000", value: 2600000 },
            { name: "2,700,000", value: 2700000 },
            { name: "2,800,000", value: 2800000 },
            { name: "2,900,000", value: 2900000 },
            { name: "3,000,000", value: 3000000 },
            { name: "4,000,000", value: 4000000 },
            { name: "5,000,000", value: 5000000 },
          ]}
        />
        <InputSelect
          customClass={`bed-home ${
            props.advancedSearch ? "advanced-bed-home" : ""
          }`}
          name="Beds"
          bgColor="white"
          border
          onChange={(value) => onInputChange("noOfBed", value)}
          value={props.homeSearch.noOfBed}
          options={[
            { name: "1", value: 1 },
            { name: "2", value: 2 },
            { name: "3", value: 3 },
            { name: "4", value: 4 },
            { name: "5", value: 5 },
            { name: "6", value: 6 },
            { name: "7", value: 7 },
            { name: "8", value: 8 },
          ]}
        />
        <InputSelect
          customClass={`bath-home ${
            props.advancedSearch ? "advanced-bath-home" : ""
          }`}
          name="Bathrooms"
          bgColor="white"
          border
          onChange={(value) => onInputChange("noOfBath", value)}
          value={props.homeSearch.noOfBath}
          options={[
            { name: "1", value: 1 },
            { name: "2", value: 2 },
            { name: "3", value: 3 },
            { name: "4", value: 4 },
            { name: "5", value: 5 },
            { name: "6", value: 6 },
            { name: "7", value: 7 },
            { name: "8", value: 8 },
          ]}
        />
        <BasicButton
          customClass={`home-search-btn ${
            props.advancedSearch ? "advanced-home-search-btn" : ""
          }`}
          onClick={() => props.onSearch(makeParam())}
        >
          <SearchIcon /> Search
        </BasicButton>
        <p
          className="advanced-search"
          onClick={() => {
            props.setAdvancedSearch(!props.advancedSearch);
          }}
        >
          {props.advancedSearch ? (
            <span className="icon-class">Less Options</span>
          ) : (
            <span className="icon-class">More Options</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default HomeFormCard;
