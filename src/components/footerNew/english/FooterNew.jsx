import "./footerNew.scss";
import RightArrow from "../../svg/rightarrow";
import BasicButton from "../../button/BasicButton";
import Facebook from "../../svg/facebook";
import Twitter from "../../svg/twitter";
import Instagram from "../../svg/instagram";
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
        <li>About us</li>
        <li>about founder</li>
        <li> Our Team </li>
        <li>Our partners</li>
        <li>privacy policy</li>
      </ul>
    </div>
  );
};
const DivThree = () => {
  return (
    <div className="div-three">
      <h1 className="heading">Contact info.</h1>
      <p className="sub-heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores hic
        expedita corporis obcaecati molestias
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
