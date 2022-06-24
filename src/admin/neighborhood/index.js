import { useLocation } from 'react-router-dom';
import ArabicNeighborhood from './arabic';
import EnglishNeighborhood from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishNeighborhood />;
  else if (lang === 'ar') return <ArabicNeighborhood />;
  else return <EnglishNeighborhood />;
};

export default Home;
