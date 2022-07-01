import './listproperty.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/header';
import ListFormCard from './listformcard';
import ListPropItem from './listpropitem';
const ListProperty = props => {
  console.log(props);
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
  const getPropertyFn = () => {
    if (getID() === 'featured') return () => props.getCatFeatured();
    else if (getID() === 'readytomove') return () => props.getRtmin();
  };

  console.log(getPropertyData());
  return (
    <div className="list-property-api">
      <Header />
      <ListFormCard
        onInputChange={() => {}}
        onSearchLocation={() => {}}
        listSearch={{ location: 'loc', locationSearch: { location: [] } }}
        onSearch={() => {}}
      />
      <ListPropItem
        property={getPropertyData()}
        onChangePage={() => {}}
        getProperty={getPropertyFn()}
      />
    </div>
  );
};

export default ListProperty;
