import { useLocation } from 'react-router-dom';
import ArabicAmenity from './arabic';
import EnglishAmenity from './english';

const Home = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishAmenity />;
  else if (lang === 'ar') return <ArabicAmenity />;
  else return <EnglishAmenity />;
};

export default Home;
