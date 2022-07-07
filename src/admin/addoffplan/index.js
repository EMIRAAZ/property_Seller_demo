import { useLocation } from 'react-router-dom';
import ArabicOffplan from './arabic';
import EnglishOffplan from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishOffplan />;
  else if (lang === 'ar') return <ArabicOffplan />;
  else return <EnglishOffplan />;
};

export default Home;
