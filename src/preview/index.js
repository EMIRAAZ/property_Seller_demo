import './index.scss';
import HeaderButton from '../components/button/HeaderButton';

export const Preview = () => {
  return (
    <>
      <div className="preview">
        <HeaderButton>العربية</HeaderButton>
        <HeaderButton>English</HeaderButton>
      </div>
    </>
  );
};
