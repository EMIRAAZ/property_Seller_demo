import './dashboard.scss';
import AddAgent from './addAgent/AddAgent';
import AddItem from './addItem';
import PropertyList from './propertyList';
import MainComponent from '../maincomponent';

function Dashboard(props) {
  return (
    <MainComponent>
      <AddAgent clr={props.clearAddAgent} clrUpload={props.clearUpload} />
      <AddItem />
      <PropertyList />
    </MainComponent>
  );
}

export default Dashboard;
