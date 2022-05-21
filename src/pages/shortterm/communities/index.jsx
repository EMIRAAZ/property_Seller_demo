import './communities.scss';

const Communities = () => {
  const renderCommunity = community => {
    return community.map(item => (
      <div className="community-item">
        <img src={item.img} alt="img" />
        <p className="community-name">{item.name}</p>
      </div>
    ));
  };
  const community = [
    { name: 'Palm Jumeria', img: '/assets/image/community.jpg' },
    { name: 'Jumeria Beach', img: '/assets/image/community.jpg' },
    { name: 'Palm Jumeria', img: '/assets/image/community.jpg' },
    { name: 'Palm Jumeria', img: '/assets/image/community.jpg' },
  ];
  return (
    <div className="shortterm-communities">{renderCommunity(community)}</div>
  );
};

export default Communities;
