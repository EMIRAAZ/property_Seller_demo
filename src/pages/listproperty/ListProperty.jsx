import './listproperty.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/header';
import ListFormCard from './listformcard';
import QueryCard from '../../components/querycard';
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

  const getPropertyName = () => {
    if (getID() === 'featured') return 'Featured Properties';
    else if (getID() === 'readytomove') return 'Ready To Move';
    else if (getID() === 'neighbourhood') return 'Famous Neighbourhoods';
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
      <QueryCard
        onInputChange={props.onChangeListPropParams}
        onSearchLocation={props.getListpropLocationSearch}
        listSearch={props.listSearch}
        onSearch={params => getPropertyFn(params)}
      />
      {/* <ListFormCard
        onInputChange={props.onChangeListPropParams}
        onSearchLocation={props.getListpropLocationSearch}
        listSearch={props.listSearch}
        onSearch={params => getPropertyFn(params)}
      /> */}
      {/* <div className="list-property-api-details">
        <h1>{getPropertyName()}</h1>
        <p>{getPropertyCount()} Properties found</p>
      </div> */}
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
