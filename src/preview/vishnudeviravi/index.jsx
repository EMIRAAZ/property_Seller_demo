import './index.scss';
import ChipSelect from '../../components/select/ChipSelect';

const Preview = () => {
  return (
    <>
      <ChipSelect
        options={[
          { name: 'Apartment', value: 'Apartment' },
          { name: 'Villa', value: 'Villa' },
          { name: 'Townhouse', value: 'Townhouse' },
          { name: 'Penthouse', value: 'Penthouse' },
          { name: 'Compound', value: 'Compound' },
          { name: 'Duplex', value: 'Duplex' },
          { name: 'Full Floor', value: 'Full Floor' },
          { name: 'Half Floor', value: 'Half Floor' },
          { name: 'Whole Building', value: 'Whole Building' },
          { name: 'Land', value: 'Land' },
          { name: 'Bulk Sale Unit', value: 'Bulk Sale Unit' },
          { name: 'Bungalow', value: 'Bungalow' },
          { name: 'Hotel & Hotel Apartment', value: 'Hotel & Hotel Apartment' },
        ]}
      />
    </>
  );
};

export default Preview;
