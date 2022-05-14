import './buy.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import BuyFormCard from '../buyformcard';
import BuyProperty from '../buyproperty';
import Pagination from '../../../components/pagination';

const Buy = () => {
  return (
    <div className="buy-english">
      <Header />
      <ImageFrame />
      <BuyFormCard />
      <BuyProperty />
      <Pagination />
    </div>
  );
};

export default Buy;
