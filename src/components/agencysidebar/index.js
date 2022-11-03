import './agencysidebar.scss';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Dashboard from '../svg/dashboard';
import Agent from '../svg/agent';
import Logout from '../svg/logout';
import ListAgent from '../svg/listagent';
import AddProperty from '../svg/addproperty';

const first = [
  { name: 'Dashboard', link: '/agency', logo: Dashboard },
  // { name: 'List Agent', link: '/agency/list-agent', logo: ListAgent },
  { name: 'Add Agent', link: '/agency/add-agent', logo: Agent },
  { name: 'Add Property', link: '/agency/add-property', logo: AddProperty },
  { name: ' List of Agents', link: '/agency/list-agent', logo: Agent },
];
const second = [{ name: 'Log Out', link: '', logo: Logout }];

const AgencySidebar = props => {
  return (
    <div className="agency-sidebar">
      <p className="agency-sidebar-header">UAE Assistant</p>
      <ul className="first-list">
        {first.map(item => (
          <RenderSingleList
            {...item}
            c={props.clrAgent}
            cU={props.clrUpload}
            cP={props.clrProperty}
          />
        ))}
      </ul>
      <hr />
      <ul className="second-list">
        {second.map(item => (
          <RenderSingleList
            {...item}
            c={props.clrAgent}
            cU={props.clrUpload}
            cP={props.clrProperty}
          />
        ))}
      </ul>
    </div>
  );
};

const RenderSingleList = ({ name, link, logo, c, cU, cP }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const getLink = () => location.pathname.split('/').pop();
  const onClick = () => {
    if (name === 'Log Out') {
      localStorage.clear();
      navigate('/agency/login');
    } else if (name === 'Add Agent') {
      c();
      cU();
      navigate(link);
    } else if (name === 'Add Property') {
      cP();
      cU();
      navigate(link);
    } else {
      navigate(link);
    }
  };

  return (
    <li
      className={getLink() === link.split('/').pop() ? 'active-li' : ''}
      onClick={onClick}
    >
      {logo ? React.createElement(logo, { className: 'logo-sidebar' }) : null}
      <p> {name}</p>
    </li>
  );
};

export default AgencySidebar;
