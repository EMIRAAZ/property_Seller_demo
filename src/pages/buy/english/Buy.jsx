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
  return (
    <div className="buy-english">
      <Header />
      <ImageFrame />
      <BuyFormCard />
      <BuyProperty property={props.buyProperty} />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Buy;
