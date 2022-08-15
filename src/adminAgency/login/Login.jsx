import './login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input/BasicInput';
import Button from '../../components/button/BasicButton';

const Login = props => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const navigateToAdmin = () => {
    navigate('/agency/');
  };

  const onInputChange = (e, key) => {
    setCredentials({ ...credentials, [key]: e.target.value });
  };

  const onButtonClick = () => {
    props.loginAgency(credentials, navigateToAdmin);
  };

  return (
    <div className="admin-agency-login">
      <div className="logo-wrapper">
        <span className="uaeassistant-logo">UAE Assistant</span>
      </div>
      <div className="login-div">
        <div className="text-div">
          <h1>Sign in to</h1>
          <h2>
            UAE Assistant <span>Admin</span>
          </h2>
          <p>
            If youre having problems logging in <br />
            You can <span> Contact Us !</span>
          </p>
        </div>
        <div className="input-div">
          <h1>Sign in </h1>

          <Input
            divClass="admin-login-input"
            placeholder="Username"
            customClass="input-class"
            onChange={e => onInputChange(e, 'username')}
          />
          <Input
            divClass="admin-login-input"
            placeholder="Password"
            customClass="input-class"
            type="password"
            onChange={e => onInputChange(e, 'password')}
          />

          <Button customClass="btn-cls" onClick={onButtonClick}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
