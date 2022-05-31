import './rent.scss';
import { useEffect } from 'react';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import RentFormCard from '../rentformcard';
import RentProperty from '../rentproperty';
import Pagination from '../../../components/pagination';
import Footer from '../../../components/footer';

const Rent = props => {
  useEffect(() => {
    props.getRentProperty();
  }, []);
  return (
    <div className="rent-english">
      <Header />
      <ImageFrame />
      <RentFormCard />
      <RentProperty property={props.rentProperty} />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Rent;
