import './Offplan.scss';
import Header from '../../../components/header';
import RenderComponent from '../../../components/renderComponent';
import { useEffect } from 'react';
import ListHeading from '../../../components/ListHeading';
import FooterNew from '../../../components/footerNew';
import BasicButton from '../../../components/button/BasicButton';

const Offplan = props => {
  useEffect(() => {
    props.getOffplanWeb();
  }, []);

  return (
    <div className="offplan-projects-container">
      <Header />
      <ListHeading
        className="list-header"
        main="Offplan Projects"
        count={props.offplan.count}
      />
{/*       
      <BasicButton customClass="absolute top-14 right-5 sm:text-xs" children="Offplan Projects" />
    */}
      
      {/* <div className="categories">
        <div className="item-div">
          <h1 className="item-name">ALL</h1>
        </div>
        <div className="item-div">
          <h1 className="item-name">Studio</h1>
        </div>
        <div className="item-div">
          <h1 className="item-name">1 Bed room</h1>
        </div>
        <div className="item-div">
          <h1 className="item-name">2 Bed room</h1>
        </div>
      </div> */}
      <div className="offplan-projects-container">
        <RenderComponent
        className='w-full'
          data={props.offplan.data}
          propertyCallApi={() => {}}
          count={props.offplan.count}
          type="OFFPLAN"
          iQuery={`limit=${6}&offset=${0}`}
          isPagination
        />
      </div>
      <FooterNew />
    </div>
  );
};
export default Offplan;
