import { useLocation } from 'react-router-dom';
import ArabicTagHead from './arabic';
import EnglishTagHead from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishTagHead />;
  else if (lang === 'ar') return <ArabicTagHead />;
  else return <EnglishTagHead />;
};

export default Home;
