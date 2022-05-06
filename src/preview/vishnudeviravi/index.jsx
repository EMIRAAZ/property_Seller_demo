import './index.scss';
import HeaderButton from '../../components/button/HeaderButton';
import BasicButton from '../../components/button/BasicButton';
import Header from '../../components/header';
import BasicInput from '../../components/input/BasicInput';
import LocationIcon from '../../components/svg/location';

const Preview = () => {
  return (
    <div className="v">
      {/* <Header /> */}
      <BasicInput
        type="text"
        placeholder={'Search a location'}
        leftIcon={LocationIcon}
      />
      {/* <BasicButton>List Your Property</BasicButton>Q */}
      {/* <div className="preview">
        <HeaderButton>االعربية</HeaderButton>
        <HeaderButton>English</HeaderButton>
      </div> */}
    </div>
  );
};

export default Preview;
