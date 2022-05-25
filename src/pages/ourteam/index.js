import { useLocation } from 'react-router-dom';
import ArabicOurTeam from './arabic/OurTeam';
import EnglishOurTeam from './english/Ourteam';

const OurTeam = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishOurTeam />;
  else if (lang === 'ar') return <ArabicOurTeam />;
  else return <EnglishOurTeam />;
};

export default OurTeam;
