import './homecategory.scss';
import { useNavigate } from 'react-router-dom';

const CAT = [
  {
    id: 1,
    name: 'Featured Properties',
    page: '/listproperty/featured',
    image: '/assets/image/cat1.png',
  },
  {
    id: 2,
    name: 'Famous Neighbourhood',
    page: '/neighbourhood',
    image: '/assets/image/cat2.png',
  },
  {
    id: 3,
    name: 'Luxury Properties',
    page: '/luxury-property',
    image: '/assets/image/cat3.png',
  },
  {
    id: 4,
    name: 'Ready To MoveIn',
    page: '/listproperty/readytomove',
    image: '/assets/image/cat4.png',
  },
  {
    id: 5,
    name: 'Off Plan Properties',
    page: '/off-plan',
    image: '/assets/image/catn5.jpg',
  },
  {
    id: 6,
    name: 'Secondary Properties',
    page: '/listproperty/secondaryproperty',
    image: '/assets/image/catn5.jpg',
  },
];

const HomeCategory = () => {
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
      >
        <div className="property-type-component-inner">
          <img src={propertyType.image} alt={propertyType.name} />
        </div>
        <p>{propertyType.name}</p>
      </div>
    ));
  };
  return (
    <div className="home-category-frame">{renderHomeCategoryComponent()}</div>
  );
};

export default HomeCategory;
