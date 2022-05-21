import { useLocation } from 'react-router-dom';
import ArabicShortTerm from './arabic/ShortTerm';
import EnglishShortTerm from './english/ShortTerm';

const ShortTerm = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishShortTerm />;
  else if (lang === 'ar') return <ArabicShortTerm />;
  else return <EnglishShortTerm />;
};

export default ShortTerm;
