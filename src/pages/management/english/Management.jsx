import "./management.scss";
import Header from "../../../components/header";
import ImageFrame from "../imageframe";
import Paragraph from "../../../components/paragraph";
import SocialPanel from "../../../components/socialpanel";
import { MoveToTop } from "../../../components/movetotop";
import FooterNew from "../../../components/footerNew";

import Footer from "../../../components/footer";
const Management = () => {
  return (
    <div className="management-english">
      <Header />
      <ImageFrame />
      <Paragraph>
        Being a landlord is great! Until you need to find a new tenant or deal
        with a faulty AC on your own. We’ll take care of it. From marketing your
        home and collecting rent to carrying out maintenance – and everything in
        between – our comprehensive property management service gives you total
        peace of mind. What’s more, our goal is to ensure maximum return on your
        investment. In addition to providing you with a hassle-free experience,
        we make it our business to maintain a high occupancy rate. Whether you
        own a single unit or an entire building, let us manage your property
        while you reap the rewards.
      </Paragraph>
      {/* <SocialPanel customClass="management-social-panel" /> */}
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default Management;
