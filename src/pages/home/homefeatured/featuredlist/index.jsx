import './featuredlist.scss';
import RightArrow from '../../../../components/svg/rightarrow';
import moment from 'moment';

const FeaturedList = props => {
  const renderDescription = description => {
    return description.length < 190
      ? description
      : description.substring(0, 190) + '...';
  };
  const featuredListItem = item => (
    <div className="featured-list-item">
      <img className="desktop-only" src={item.images[0]} alt="building" />
      <div
        className="item-details"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)),url(${item.images[0]})`,
        }}
      >
        <div className="item-details-container">
          <div className="details">
            <p>Featured</p>
            <p>.</p>
            <p>{moment(item.updatedAt).fromNow(true)} ago </p>
          </div>
          <p className="heading">{item.title}</p>
          <p className="description">{renderDescription(item.description)}</p>
          <div className="price">
            <p>From AED {item.price}</p>
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
  );

  const renderFeaturedListItem = () => {
    return props.featured.map(item => featuredListItem(item));
  };

  return <div className="featured-list">{renderFeaturedListItem()}</div>;
};

export default FeaturedList;
