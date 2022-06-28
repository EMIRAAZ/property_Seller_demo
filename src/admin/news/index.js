import { useLocation } from 'react-router-dom';
import ArabicNews from './arabic';
import EnglishNews from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishNews />;
  else if (lang === 'ar') return <ArabicNews />;
  else return <EnglishNews />;
};

export default Home;
