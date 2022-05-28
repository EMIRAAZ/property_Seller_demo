import { useLocation } from 'react-router-dom';
import ArabicLogin from './arabic/Login';
import EnglishLogin from './english';

const Login = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get('lang');

  if (lang === 'eng') return <EnglishLogin />;
  else if (lang === 'ar') return <ArabicLogin />;
  else return <EnglishLogin />;
};

export default Login;
