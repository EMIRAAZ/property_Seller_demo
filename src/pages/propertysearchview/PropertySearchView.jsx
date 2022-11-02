import './propertysearchview.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import ListHeading from '../../components/ListHeading';
import QueryCard from '../../components/querycard';
import RenderComponent from '../../components/renderComponent';
import FooterNew from '../../components/footerNew';
import { MoveToTop } from '../../components/movetotop';

const PropertySearchView = props => {
  const search = useLocation().search;
  console.log(props.homeSearch);

  return (
    <div className="list-property-api">
      <Header />
      <QueryCard
        onInputChange={props.onHomeSearchInputChange}
        onSearchLocation={props.getHomeLocationSearch}
        cardInput={props.homeSearch}
        onSearch={params => {
          props.getHomeProperty(params);
        }}
      />
      <ListHeading count={props.homeProperty.count} />
      <RenderComponent
        data={props.homeProperty.property}
        propertyCallApi={props.getHomeProperty}
        count={props.homeProperty.count}
        iQuery={search.slice(1)}
        isPagination
      />
      <FooterNew />
      <MoveToTop />
    </div>
  );
};

export default PropertySearchView;
