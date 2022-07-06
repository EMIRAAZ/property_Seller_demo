import { useLocation } from 'react-router-dom';
import ArabicHeader from './arabic/Header';
import EnglishHeader from './english/Header';

const Header = ({ customClass }) => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishHeader customClass={customClass} />;
  else if (lang === 'ar') return <ArabicHeader />;
  else return <EnglishHeader customClass={customClass} />;
};

export default Header;
