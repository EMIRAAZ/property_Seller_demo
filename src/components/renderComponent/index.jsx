import './rendercomponent.scss';
import Pagination from '../pagination';
import Property from '../property';
import { useEffect } from 'react';

const RenderComponent = ({
  className = '',
  isPagination,
  type = 'PROPERTY',
  limit = 6,
  offset = 0,
  propertyCallApi = () => {},
  data = [],
  count = 0,
}) => {
  useEffect(() => {
    propertyCallApi(`limit=${limit}&offset=${offset}`);
  }, []);

  const selectPropertyComponent = () => {
    switch (type) {
      case 'PROPERTY':
        return Property;
      default:
        return Property;
    }
  };

  const renderPropertyComponent = () => {
    const Component = selectPropertyComponent();

    return data.map((item, i) => (
      <Component check={i < 6} key={item.id} {...item} />
    ));
  };

  return (
    <div className={`render-component-div ${className}`}>
      <div className="component-container">{renderPropertyComponent()}</div>
      <div className="pagination-container">
        {isPagination ? <Pagination /> : null}
      </div>
    </div>
  );
};

export default RenderComponent;
