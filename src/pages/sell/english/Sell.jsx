import "./sell.scss";
import Header from "../../../components/header";
import ImageFrame from "../imageframe";
import Paragraph from "../../../components/paragraph";
import SocialPanel from "../../../components/socialpanel";
import { MoveToTop } from "../../../components/movetotop";
import FooterNew from "../../../components/footerNew";
import Footer from "../../../components/footer";
const Sell = () => {
  return (
    <div className="sell-english">
      <Header />
      <ImageFrame />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit
        ipsum lacus faucibus purus. Nec imperdiet quis sit ornare. A volutpat
        odio egestas ultricies vitae mi. Duis nunc quis lacus vel sed est
        accumsan est duis. Sed netus gravida pellentesque integer pretium
        integer phasellus nec. Eget at ac interdum aliquet tortor amet urna,
        nulla. At ultrices vehicula enim leo, faucibus. Justo, vel pellentesque
        pellentesque sit scelerisque. Leo, porta ut tortor, nunc tempor suscipit
        molestie in. Lectus eget malesuada arcu, blandit mi sed mi. Pellentesque
        a adipiscing sed elementum neque senectus ut faucibus tempor.
      </Paragraph>
      <div className="sell-list-with-us">
        <p className="heading">Why list with Us?</p>
        <Paragraph customClass="sell-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit
          ipsum lacus faucibus purus. Nec imperdiet quis sit ornare. A volutpat
          odio egestas ultricies vitae mi. Duis nunc quis lacus vel sed est
          accumsan est duis. Sed netus gravida pellentesque integer pretium
          integer phasellus nec. Eget at ac interdum aliquet tortor amet urna,
          nulla. At ultrices vehicula enim leo, faucibus. Justo, vel
          pellentesque pellentesque sit scelerisque. Leo, porta ut tortor, nunc
          tempor suscipit molestie in. Lectus eget malesuada arcu, blandit mi
          sed mi. Pellentesque a adipiscing sed elementum neque senectus ut
          faucibus tempor.
        </Paragraph>
      </div>
      {/* <SocialPanel /> */}
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default Sell;
