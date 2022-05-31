import { useLocation } from 'react-router-dom';
import ArabicBlog from './arabic/Blog';
import EnglishBlog from './english/Blog';

const Blog = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishBlog />;
  else if (lang === 'ar') return <ArabicBlog />;
  else return <EnglishBlog />;
};

export default Blog;
