import './form.scss';
import Input from '../../../components/input/admininput';
import UploadImage from '../../../components/uploadimage';
import Button from '../../../components/button/SpinnerButton';

const Form = () => {
  return (
    <div className="agency-form-add-agency">
      <div className="add-left-agent-form">
        <Input
          divClass="agent-input"
          label="Agent Name"
          required
          //   value={agentValue.agentName}
          //   onChange={e => onChangeInput('agentName', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Position"
          required
          //   value={agentValue.position}
          //   onChange={e => onChangeInput('position', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="RERA"
          required
          //   value={agentValue.rera}
          //   onChange={e => onChangeInput('rera', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="ORN"
          required
          //   value={agentValue.orn}
          //   onChange={e => onChangeInput('orn', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Years Of Experience"
          required
          //   value={agentValue.yearsOfExperience}
          //   onChange={e => onChangeInput('yearsOfExperience', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Phone Number"
          required
          //   value={agentValue.phoneNumber}
          //   onChange={e => onChangeInput('phoneNumber', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Whatsapp Number"
          required
          //   value={agentValue.whatsAppNumber}
          //   onChange={e => onChangeInput('whatsAppNumber', e.target.value)}
        />
      </div>
      <div className="add-right-agent-form">
        <label className="property-image-label spinner-label">
          {/* Agent Image<span>*</span> {renderImageLoadingSpinner()} */}
        </label>
        <UploadImage
          //   editing={editing}
          linkIndex={0}
          customClass="agent-logo-img"
          onChangeImage={() => {}}
          //   value={agentValue.agentImage}
        />
        <Input
          divClass="agent-input"
          label="Languages"
          required
          //   value={agentValue.languages.toString()}
          //   onChange={e => onChangeInput('languages', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Username"
          required
          //   value={agentValue.username}
          //   onChange={e => onChangeInput('username', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Password"
          required
          //   value={editing ? '' : agentValue.password}
          //   onChange={e => onChangeInput('password', e.target.value)}
        />
        <div className="agency-control-btn">
          <Button
            customClass="add-agent-btn cancel"
            //   onClick={addAdminAgent}
            //   loading={env.loading}
          >
            CANCEL
          </Button>
          <Button
            customClass="add-agent-btn"
            //   onClick={addAdminAgent}
            //   loading={env.loading}
          >
            ADD AGENT
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Form;
