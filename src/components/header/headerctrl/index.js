import HeaderSelect from '../../select/HeaderSelect';

export function HeaderCtrl() {
  return (
    <div className="flex-1">
      <HeaderSelect
        name="Language"
        options={[
          { name: 'Villas', type: 'Villa' },
          { name: 'Apartments', type: 'Apartment' },
          { name: 'Town House', type: 'Townhouse' },
          { name: 'Pent House', type: 'Penthouse' },
        ]}
      />
      <HeaderSelect
        name="Country"
        options={[
          { name: 'Villas', type: 'Villa' },
          { name: 'Apartments', type: 'Apartment' },
          { name: 'Town House', type: 'Townhouse' },
          { name: 'Pent House', type: 'Penthouse' },
        ]}
      />
    </div>
  );
}
