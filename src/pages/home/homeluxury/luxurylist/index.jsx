import './luxurylist.scss';
import RightArrow from '../../../../components/svg/rightarrow';
import moment from 'moment';

const LuxuryList = props => {
  const renderDescription = description => {
    return description.length < 190
      ? description
      : description.substring(0, 190) + '...';
  };

  const luxuryListItem = item => (
    <div className="luxury-list-item">
      <img src={item.images[0]} alt="img" />
      <div className="details">
        <p>DownTown</p>
        <p>{moment(item.updatedAt).fromNow(true)} ago </p>
      </div>
      <p className="header">{item.title}</p>
      <p className="description">{renderDescription(item.description)}</p>
      <div className="view-more">
        <p>View More</p>
        <RightArrow customClass="right-arrow" color="black" />
      </div>
    </div>
  );
  const renderLuxuryListItem = () => {
    return props.luxury.map(item => luxuryListItem(item));
  };
  return <div className="home-luxury-list">{renderLuxuryListItem()}</div>;
};

export default LuxuryList;
