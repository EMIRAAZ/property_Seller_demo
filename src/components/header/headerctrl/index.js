import HeaderSelect from '../../select/HeaderCtrlSelect';
import { useLocation } from 'react-router-dom';

export function HeaderCtrl() {
  let location = useLocation();

  return (
    <div
      className="flex-1 justify-around sm:pt-2.5"
      style={{ color: location.pathname === '/' ? '#ffff' : '#000' }}
    >
      <HeaderSelect
        customClass="cursor-pointer sm:hidden -top-1"
        name="English"
        options={[
          {
            name: 'English',
            type: 'en',
          },
          {
            name: 'Arabic',
            type: 'ar',
          },
        ]}
      />

      <HeaderSelect
        customClass="mx-2 cursor-pointer sm:hidden"
        name="UAE"
        flag="AE"
        options={[
          {
            name: 'UAE',
            type: 'UAE',
            element: 'AE',
          },
          {
            name: 'SAUDI',
            type: 'SAUDI',
            element: 'SA',
          },
          {
            name: 'QATAR',
            type: 'QATAR',
            element: 'QA',
          },
          {
            name: 'BAHRAIN',
            type: 'BAHRAIN',
            element: 'BH',
          },
          {
            name: 'INDIA',
            type: 'INDIA',
            element: 'IN',
          },
          {
            name: 'GEORGIA',
            type: 'GEORGIA',
            element: 'GE',
          },
          {
            name: 'ISTABUL',
            type: 'ISTABUL',
            element: 'TR',
          },
        ]}
      />

      <span className="mx-2 cursor-pointer sm:hidden">Log in</span>
      <span
        className={`mx-2 border rounded-sm px-2 py-1 cursor-pointer ${
          location.pathname === '/' ? 'border-white' : 'border-black'
        } `}
      >
        Sign up
      </span>
    </div>
  );
}
