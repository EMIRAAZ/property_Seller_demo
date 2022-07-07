import './listproperty.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/header';
import ListFormCard from './listformcard';
import ListPropItem from './listpropitem';
import Pagination from '../../components/pagination';

const ListProperty = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();
  const getParam = () => location.search;

  useEffect(() => {
    if (getID() === 'featured') props.getCatFeatured();
    else if (getID() === 'readytomove') props.getRtmin();
    else if (getID() === 'neighbourhood')
      props.getPropWithNeighSale(getParam());
  }, []);
  const getPropertyData = () => {
    if (getID() === 'featured') return props.featured.data;
    else if (getID() === 'readytomove') return props.readyToMoveIn.data;
    else if (getID() === 'neighbourhood') return props.propWithNeighbor.data;
  };
  const getPropertyFn = params => {
    if (getID() === 'featured') return props.getCatFeatured(params);
    else if (getID() === 'readytomove') return props.getRtmin(params);
    else if (getID() === 'neighbourhood') return () => {};
  };

  const getPropertyCount = () => {
    if (getID() === 'featured') return props.featured.count;
    else if (getID() === 'readytomove') return props.readyToMoveIn.count;
    else if (getID() === 'neighbourhood') return props.propWithNeighbor.count;
  };

  const onChangeCurrentPage = current => {
    const offset = 10 * current - 10 > 0 ? 10 * current - 10 : 0;
    getPropertyFn(`offset=${offset}`);
  };

  return (
    <div className="list-property-api">
      <Header />
      <ListFormCard
        onInputChange={props.onChangeListPropParams}
        onSearchLocation={props.getListpropLocationSearch}
        listSearch={props.listSearch}
        onSearch={params => getPropertyFn(params)}
      />
      <ListPropItem
        property={getPropertyData()}
        onChangePage={() => {}}
        getProperty={params => getPropertyFn(params)}
      />
      <Pagination
        count={getPropertyCount()}
        onChange={current => onChangeCurrentPage(current)}
      />
    </div>
  );
};

export default ListProperty;
