import { useLocation } from 'react-router-dom';
import ArabicCareer from './arabic/Career';
import EnglishCareer from './english/Career';

const Career = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishCareer />;
  else if (lang === 'ar') return <ArabicCareer />;
  else return <EnglishCareer />;
};

export default Career;
