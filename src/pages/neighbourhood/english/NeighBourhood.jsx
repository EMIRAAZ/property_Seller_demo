import './neighbourhood.scss';
import { useEffect } from 'react';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import BasicButton from '../../../components/button/BasicButton';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
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
          <p className="neigh-emirate">{props.emirate} </p>
        </div>
      </div>
      <div className="button-div">
        <BasicButton
          onClick={() =>
            navigate(
              `/listproperty/neighbourhood?neighborhood=${props.title}&sale=buy`
            )
          }
          customClass="btn-1"
        >
          BUY
        </BasicButton>
        <BasicButton
          onClick={() =>
            navigate(
              `/listproperty/neighbourhood?neighborhood=${props.title}&sale=rent`
            )
          }
          customClass="btn-2"
        >
          RENT
        </BasicButton>
      </div>
    </div>
  );
};
/////////////////
export default NeighborHood;
