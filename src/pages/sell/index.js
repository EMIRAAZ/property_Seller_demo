import { useLocation } from 'react-router-dom';
import ArabicSell from './arabic/Sell';
import EnglishSell from './english/Sell';

const Sell = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishSell />;
  else if (lang === 'ar') return <ArabicSell />;
  else return <EnglishSell />;
};

export default Sell;
