import './listproperty.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import QueryCard from '../../components/querycard';
import RenderComponent from '../../components/renderComponent';
import ListHeading from '../../components/ListHeading';
import Footer from '../../components/footer';
import { MoveToTop } from '../../components/movetotop';
import FooterNew from '../../components/footerNew';

const ListProperty = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const getPropertyData = () => {
    if (getID() === 'featured') return props.featured.data;
    else if (getID() === 'readytomove') return props.readyToMoveIn.data;
    else if (getID() === 'neighbourhood') return props.propWithNeighbor.data;
    else if (getID() === 'verifiedproperties') return props.vp.data;
  };

  const getPropertyName = () => {
    if (getID() === 'featured') return 'Featured Properties';
    else if (getID() === 'readytomove') return 'Ready Properties';
    else if (getID() === 'neighbourhood') return 'Famous Neighbourhoods';
    else if (getID() === 'verifiedproperties') return 'Verified Properties';
  };
  const getPropertyFn = params => {
    if (getID() === 'featured') return props.getCatFeatured(params);
    else if (getID() === 'readytomove') return props.getRtmin(params);
    else if (getID() === 'neighbourhood') return () => {};
    else if (getID() === 'verifiedproperties') return props.getVP(params);
  };

  const getPropertyCount = () => {
    if (getID() === 'featured') return props.featured.count;
    else if (getID() === 'readytomove') return props.readyToMoveIn.count;
    else if (getID() === 'neighbourhood') return props.propWithNeighbor.count;
    else if (getID() === 'verifiedproperties') return props.vp.count;
  };

  return (
    <div className="list-property-api">
      <Header customClass="property-list-header-class" />
      <QueryCard
        onInputChange={props.onChangeListPropParams}
        onSearchLocation={props.getListpropLocationSearch}
        cardInput={props.listSearch}
        onSearch={params => getPropertyFn(params)}
      />
      <ListHeading
        className="list-header"
        main={getPropertyName()}
        count={getPropertyCount()}
      />
      <RenderComponent
        data={getPropertyData()}
        propertyCallApi={getPropertyFn}
        count={getPropertyCount()}
        iQuery={`limit=${6}&offset=${0}`}
        isPagination
      />
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default ListProperty;
