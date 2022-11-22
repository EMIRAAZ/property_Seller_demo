import { useLocation } from 'react-router-dom';
import ArabicCity from './arabic';
import EnglishCity from './english';

const City = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishCity />;
  else if (lang === 'ar') return <ArabicCity />;
  else return <EnglishCity />;
};

export default City;
