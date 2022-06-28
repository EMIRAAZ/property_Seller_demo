import { useLocation } from 'react-router-dom';
import ArabicNewsTopics from './arabic';
import EnglishNewsTopics from './english';

const NewsTopics = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishNewsTopics />;
  else if (lang === 'ar') return <ArabicNewsTopics />;
  else return <EnglishNewsTopics />;
};

export default NewsTopics;
