import { useLocation } from 'react-router-dom';
import ArabicAddAgency from './arabic';
import EnglishAddAgency from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishAddAgency />;
  else if (lang === 'ar') return <ArabicAddAgency />;
  else return <EnglishAddAgency />;
};

export default Home;
