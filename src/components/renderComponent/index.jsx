import './rendercomponent.scss';
import Pagination from '../pagination';
import Property from '../property';
import Offplan from '../offpaln/offplanCard/OffplanCard';
import { useEffect } from 'react';

const RenderComponent = ({
  className = '',
  isPagination,
  type = 'PROPERTY',
  limit = 6,
  offset = 0,
  iQuery = `limit=${limit}&offset=${offset}`,
  query = ``,
  propertyCallApi = () => {},
  data = [],
  count = 0,
  newList = false,
}) => {
  useEffect(() => {
    propertyCallApi(iQuery);
  }, []);

  const selectPropertyComponent = () => {
    switch (type) {
      case 'PROPERTY':
        return Property;
      case 'OFFPLAN':
        return Offplan;
      default:
        return Property;
    }
  };

  const renderPropertyComponent = () => {
    const Component = selectPropertyComponent();

    return data.map((item, i) => (
      <Component check={i < 6 && newList} key={item.id} {...item} />
    ));
  };

  const onChangePage = ofst => {
    propertyCallApi(`limit=${limit}&offset=${ofst}${query}`);
  };

  return (
    <div className={`render-component-div ${className}`}>
      <div className="component-container">{renderPropertyComponent()}</div>
      <div className="pagination-container">
        {isPagination ? (
          <Pagination count={count} onChange={oft => onChangePage(oft)} />
        ) : null}
      </div>
    </div>
  );
};

export default RenderComponent;
