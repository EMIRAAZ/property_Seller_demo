import { useLocation } from 'react-router-dom';
import ArabicOurFounder from './arabic/AboutFounder';
import EnglishAboutFounder from './english/Aboutfounder';

const AboutFounder = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishAboutFounder/>;
  else if (lang === 'ar') return <ArabicOurFounder />;
  else return <EnglishAboutFounder />;
};

export default AboutFounder;
