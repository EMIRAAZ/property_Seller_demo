import './addagent.scss';
import MainComponent from '../maincomponent';
import AgencyHeadTag from '../../components/agencyheadtag';
import Form from './form';

const AddAgent = () => {
  return (
    <MainComponent>
      <div className="agency-add-agent">
        <AgencyHeadTag
          main="Add Agent"
          sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Form />
      </div>
    </MainComponent>
  );
};

export default AddAgent;
