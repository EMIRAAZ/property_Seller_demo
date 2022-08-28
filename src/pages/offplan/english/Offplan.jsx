import "./Offplan.scss";
import Header from "../../../components/header";
import RenderComponent from "../../../components/renderComponent";
import Footer from "../../../components/footer/english";
import ListHeading from "../../../components/ListHeading";
import OffplanCard from "../../../components/offpaln/offplanCard/OffplanCard";
import { MoveToTop } from "../../../components/movetotop";
import FooterNew from "../../../components/footerNew";

const Offplan = (props) => {
  const renderOffplan = () =>
    props.offplan.data.map((item) => (
      <div className="offplan-card-size-div">
        <OffplanCard key={item.id} {...item} />
      </div>
    ));
  return (
    <>
      <div className="offplan-main-container-1">
        <Header customClass="offplan-header-class" />
        <div className="offplan-card-container"></div>
        <ListHeading
          main="Offplan Properties"
          count={props.offplan.count}
          sub="offplans found"
        />
        <RenderComponent
          type="OFFPLAN"
          data={props.offplan.data}
          propertyCallApi={props.getOffplanWeb}
          count={props.offplan.count}
          iQuery={`&limit=${6}&offset=${0}`}
          isPagination
        />
        <MoveToTop />
        <FooterNew />
      </div>
    </>
  );
};

export default Offplan;
