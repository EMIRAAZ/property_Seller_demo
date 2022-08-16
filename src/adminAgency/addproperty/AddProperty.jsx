import './addproperty.scss';
import MainComponent from '../maincomponent';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AgencyHeadTag from '../../components/agencyheadtag';
import Form from './form';

const AddAgent = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  useEffect(() => {
    props.getAgencyAgentProperty();
    props.getAgencyAmenityProperty();
    props.getAgencyNeighborhoodProperty();
    props.getAgencyTaglineProperty();
    if (getID() !== 'add-property') props.getAgencyPropertyById(getID());
  }, []);

  return (
    <MainComponent>
      <div className="agency-add-property">
        <AgencyHeadTag
          main="Add Property"
          sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Form
          addProperty={props.addAgencyProperty}
          editProperty={props.editAgencyProperty}
          env={props.env}
          editing={getID() !== 'add-property'}
          onChange={props.onInputChange}
          images={props.images}
          imgLoading={props.imgLoading}
          imgError={props.imgError}
          propertyValue={props.propertyValue}
          propertyOptions={props.propertyOptions}
          clear={props.clearUpload}
        />
      </div>
    </MainComponent>
  );
};

export default AddAgent;
