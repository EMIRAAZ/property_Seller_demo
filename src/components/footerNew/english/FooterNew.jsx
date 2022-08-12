import './footerNew.scss';
import RightArrow from '../../svg/rightarrow';
import BasicButton from '../../button/BasicButton';
import Facebook from '../../svg/facebook';
import Twitter from '../../svg/twitter';
import Instagram from '../../svg/instagram';
import Mail from '../../svg/mailsvg';
import LocationIcon from '../../svg/location';
import Youtube from '../../svg/youtube';
import Phone from '../../svg/phone';

// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
      <div className="bottom-div">
        <div className="copyright">
          <p>© UAEAssistant 2022 . All rights reserved.</p>
        </div>
        <div className="terms">
          <a onClick={() => navigate('/terms')}>Terms of use</a>
          <a href="" onClick={() => navigate('/privacypolicy')}>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

const DivOne = () => {
  return (
    <div className="div-one">
      <h1 className="heading">UAE Assistant.</h1>
      <p className="sub-heading">
        Available in web and mobile apps, it lets you experience the convenience
        of property management and transactions at the tip of your fingers
      </p>
    </div>
  );
};
const DivTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="div-two">
      <h1 className="heading">Helpful Links.</h1>
      <ul>
        <li onClick={() => navigate('/about')}>
          <RightArrow color="#3270FC " viewBox="12 0 16 8" />
          About Us
        </li>
        {/* <li onClick={() => navigate("/aboutfounder")}>
          <RightArrow color="#3270FC " viewBox="12 0 16 8" />
          about founder
        </li> */}
        {/* <li>
          <RightArrow color="#3270FC " viewBox="12 0 16 8" />
          Our Team
        </li>
        <li>
          <RightArrow color="#3270FC " viewBox="12 0 16 8" />
          Our Partners
        </li> */}
        <li onClick={() => navigate('/news')}>
          <RightArrow color="#3270FC " viewBox="12 0 16 8" />
          News
        </li>
        <li onClick={() => navigate('/career')}>
          <RightArrow color="#3270FC " viewBox="12 0 16 8" />
          Careers
        </li>
        <li onClick={() => navigate('/blogs')}>
          <RightArrow color="#3270FC " viewBox="12 0 16 8" />
          Blog
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
        <Mail fill="#3270FC" width="10" height="10" customClass="icon" />
        &nbsp;&nbsp;Mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{' '}
        <span> hello@uaeassistant.com</span>
      </p>
      <div style={{ display: 'flex' }}>
        <p className="sub-heading">
          <LocationIcon
            fill="#3270FC"
            opacity="1"
            width="9"
            height="12"
            viewbox="0 2 16 21"
            customClass="icon"
          />
          Address:
        </p>
        <p className="sub-heading">
          <span>
            PO.BOX:21721 Office No:513, Blue Bay Tower, Business bay, Dubai, UAE
          </span>
        </p>
      </div>

      <p className="sub-heading">
        <Phone fill="#3270FC" width="15" height="15" customClass="icon3" />
        &nbsp; Phone &nbsp; : <span> +71521278701</span>
      </p>
      <div className="soci">
        <Facebook width="10" height="13" customClass="social" />
        <Twitter width="10" height="13" customClass="social" />
        <Instagram width="10" height="13" customClass="social" />
        <Youtube width="10" height="13" customClass="social" />
      </div>
    </div>
  );
};
const DivFour = () => {
  return (
    <div className="div-four">
      <h1 className="heading">Download Our App.</h1>
      {/* <p className="sub-heading">
        Start working with UAE Assistant that can provide everything you need
      </p> */}

      <BasicButton customClass="btn">
        <svg
          width="14"
          height="12"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: '10px' }}
        >
          <path
            d="M19.5116 14.9438C19.525 13.9024 19.8024 12.8814 20.3179 11.9757C20.8334 11.07 21.5702 10.309 22.4599 9.76363C21.8947 8.95872 21.1491 8.29631 20.2823 7.82902C19.4155 7.36173 18.4514 7.10242 17.4665 7.07169C15.3656 6.85179 13.3289 8.32532 12.2583 8.32532C11.167 8.32532 9.51864 7.09352 7.74365 7.12994C6.59554 7.16693 5.47662 7.49986 4.4959 8.09629C3.51519 8.69272 2.70612 9.5323 2.14754 10.5332C-0.2721 14.7108 1.53274 20.8503 3.85055 24.2271C5.0102 25.8806 6.36551 27.7276 8.13889 27.6621C9.87425 27.5903 10.5224 26.5586 12.6171 26.5586C14.6924 26.5586 15.3005 27.6621 17.1098 27.6205C18.972 27.5903 20.1452 25.9596 21.2642 24.2904C22.0974 23.1122 22.7385 21.8101 23.1639 20.4322C22.082 19.9759 21.1588 19.2122 20.5093 18.2362C19.8598 17.2602 19.5128 16.1151 19.5116 14.9438Z"
            fill="white"
          />
          <path
            d="M16.0935 4.85101C17.1088 3.63558 17.609 2.07336 17.4879 0.496094C15.9368 0.658558 14.5039 1.39784 13.4749 2.56663C12.9718 3.13762 12.5864 3.80189 12.3409 4.52147C12.0954 5.24105 11.9945 6.00183 12.044 6.76032C12.8198 6.76829 13.5874 6.60059 14.2889 6.26987C14.9903 5.93915 15.6074 5.45401 16.0935 4.85101Z"
            fill="white"
          />
        </svg>
        App Store
      </BasicButton>
      <BasicButton customClass="btn">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="14"
          height="12"
          // viewBox="0 0 224 258"
          style={{ marginRight: '10px' }}
          fill="white"
        >
          <g>
            <g>
              <path
                d="M451.908,224.327L91.42,6.615C84.152,2.226,76.962,0,70.05,0C55.38,0,40.576,10.917,40.576,35.305V476.8
			c0,24.314,14.712,35.198,29.292,35.2c0.002,0,0.002,0,0.003,0c6.945,0,14.172-2.266,21.479-6.734l360.726-220.618
			c12.329-7.54,19.381-18.553,19.348-30.215C471.391,242.771,464.279,231.797,451.908,224.327z M345.959,184.753l-51.028,55.149
			L110.965,42.832L345.959,184.753z M64.671,488.759c-2.794-3.224-3.197-8.967-3.197-11.959V35.305
			c0-3.534,0.494-8.627,2.938-11.716L280.7,255.281L64.671,488.759z M112.507,467.83l182.492-197.232l50.879,54.503L112.507,467.83z
			 M441.173,266.82l-77.096,47.152l-54.848-58.754l54.993-59.434l76.882,46.432c5.976,3.609,9.41,8.083,9.422,12.275
			C450.538,258.683,447.129,263.176,441.173,266.82z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M93.657,177.152c-5.771,0-10.449,4.678-10.449,10.449v4.576c0,5.771,4.678,10.449,10.449,10.449
			s10.449-4.678,10.449-10.449v-4.576C104.106,181.83,99.428,177.152,93.657,177.152z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M93.657,214.79c-5.771,0-10.449,4.678-10.449,10.449v99.266c0,5.771,4.678,10.449,10.449,10.449
			s10.449-4.678,10.449-10.449v-99.266C104.106,219.468,99.428,214.79,93.657,214.79z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        Play Store
      </BasicButton>
    </div>
  );
};

export default FooterNew;
