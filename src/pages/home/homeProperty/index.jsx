import './homeproperty.scss';
import Property from '../../../components/property';
import Pagination from '../../../components/pagination';
import { useEffect } from 'react';

const HomeProperty = ({ property, onChangePage, getProperty }) => {
  useEffect(() => {
    getProperty();
  }, []);

  const renderProperty = () =>
    property.property.map(item => <Property key={item.id} {...item} />);

  const renderPropertyHeader = () => {
    if (property.property && property.property.length > 0)
      return (
        <>
          <p className="heading">Properties</p>
          <p className="sub">{property.count} Properties found</p>
        </>
      );
    else return null;
  };
  const onChangeCurrentPage = current => {
    const offset = 10 * current - 10 > 0 ? 10 * current - 10 : 0;
    onChangePage(
      current,
      getProperty(`${property.params}&offset=${offset}&limit=10`)
    );
  };

  const bgColor = () => {
    if (property.property && property.property.length > 0) {
      return '#eef7ff';
    } else return '#ffffff';
  };

  return (
    <div className="home-property" style={{ backgroundColor: bgColor() }}>
      <div className="home-property-content">
        {renderPropertyHeader()}
        <div className="property-list-container">{renderProperty()}</div>
      </div>
      <Pagination
        count={property.count}
        onChange={current => onChangeCurrentPage(current)}
      />
    </div>
  );
};

export default HomeProperty;
