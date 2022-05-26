import { useLocation } from 'react-router-dom';
import ArabicRent from './arabic/Rent';
import EnglishRent from './english';

const Rent = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishRent />;
  else if (lang === 'ar') return <ArabicRent />;
  else return <EnglishRent />;
};

export default Rent;
