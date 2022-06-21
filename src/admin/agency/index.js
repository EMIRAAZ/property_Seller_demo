import { useLocation } from 'react-router-dom';
import ArabicProperty from './arabic';
import EnglishProperty from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishProperty />;
  else if (lang === 'ar') return <ArabicProperty />;
  else return <EnglishProperty />;
};

export default Home;
