import './buy.scss';
import { useEffect } from 'react';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import BuyFormCard from '../buyformcard';
import BuyProperty from '../buyproperty';
import Pagination from '../../../components/pagination';
import Footer from '../../../components/footer/english';
import { makeUrlParam } from '../../../utils';

const Buy = props => {
  useEffect(() => {
    props.getBuyProperty();
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
    <div className="buy-english">
      <Header customClass="buy-header-class" />
      <ImageFrame />
      <BuyFormCard
        onInputChange={props.onChangeBuyParams}
        paramInput={props.paramInput}
        getProperty={props.getBuyProperty}
        locationSearch={props.locationSearch}
        onSearchLocation={props.getBuyLocationSearch}
      />
      <BuyProperty property={props.buyProperty} />
      <Pagination
        count={props.buyProperty.count}
        onChange={current => onChangeCurrentPage(current)}
      />
      <Footer />
    </div>
  );
};

export default Buy;
