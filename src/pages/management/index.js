import { useLocation } from 'react-router-dom';
import ArabicManagement from './arabic/Management';
import EnglishManagement from './english/Management';

const Management = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishManagement />;
  else if (lang === 'ar') return <ArabicManagement />;
  else return <EnglishManagement />;
};

export default Management;
