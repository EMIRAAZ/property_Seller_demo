import './propertysearchview.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import ListHeading from '../../components/ListHeading';
import QueryCard from '../../components/querycard';
import RenderComponent from '../../components/renderComponent';
import { getHomeProperty } from '../../redux/actions';
import Footer from '../../components/footer';

const PropertySearchView = props => {
  const search = useLocation().search;
  return (
    <div className="list-property-api">
      <Header />
      <QueryCard
        onInputChange={props.onChangeListPropParams}
        onSearchLocation={props.getListpropLocationSearch}
        cardInput={props.homeSearch}
        onSearch={params => getHomeProperty(params)}
      />
      <ListHeading count={props.homeProperty.count} />
      <RenderComponent
        data={props.homeProperty.property}
        propertyCallApi={props.getHomeProperty}
        count={props.homeProperty.count}
        iQuery={search.slice(1)}
        isPagination
      />
      <Footer />
    </div>
  );
};

export default PropertySearchView;
