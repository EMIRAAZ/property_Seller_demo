import './luxurylist.scss';
import RightArrow from '../../../../components/svg/rightarrow';

const LuxuryList = () => {
  const luxuryListItem = img => (
    <div className="luxury-list-item">
      <img src={img} alt="img" />
      <div className="details">
        <p>DownTown</p>
        <p>1 Month Ago</p>
      </div>
      <p className="header">Villa 1</p>
      <p className="description">
        lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed
        ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.
      </p>
      <div className="view-more">
        <p>View More</p>
        <RightArrow customClass="right-arrow" color="black" />
      </div>
    </div>
  );
  const renderLuxuryListItem = () => {
    return [
      { key: 1, img: '/assets/image/bestdeals.jpg' },
      { key: 1, img: '/assets/image/bestdeals.jpg' },
      { key: 1, img: '/assets/image/bestdeals.jpg' },
      { key: 1, img: '/assets/image/bestdeals.jpg' },
    ].map(item => luxuryListItem(item.img, item.key));
  };
  return <div className="home-luxury-list">{renderLuxuryListItem()}</div>;
};

export default LuxuryList;
