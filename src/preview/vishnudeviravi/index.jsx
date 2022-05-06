import './index.scss';
import HeaderButton from '../../components/button/HeaderButton';
import BasicButton from '../../components/button/BasicButton';
import Header from '../../components/header';
import BasicInput from '../../components/input/BasicInput';
import LocationIcon from '../../components/svg/location';
import BasicSelect from '../../components/select/BasicSelect';

const Preview = () => {
  return (
    <>
      <div className="v">
        {/* <Header /> */}
        <BasicInput
          type="text"
          placeholder={'Search a location'}
          leftIcon={LocationIcon}
        />
        {/* <BasicSelect name="Property Type" /> */}
        {/* <BasicButton>List Your Property</BasicButton>Q */}
        {/* <div className="preview">
        <HeaderButton>االعربية</HeaderButton>
        <HeaderButton>English</HeaderButton>
      </div> */}
      </div>{' '}
      <div className="v">
        {/* <Header /> */}
        {/* <BasicInput
        type="text"
        placeholder={'Search a location'}
        leftIcon={LocationIcon}
      /> */}
        <BasicSelect
          name="Property Type"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />
        {/* <BasicButton>List Your Property</BasicButton>Q */}
        {/* <div className="preview">
        <HeaderButton>االعربية</HeaderButton>
        <HeaderButton>English</HeaderButton>
      </div> */}
      </div>
    </>
  );
};

export default Preview;
