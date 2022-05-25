import { useLocation } from 'react-router-dom';
import ArabicPolicy from './arabic/Policy';
import EnglishPolicy from './english/Policy';

const Policy = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishPolicy />;
  else if (lang === 'ar') return <ArabicPolicy />;
  else return <EnglishPolicy />;
};

export default Policy;
