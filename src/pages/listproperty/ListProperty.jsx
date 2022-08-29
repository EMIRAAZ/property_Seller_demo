import './listproperty.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import QueryCard from '../../components/querycard';
import RenderComponent from '../../components/renderComponent';
import ListHeading from '../../components/ListHeading';
import { MoveToTop } from '../../components/movetotop';
import FooterNew from '../../components/footerNew';

const ListProperty = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();
  const getSearch = () => location.search.substring(1);

  const getParamsForNeigh = params => {
    let pathname = location.search.substring(1);
    return `${params}&${pathname}`;
  };

  const getPropertyData = () => {
    if (getID() === 'featured') return props.featured.data;
    else if (getID() === 'readytomove') return props.readyToMoveIn.data;
    else if (getID() === 'neighbourhood') return props.propWithNeighbor.data;
    else if (getID() === 'verifiedproperties') return props.vp.data;
    else if (getID() === 'tag') return props.tag.data;
  };

  const getPropertyName = () => {
    if (getID() === 'featured') return 'Featured Properties';
    else if (getID() === 'readytomove') return 'Ready Properties';
    else if (getID() === 'neighbourhood') return 'Famous Neighbourhoods';
    else if (getID() === 'verifiedproperties') return 'Verified Properties';
    else if (getID() === 'tag') return 'Result for your Search';
  };
  const getPropertyFn = params => {
    if (getID() === 'featured') return props.getCatFeatured(params);
    else if (getID() === 'readytomove') return props.getRtmin(params);
    else if (getID() === 'neighbourhood')
      return props.getPropWithNeighSale(getParamsForNeigh(params));
    else if (getID() === 'verifiedproperties') return props.getVP(params);
    else if (getID() === 'tag')
      return props.getPropWithTag(`params&${getSearch()}`);
  };

  const getPropertyCount = () => {
    if (getID() === 'featured') return props.featured.count;
    else if (getID() === 'readytomove') return props.readyToMoveIn.count;
    else if (getID() === 'neighbourhood') return props.propWithNeighbor.count;
    else if (getID() === 'verifiedproperties') return props.vp.count;
    else if (getID() === 'tag') return props.tag.count;
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
