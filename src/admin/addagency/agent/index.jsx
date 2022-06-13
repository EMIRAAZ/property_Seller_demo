import './agent.scss';

const Agent = props => {
  return (
    <div className="admin-add-agency-agent">
      <div className="agent-details">
        <img src="/assets/image/noimage.jpg" alt="agent-img" />
        <div className="agent-details-admin">
          <p>New Agent</p>
          <p>Sales Manager</p>
          <p>3.4 yrs experience</p>
          <div className="agent-details-admin-service">
            <p>edit</p>
            <p>delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
