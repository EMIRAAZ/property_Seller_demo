import { useLocation } from 'react-router-dom';
import ArabicPropertyView from './arabic';
import EnglishPropertyView from './english';

const PropertyView = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishPropertyView />;
  else if (lang === 'ar') return <ArabicPropertyView />;
  else return <EnglishPropertyView />;
};

export default PropertyView;
