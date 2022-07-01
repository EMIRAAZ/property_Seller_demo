import './listproperty.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/header';
import ListFormCard from './listformcard';
import ListPropItem from './listpropitem';
const ListProperty = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  useEffect(() => {
    if (getID() === 'featured') props.getCatFeatured();
    else if (getID() === 'readytomove') props.getRtmin();
  }, []);
  const getPropertyData = () => {
    if (getID() === 'featured') return props.featurd;
    else if (getID() === 'readytomove') return props.readyToMoveIn;
  };
  const getPropertyFn = params => {
    if (getID() === 'featured') return props.getCatFeatured(params);
    else if (getID() === 'readytomove') return props.getRtmin(params);
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
    </div>
  );
};

export default ListProperty;
