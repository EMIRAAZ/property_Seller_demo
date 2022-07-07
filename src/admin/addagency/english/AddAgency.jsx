import './addagency.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../../../components/adminheader';
import AgencyHeader from '../agencyheader';
import AddForm from '../addform';

const AddAgency = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  useEffect(() => {
    if (getID() !== 'add-agency') {
      props.getAdminAgencyById(getID());
      props.getAdminAgentByAgency(getID());
    }
  }, []);
  return (
    <div className="admin-add-agency">
      <AdminHeader />
      <div className="admin-add-agency-container">
        <AgencyHeader />
        <AddForm
          addAgency={props.addAdminAgency}
          editAgency={props.editAdminAgency}
          env={props.env}
          editing={getID() !== 'add-agency'}
          onChange={props.onInputChange}
          images={props.images}
          imgLoading={props.imgLoading}
          imgError={props.imgError}
          agencyValue={props.agencyValue}
          agentValue={props.agentValue}
          agencyOptions={props.agencyOptions}
          deleteAgent={props.deleteAdminAgent}
          getAgentAgency={props.getAdminAgentByAgency}
          clearAgency={props.clearAgency}
        />
      </div>
    </div>
  );
};

export default AddAgency;
