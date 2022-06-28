import './buy.scss';
import { useEffect } from 'react';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import BuyFormCard from '../buyformcard';
import BuyProperty from '../buyproperty';
import Pagination from '../../../components/pagination';
import Footer from '../../../components/footer/english/Footer';

const Buy = props => {
  useEffect(() => {
    props.getBuyProperty();
  }, []);

  const onChangeCurrentPage = current => {};
  return (
    <div className="buy-english">
      <Header />
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
