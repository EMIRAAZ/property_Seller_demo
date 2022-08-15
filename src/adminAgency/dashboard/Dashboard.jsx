import './dashboard.scss';
import AddAgent from './addAgent/AddAgent';
import AddItem from './addItem/AddItem';
import PropertyList from './propertyList/PropertyList';
import MainComponent from '../maincomponent';

function Dashboard() {
  return (
    <MainComponent>
      <AddAgent />
      <AddItem />
      <PropertyList />
    </MainComponent>
  );
}

export default Dashboard;
