import './rent.scss';
import { useState } from 'react';
import Header from '../../../components/header';
import QueryCard from '../../../components/querycard';
import RenderComponent from '../../../components/renderComponent';
import Footer from '../../../components/footer';
import ListHeading from '../../../components/ListHeading';
import MoveToTopComponent from '../../../components/movetotop';

const Rent = props => {
  const [param, setParam] = useState('');
  console.log(props);
  return (
    <div className="rent-english">
      <Header customClass="rent-header-class" />
      <QueryCard
        onInputChange={props.onChangeRentParams}
        onSearchLocation={props.getRentLocationSearch}
        isSale={false}
        cardInput={props.cardInput}
        onSearch={params => {
          props.getRentProperty(`sale=rent&limit=${6}&offset=${0}${params}`);
          setParam(params);
        }}
      />
      <ListHeading count={props.rentProperty.count} />
      <RenderComponent
        data={props.rentProperty.property}
        propertyCallApi={props.getRentProperty}
        count={props.rentProperty.count}
        iQuery={`sale=rent&limit=${6}&offset=${0}`}
        query={`sale=rent${param}`}
        isPagination
      />
      <MoveToTopComponent />
      <Footer />
    </div>
  );
};

export default Rent;
