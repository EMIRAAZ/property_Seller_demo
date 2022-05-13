import './buy.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import BuyFormCard from '../buyformcard';
import BuyProperty from '../buyproperty';

const Buy = () => {
  return (
    <div className="buy-english">
      <Header />
      <ImageFrame />
      <BuyFormCard />
      <BuyProperty />
    </div>
  );
};

export default Buy;
