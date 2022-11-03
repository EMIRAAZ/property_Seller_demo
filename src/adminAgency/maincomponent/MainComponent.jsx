import './maincomponent.scss';
import Navbar from './navbar/Navbar';
import AgencySidebar from '../../components/agencysidebar';

function MainComponent({
  active,
  children,
  clrAddAgent,
  clrUpload,
  clrProperty,
}) {
  return (
    <div className="admin-agency-home">
      <div className="side-nav-div">
        <AgencySidebar
          active={active}
          clrAgent={clrAddAgent}
          clrUpload={clrUpload}
          clrProperty={clrProperty}
        />
      </div>
      <div className="main-div">
        <Navbar />
        <div className="add-div">{children}</div>
      </div>
    </div>
  );
}

export default MainComponent;
