import { useLocation } from 'react-router-dom';
import ArabicAbout from './arabic/About';
import EnglishAbout from './english/About';

const About = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishAbout />;
  else if (lang === 'ar') return <ArabicAbout />;
  else return <EnglishAbout />;
};

export default About;
