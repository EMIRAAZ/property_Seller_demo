import "./querycard.scss";
import BasicSelect from "../select/BasicSelect";
import InputSelect from "../select/InputSelect";
import SearchChipSelect from "../select/searchChipSelect";
import LocationIcon from "../svg/location";
import BasicButton from "../button/BasicButton";
import SearchIcon from "../svg/search";
import { makeParams } from "../../utils";

const QueryCard = ({
  onInputChange,
  onSearchLocation,
  cardInput,
  onSearch,
}) => {
  const onChange = (key, value) => {
    if (
      key === "priceFrom" ||
      key === "priceTo" ||
      key === "noOfBed" ||
      key === "noOfBath"
    ) {
      const num = Number(value);
      if (Number.isInteger(num)) {
        onInputChange({ key, value });
      }
    } else if (key === "location") {
      onSearchLocation(value);
      onInputChange({ key, value });
    } else {
      onInputChange({ key, value });
    }
  };

  const makeParam = () => {
    const newListSearch = { ...cardInput };
    delete newListSearch.locationSearch;
    delete newListSearch.location;
    newListSearch.location = newListSearch.searchArray;
    delete newListSearch.searchArray;
    return `${makeParams(newListSearch)}`;
  };
  return (
    <div className="query-card-component">
      <div className="container">
        <BasicSelect
          bgColor="white"
          border
          customClass="emirate"
          name="Emirate"
          onChange={(value) => onChange("emirate", value)}
          value={cardInput.emirate}
          options={[
            { name: "Abu Dhabi", value: "Abu Dhabi" },
            { name: "Dubai", value: "Dubai" },
            { name: "Sharjah", value: "Sharjah" },
            { name: "Ajman", value: "Ajman" },
            { name: "Umm Al-Quwain", value: "Umm Al-Quwain" },
            { name: "Fujairah", value: "Fujairah" },
          ]}
        />

        <BasicSelect
          bgColor="white"
          customClass="sale"
          name="Purpose"
          border
          value={cardInput.sale}
          onChange={(value) => onChange("sale", value)}
          options={[
            { name: "Buy", value: "buy" },
            { name: "Rent", value: "rent" },
          ]}
        />
        <SearchChipSelect
          bgColor="white"
          border
          customClass="search"
          name="Search City, Building, Community .."
          onChange={(value) => onChange("location", value)}
          onArrayChange={(value) => onChange("searchArray", value)}
          leftIcon={LocationIcon}
          value={cardInput.searchArray}
          options={cardInput.locationSearch.location.map((location) => {
            return {
              name: location,
              value: location,
            };
          })}
        />
        <BasicSelect
          bgColor="white"
          border
          customClass="property"
          name="Property Type"
          onChange={(value) => onChange("propertyType", value)}
          value={cardInput.propertyType}
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
          customClass="furnish-q-card"
          name="Furnish type"
          bgColor="white"
          border
          onChange={(value) => onChange("amenities", value)}
          value={cardInput.amenities}
          options={[
            { name: "Furnished", value: "furnished" },
            { name: "Unfurnished", value: "unfurnished" },
          ]}
        />
        <BasicSelect
          customClass="price-from-list"
          bgColor="white"
          border
          name="Price From"
          onChange={(value) => onChange("priceFrom", value)}
          value={cardInput.priceFrom}
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
        <BasicSelect
          customClass="price-two-list"
          name="Price To"
          bgColor="white"
          border
          onChange={(value) => onChange("priceTo", value)}
          value={cardInput.priceTo}
          options={[
            { name: "300,0000", value: 3000000 },
            { name: "400,0000", value: 4000000 },
            { name: "500,0000", value: 5000000 },
            { name: "600,0000", value: 6000000 },
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
        <BasicSelect
          customClass="bed-list"
          name="Bed"
          bgColor="white"
          border
          onChange={(value) => onChange("noOfBed", value)}
          value={cardInput.noOfBed}
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
        <BasicSelect
          customClass="bath-list"
          name="Bath"
          bgColor="white"
          border
          onChange={(value) => onChange("noOfBath", value)}
          value={cardInput.noOfBath}
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
          customClass="list-search-btn"
          onClick={() => onSearch(makeParam())}
        >
          <SearchIcon /> Search
        </BasicButton>
      </div>
    </div>
  );
};

export default QueryCard;
