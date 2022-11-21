import Input from '../../../components/tail/input';
import Button from '../../../components/button/SpinnerButton';

export default function Form({ value, onchange }) {
  return (
    <div className="flex mt-10">
      <Input
        name="name"
        label="City"
        placeholder="eg: city"
        value={value.name}
        onchange={onchange}
        required
      />
      <Input
        name="emirate"
        label="Emirate"
        placeholder="eg: Duabi"
        value={value.emirate}
        required
      />
      <Button style={{ height: '40px', marginTop: '25px' }}>ADD</Button>
    </div>
  );
}
