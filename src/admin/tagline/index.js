import { useLocation } from 'react-router-dom';
import ArabicTagLine from './arabic';
import EnglishTagLine from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishTagLine />;
  else if (lang === 'ar') return <ArabicTagLine />;
  else return <EnglishTagLine />;
};

export default Home;
