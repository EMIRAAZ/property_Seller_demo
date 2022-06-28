import './rent.scss';
import { useEffect } from 'react';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import RentFormCard from '../rentformcard';
import RentProperty from '../rentproperty';
import Pagination from '../../../components/pagination';
import Footer from '../../../components/footer';
import { makeUrlParam } from '../../../utils';

const Rent = props => {
  useEffect(() => {
    props.getRentProperty();
  }, []);

  const onChangeCurrentPage = current => {
    const offset = 10 * current - 10 > 0 ? 10 * current - 10 : 0;
    const newParamInput = { ...props.paramInput };
    if (typeof newParamInput.location === 'object') {
      const inputWithoutLocation = {
        ...newParamInput,
        ...newParamInput.location,
      };
      delete inputWithoutLocation.location;
      props.getProperty(
        `&${makeUrlParam(inputWithoutLocation)}&offset=${offset}`
      );
    } else
      props.getProperty(`&${makeUrlParam(newParamInput)}&offset=${offset}`);
  };
  return (
    <div className="rent-english">
      <Header />
      <ImageFrame />
      <RentFormCard
        onInputChange={props.onChangeRentParams}
        paramInput={props.paramInput}
        getProperty={props.getRentProperty}
        locationSearch={props.locationSearch}
        onSearchLocation={props.getRentLocationSearch}
      />
      <RentProperty property={props.rentProperty} />
      <Pagination
        count={props.rentProperty.count}
        onChange={current => onChangeCurrentPage(current)}
      />
      <Footer />
    </div>
  );
};

export default Rent;
