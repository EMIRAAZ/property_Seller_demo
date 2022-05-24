import { useLocation } from 'react-router-dom';
import ArabicMortgage from './arabic/Mortgage';
import EnglishMortgage from './english/Mortgage';

const Mortgage = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishMortgage />;
  else if (lang === 'ar') return <ArabicMortgage />;
  else return <EnglishMortgage />;
};

export default Mortgage;
