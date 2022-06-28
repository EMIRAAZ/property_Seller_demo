import { useLocation } from 'react-router-dom';
import ArabicPropertylist from './arabic/PropertyList';
import EnglishPropertylist from './english/PropertyList';


const PropertyList = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishPropertylist/>;
  else if (lang === 'ar') return <ArabicPropertylist/>;
  else return <EnglishPropertylist />;
};

export default PropertyList;
