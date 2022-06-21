import { useLocation } from 'react-router-dom';
import ArabicHeader from './arabic/Header';
import EnglishHeader from './english';

const Header = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishHeader />;
  else if (lang === 'ar') return <ArabicHeader />;
  else return <EnglishHeader />;
};

export default Header;
