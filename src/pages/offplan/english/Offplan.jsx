import './Offplan.scss';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import OffplanCard from '../../../components/offpaln/offplanCard/OffplanCard';
import { useEffect } from 'react';

const Offplan = props => {
  useEffect(() => {
    props.getOffplanWeb();
  }, []);

  const renderOffplan = () =>
    props.offplan.data.map(item => (
      <div className="offplan-card-size-div">
        <OffplanCard key={item.id} {...item} />
      </div>
    ));
  return (
    <>
      <div className="offplan-main-container-1">
        <Header />
        <ImageFrame />
        <div className="offplans-projects">
          <h1 className="Heading">Offplan Projects</h1>
          <h2 className="sub-heading">{props.offplan.count} offplans found</h2>
          <div className="offplan-card-div">{renderOffplan()}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

////////////////////////////////

const Wallpaper = () => {
  return (
    <div className="wallpaper-div">
      {/* <img
        src="/assets/image/offplan.png"
        className="offplan-wallpaper"
        alt="building"
      /> */}
    </div>
  );
};
////////////////////

export default Offplan;
