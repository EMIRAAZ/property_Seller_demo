import "./footerNew.scss";
import RightArrow from "../../svg/rightarrow";
import BasicButton from "../../button/BasicButton";
import Facebook from "../../svg/facebook";
import Twitter from "../../svg/twitter";
import Instagram from "../../svg/instagram";

// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FooterNew(props) {
  const navigate = useNavigate();
  useEffect(() => {
    props.getTagHeadWeb();
    props.getTagLineWeb();
  }, []);

  return (
    <div className="footer-english-new">
      <div className="div-1">
        <DivOne />
      </div>
      <div className="div-2">
        <DivTwo />
      </div>
      <div className="div-3">
        <DivThree />
      </div>
      <div className="div-4">
        <DivFour />
      </div>
    </div>
  );
}

const DivOne = () => {
  return (
    <div className="div-one">
      <h1 className="heading">Properties.</h1>
      <p className="sub-heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores hic
        expedita corporis obcaecati molestias
      </p>
    </div>
  );
};
const DivTwo = () => {
  return (
    <div className="div-two">
      <h1 className="heading">Helpful Links.</h1>
      <ul>
        <li>
          <RightArrow color="black " viewBox="12 0 16 8" />
          About Us
        </li>{" "}
        <li>
          <RightArrow color="black " viewBox="12 0 16 8" />
          about founder
        </li>{" "}
        <li>
          <RightArrow color="black " viewBox="12 0 16 8" />
          Our Team
        </li>{" "}
        <li>
          <RightArrow color="black " viewBox="12 0 16 8" />
          Our Partners
        </li>{" "}
        <li>
          <RightArrow color="black " viewBox="12 0 16 8" />
          Teams And Conditions
        </li>
        <li>
          <RightArrow color="black " viewBox="12 0 16 8" />
          Careers
        </li>
        <li>
          <RightArrow color="black " viewBox="12 0 16 8" />
          Privacy Policy
        </li>
      </ul>
    </div>
  );
};
const DivThree = () => {
  return (
    <div className="div-three">
      <h1 className="heading">Contact info.</h1>
      <p className="sub-heading">
        Mail : <span> hr@uaeassistant.com</span>
      </p>
      <p className="sub-heading">
        Adress : <span> Dubai</span>
      </p>
      <p className="sub-heading">
        phone : <span> 3983939399</span>
      </p>
    </div>
  );
};
const DivFour = () => {
  return (
    <div className="div-four">
      <h1 className="heading">Properties.</h1>
      <p className="sub-heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores hic
        expedita corporis obcaecati molestias
      </p>
    </div>
  );
};

export default FooterNew;
