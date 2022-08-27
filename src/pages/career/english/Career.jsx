import "./career.scss";
import SocialPanel from "../../../components/socialpanel";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ManagementFormCard from "./managementformcard/ManagementFormCard";
import { MoveToTop } from "../../../components/movetotop";
import FooterNew from "../../../components/footerNew";

const Career = () => {
  return (
    <div className="career-container">
      <Header />
      <div>
        <ManagementFormCard />
      </div>
      <MoveToTop />

      <FooterNew />
    </div>
  );
};

export default Career;
