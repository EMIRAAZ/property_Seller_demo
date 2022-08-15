import './maincomponent.scss';
import Navbar from './navbar/Navbar';
import AgencySidebar from '../../components/agencysidebar';

function MainComponent({ children }) {
  return (
    <div className="admin-agency-home">
      <div className="side-nav-div">
        <AgencySidebar />
      </div>
      <div className="main-div">
        <Navbar />
        <div className="add-div">{children}</div>
      </div>
    </div>
  );
}

export default MainComponent;
