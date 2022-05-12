import './featuredlist.scss';
import RightArrow from '../../../../components/svg/rightarrow';

const FeaturedList = () => {
  return (
    <div className="featured-list">
      <div className="featured-list-item">
        <img
          className="desktop-only"
          src="/assets/image/burj-khalifa.jpg"
          alt="building"
        />
        <div
          className="item-details"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)),url('/assets/image/burj-khalifa.jpg')`,
          }}
        >
          <div className="item-details-container">
            <div className="details">
              <p>Featured</p>
              <p>.</p>
              <p>1 Month Ago</p>
            </div>
            <p className="heading">The Bay, Business Bay</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              pellentesque amet pellentesque eu felis sem leo. Tellus a amet id
              sed.
            </p>
            <div className="price">
              <p>From AED 90,000,000</p>
              <RightArrow
                customClass={'right-arrow'}
                color="black"
                width="16"
                height="9"
                viewBox="0 4 16 1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedList;
