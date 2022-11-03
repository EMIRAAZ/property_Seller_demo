import './homecategory.scss';
import { useNavigate } from 'react-router-dom';

const CAT = [
  {
    id: 5,
    name: 'Off Plan Properties',
    page: '/off-plan',
    image: '/assets/image/cat5-min.png',
  },
  {
    id: 4,
    name: 'Ready Properties',
    page: '/listproperty/readytomove',
    image: '/assets/image/cat4-min.png',
  },
  {
    id: 3,
    name: 'Luxury Properties',
    page: '/luxury-property',
    image: '/assets/image/cat3-min.png',
  },
  {
    id: 2,
    name: 'Neighbourhoods',
    page: '/neighbourhood',
    image: '/assets/image/cat2-min.png',
  },
  {
    id: 1,
    name: 'Featured Properties',
    page: '/listproperty/featured',
    image: '/assets/image/cat1-min.png',
  },

  {
    id: 6,
    name: 'Verified Properties',
    page: '/listproperty/verifiedproperties',
    image: '/assets/image/download.jpg',
  },
];

const HomeCategory = props => {
  let navigate = useNavigate();

  const navigateTo = page => {
    navigate(`${page}`);
  };
  const renderHomeCategoryComponent = () => {
    return CAT.map(propertyType => (
      <div
        key={propertyType.id}
        className="property-type-component-outer"
        onClick={() => navigateTo(propertyType.page)}
        onContextMenu={e => e.preventDefault()}
      >
        <div className="property-type-component-inner">
          <img src={propertyType.image} alt={propertyType.name} />
        </div>
        <p>{propertyType.name}</p>
      </div>
    ));
  };
  return (
    <div
      className={`home-category-frame ${props.advancedSearch ? 'ad-s-on' : ''}`}
    >
      {renderHomeCategoryComponent()}
    </div>
  );
};

export default HomeCategory;
