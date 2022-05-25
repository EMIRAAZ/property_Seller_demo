import { useLocation } from 'react-router-dom';
import ArabicTerms from './arabic/Terms';
import EnglishTerms from './english/Terms';

const Terms = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishTerms />;
  else if (lang === 'ar') return <ArabicTerms />;
  else return <EnglishTerms />;
};

export default Terms;
