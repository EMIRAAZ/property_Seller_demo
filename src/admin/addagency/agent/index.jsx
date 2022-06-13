import './agent.scss';
import { useNavigate } from 'react-router-dom';

const Agent = props => {
  let navigate = useNavigate();

  return (
    <div className="admin-add-agency-agent">
      <div className="agent-details">
        <img src={props.agentImage} alt="agent-img" />
        <div className="agent-details-admin">
          <p>{props.agentName}</p>
          <p>{props.position}</p>
          <p>{props.yearsOfExperience}</p>
          <div className="agent-details-admin-service">
            <p onClick={() => navigate(`/admin/add-agent/${props.id}`)}>edit</p>
            <p>delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
