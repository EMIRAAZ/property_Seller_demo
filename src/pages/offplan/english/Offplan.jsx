import './Offplan.scss';
import Header from '../../../components/header';
import RenderComponent from '../../../components/renderComponent';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListHeading from '../../../components/ListHeading';
import FooterNew from '../../../components/footerNew';
import BasicButton from '../../../components/button/BasicButton';

const Offplan = props => {
  let navigate = useNavigate();

  useEffect(() => {
    props.getOffplanWeb();
  }, []);

  return (
    <div className="main-off-container">
      <Header />
      <ListHeading
        className="list-header"
        main="Offplan Properties"
        count={props.offplan.count}
      />

      <BasicButton
        onClick={() => navigate(`/offplan-projects`)}
        customClass="absolute top-14 right-5 sm:text-xs"
        children="Offplan Projects"
      />
      <div className="offplan-container">
        <RenderComponent
          to="off-plan"
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
