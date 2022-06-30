import { useLocation } from 'react-router-dom';
import ArabicAddProperty from './arabic';
import EnglishAddProperty from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishAddProperty />;
  else if (lang === 'ar') return <ArabicAddProperty />;
  else return <EnglishAddProperty />;
};

export default Home;
