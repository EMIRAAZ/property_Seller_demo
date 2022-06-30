import './listproperty.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import ListFormCard from './listformcard';
import Property from './property';
const ListProperty = () => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();
  return (
    <div className="list-property-api">
      <Header />
      <ListFormCard
        onInputChange={() => {}}
        onSearchLocation={() => {}}
        listSearch={{ location: 'loc', locationSearch: { location: [] } }}
        onSearch={() => {}}
      />
      <Property />
    </div>
  );
};

export default ListProperty;
