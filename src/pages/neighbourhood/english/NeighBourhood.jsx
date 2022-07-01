import './neighbourhood.scss';
import { useEffect } from 'react';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import BasicButton from '../../../components/button/BasicButton';

const NeighborHood = props => {
  useEffect(() => {
    props.getNeighborhoodWeb();
  }, []);
  return (
    <div className="neighbourhood">
      <Header customClass="home-header-class" />
      <ImageFrame />
      <div className="main-container">
        <h1 className="heading">Famous Neighbourhood</h1>
        <h1 className="subheading">{props.neighbor.count} Properties Found</h1>
        <div className="card-div">
          {props.neighbor.rows &&
            props.neighbor.rows.map(item => <Card key={item.id} {...item} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

///////////////////

const Card = props => {
  return (
    <div className="card">
      <div
        style={{
          backgroundImage: `url(${props.images[0]})`,
        }}
        className="image-div"
      >
        <div className="text-div">
          <h2 className="neigh-name"> {props.title} </h2>
        </div>
      </div>
      <div className="button-div">
        <BasicButton customClass="btn-1">BUY</BasicButton>
        <BasicButton customClass="btn-2">RENT</BasicButton>
      </div>
    </div>
  );
};
/////////////////
export default NeighborHood;
