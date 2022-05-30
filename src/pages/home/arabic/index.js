import { useLocation } from 'react-router-dom';
import ArabicHome from './arabic/Home';
import EnglishHome from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishHome />;
  else if (lang === 'ar') return <ArabicHome />;
  else return <EnglishHome />;
};

export default Home;
