import { useLocation } from 'react-router-dom';
import ArabicPatner from './arabic/Partner';
import EnglishPartner from './english/Partner';

const Partner = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishPartner />;
  else if (lang === 'ar') return <ArabicPatner />;
  else return <EnglishPartner />;
};

export default Partner;
