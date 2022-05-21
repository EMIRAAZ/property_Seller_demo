import './rent.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import RentFormCard from '../rentformcard';
import RentProperty from '../rentproperty';
import Pagination from '../../../components/pagination';
import Footer from '../../../components/footer';

const Rent = () => {
  return (
    <div className="rent-english">
      <Header />
      <ImageFrame />
      <RentFormCard />
      <RentProperty />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Rent;
