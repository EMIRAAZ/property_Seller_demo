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
    <div className="main-off-container">
      <Header />
      <ListHeading
        className="list-header"
        main="Offplan"
        count={props.offplan.count}
      />

      <BasicButton
        customClass="absolute top-14 right-5 sm:text-xs"
        children="Offplan Projects"
      />
      <div className="offplan-container">
        <RenderComponent
          className="w-full"
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
