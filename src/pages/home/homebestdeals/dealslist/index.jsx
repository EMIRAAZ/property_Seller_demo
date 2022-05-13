import './dealslist.scss';

const DealsList = () => {
  const dealsListItem = img => (
    <div
      className="deals-list-item"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="deals-item-content">
        <div className="details">
          <p>DownTown</p>
          <p>1 Month Ago</p>
        </div>
        <p className="heading">La Rosa</p>
        <p className="price">Starting from AED 1.75M</p>
      </div>
    </div>
  );
  const renderDealsListItem = () => {
    return [
      { key: 1, img: '/assets/image/bestdeals.jpg' },
      { key: 2, img: '/assets/image/bestdeals.jpg' },
    ].map(item => dealsListItem(item.img, item.key));
  };
  return <div className="home-deals-list">{renderDealsListItem()}</div>;
};

export default DealsList;
