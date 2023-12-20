import Input from '../../../components/tail/input';
import Button from '../../../components/button/SpinnerButton';
import Select from '../../../components/select/adminSelect';

export default function Form({ value, onChange, onSubmit }) {
  return (
    <div className="flex flex-col mt-10 w-1/2">
      <Input
        name="name"
        cls="pr-0"
        label="City"
        placeholder="eg: city"
        value={value.name}
        onChange={e => onChange('name', e.target.value)}
        required
      />
      <Button style={{ height: '40px', marginTop: '25px' }} onClick={onSubmit}>
        ADD
      </Button>
    </div>
  );
}
