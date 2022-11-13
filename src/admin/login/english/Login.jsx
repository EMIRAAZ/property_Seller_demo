import './login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/input/BasicInput';
import Button from '../../../components/button/BasicButton';
import { TITLE } from '../../../utils/constants';

const Login = props => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const navigateToAdmin = () => {
    navigate('/admin/');
  };

  const onInputChange = (e, key) => {
    setCredentials({ ...credentials, [key]: e.target.value });
  };

  const onButtonClick = () => {
    props.loginAdmin(credentials, navigateToAdmin);
  };

  return (
    <div className="admin-login">
      <div className="logo-wrapper">
        <span className="admin-logo">ADMIN</span>
        <span className="uaeassistant-logo">{TITLE}</span>
      </div>
      <Input
        divClass="admin-login-input"
        placeholder="Username"
        onChange={e => onInputChange(e, 'username')}
      />
      <Input
        divClass="admin-login-input"
        placeholder="Password"
        type="password"
        onChange={e => onInputChange(e, 'password')}
      />

      <Button onClick={onButtonClick}>Log In</Button>
    </div>
  );
};

export default Login;
