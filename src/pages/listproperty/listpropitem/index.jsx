import './listpropitem.scss';
import Property from '../../../components/property';
import { useEffect, useState } from 'react';

const ListPropertyItem = ({ property, onChangePage, getProperty }) => {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    getProperty();
  }, []);

  const setCurrentPage = () => {
    if (current * 6 < property.count) {
      setCurrent(current + 1);
      onChangeCurrentPage(current + 1);
    }
  };

  const renderProperty = () =>
    property.map((item, i) => (
      <Property check={i < 6} key={item.id} {...item} />
    ));

  const onChangeCurrentPage = current => {
    const offset = 6 * current - 6 > 0 ? 6 * current - 6 : 0;
    onChangePage(current, getProperty(`${property.params}&offset=${offset}`));
  };

  const bgColor = () => {
    if (property && property.length > 0) {
      return '#eef7ff';
    } else return '#ffffff';
  };

  return (
    <div className="list-prop-property" style={{ backgroundColor: bgColor() }}>
      <div className="list-prop-property-content">
        <div className="property-list-container">{renderProperty()}</div>
      </div>
    </div>
  );
};

export default ListPropertyItem;
