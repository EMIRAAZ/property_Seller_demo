import { useLocation } from 'react-router-dom';
import ArabicNeighBourhood from './arabic/NeighBourhood';
import EnglisNeighBourhood from './english';

const NeighBourhood = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglisNeighBourhood />;
  else if (lang === 'ar') return <ArabicNeighBourhood />;
  else return <EnglisNeighBourhood />;
};

export default NeighBourhood;
