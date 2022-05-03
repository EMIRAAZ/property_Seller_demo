import './index.scss';
import HeaderButton from '../components/button/HeaderButton';
import Header from '../components/header';

export const Preview = () => {
  return (
    <>
      <div className="preview">
        <Header />
        <HeaderButton>االعربية</HeaderButton>
        <HeaderButton>English</HeaderButton>
      </div>
    </>
  );
};
