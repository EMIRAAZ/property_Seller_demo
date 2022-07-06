import { useLocation, useSearchParams } from 'react-router-dom';
import './headerButton.scss';

const HeaderButton = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = useLocation().search;

  const onLanguageChange = () => {
    const lang = new URLSearchParams(search).get('lang');

    if (lang === 'eng') setSearchParams({ lang: 'ar' });
    else if (lang === 'ar') setSearchParams({ lang: 'eng' });
    else setSearchParams({ lang: 'ar' });
  };

  return (
    // <button onClick={onLanguageChange} className="header-btn">
    <button className="header-btn">{children}</button>
  );
};

export default HeaderButton;
