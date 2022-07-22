import './buy.scss';
import { useState } from 'react';
import Header from '../../../components/header';
import QueryCard from '../../../components/querycard';
import RenderComponent from '../../../components/renderComponent';
import Footer from '../../../components/footer/english';
import ListHeading from '../../../components/ListHeading';
import { MoveToTop } from '../../../components/movetotop';

const Buy = props => {
  const [param, setParam] = useState('');
  return (
    <div className="buy-english">
      <Header customClass="buy-header-class" />
      <QueryCard
        onInputChange={props.onChangeBuyParams}
        onSearchLocation={props.getBuyLocationSearch}
        isSale={false}
        cardInput={props.cardInput}
        onSearch={params => {
          props.getBuyProperty(`sale=buy&limit=${6}&offset=${0}${params}`);
          setParam(params);
        }}
      />
      <ListHeading main="Buy" count={props.buyProperty.count} />
      <RenderComponent
        data={props.buyProperty.property}
        propertyCallApi={props.getBuyProperty}
        count={props.buyProperty.count}
        iQuery={`sale=buy&limit=${6}&offset=${0}`}
        query={`sale=buy${param}`}
        isPagination
      />
      <MoveToTop />
      <Footer />
    </div>
  );
};

export default Buy;
