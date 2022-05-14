import './buy.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import BuyFormCard from '../buyformcard';
import BuyProperty from '../buyproperty';
import Pagination from '../../../components/pagination';
import Footer from '../../../components/footer/english/Footer';

const Buy = () => {
  return (
    <div className="buy-english">
      <Header />
      <ImageFrame />
      <BuyFormCard />
      <BuyProperty />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Buy;
