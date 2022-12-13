import './Offplan.scss';
import Header from '../../../components/header';
import RenderComponent from '../../../components/renderComponent';
import { useEffect } from 'react';
import ListHeading from '../../../components/ListHeading';
import FooterNew from '../../../components/footerNew';

const Offplan = props => {
  useEffect(() => {
    props.getOffplanProjectsWeb();
  }, []);

  return (
    <div className="offplan-projects-container">
      <Header customClass="header-border-cls" />
      <ListHeading
        className="list-header"
        main="Offplan Projects"
        count={props.offplan.count}
      />
      <div className="offplan-projects-container">
        <RenderComponent
          to="offplan-projects"
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
