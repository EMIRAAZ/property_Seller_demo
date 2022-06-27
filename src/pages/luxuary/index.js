import { useLocation } from 'react-router-dom';
import ArabicLuxuary from './arabic/Luxury';
import EnglishLuxuary from './english/Luxuary';

const Luxury = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishLuxuary />;
  else if (lang === 'ar') return <ArabicLuxuary />;
  else return <EnglishLuxuary />;
};

export default Luxury;
