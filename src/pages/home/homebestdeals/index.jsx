import './homebestdeals.scss';
import DealsList from './dealslist';

const HomeBestDeals = () => {
  return (
    <div className="home-best-deals">
      <div className="best-deals-content">
        <div className="header">
          <p className="main-header">Best off plan deals</p>
          <p className="sub-header">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
        </div>
        <DealsList />
      </div>
    </div>
  );
};

export default HomeBestDeals;
