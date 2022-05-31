import { useLocation } from 'react-router-dom';
import ArabicBuy from './arabic/Buy';
import EnglishBuy from './english';

const Buy = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishBuy />;
  else if (lang === 'ar') return <ArabicBuy />;
  else return <EnglishBuy />;
};

export default Buy;
