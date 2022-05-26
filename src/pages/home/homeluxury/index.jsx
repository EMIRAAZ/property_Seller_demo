import './homeluxury.scss';
import { useEffect } from 'react';
import LuxuryList from './luxurylist';

const HomeLuxury = props => {
  useEffect(() => {
    props.getLuxury();
  }, []);
  return (
    <div className="home-luxury">
      <div className="luxury-content">
        <div className="header">
          <p className="main-header">Luxury Properties</p>
          <p className="sub-header">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
        </div>
        <LuxuryList luxury={props.luxury.luxury} />
      </div>
    </div>
  );
};

export default HomeLuxury;
