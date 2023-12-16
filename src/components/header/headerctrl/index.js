import HeaderSelect from '../../select/HeaderCtrlSelect';
import { useLocation, useNavigate } from 'react-router-dom';
import './headerctrl.scss';

export function HeaderCtrl() {
  let location = useLocation();
  let navigate = useNavigate();

  // const onChangeCountry = country => {
  //   if (country === 'INDIA') navigate('/india');
  // };

  return (
    <div
      className="headerctrl sm:pt-2.5 relative"
      style={{ color: location.pathname === '/' ? '#ffff' : '#000' }}
    >
      {/* <HeaderSelect
        customClass="cursor-pointer sm:hidden"
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
      /> */}

      {/* <HeaderSelect
        customClass=" cursor-pointer sm:hidden"
        txtcls="small-txt"
        txtcls2="mt-0.5"
        name="UAE"
        flag="AE"
        onClick={onChangeCountry}
        options={[
          {
            name: 'UAE',
            type: 'UAE',
            element: 'AE',
          },
          // {
          //   name: 'SAUDI',
          //   type: 'SAUDI',
          //   element: 'SA',
          // },
          // {
          //   name: 'QATAR',
          //   type: 'QATAR',
          //   element: 'QA',
          // },
          // {
          //   name: 'BAHRAIN',
          //   type: 'BAHRAIN',
          //   element: 'BH',
          // },
          {
            name: 'INDIA',
            type: 'INDIA',
            element: 'IN',
          },
          // {
          //   name: 'GEORGIA',
          //   type: 'GEORGIA',
          //   element: 'GE',
          // },
          // {
          //   name: 'TURKEY',
          //   type: 'TURKEY',
          //   element: 'TR',
          // },
        ]}
      /> */}

 <li className="sm:hidden " style={{cursor:"pointer"}} onClick={() => navigate("/sell")}>
              List&nbsp;Your&nbsp;Property
            </li>
      {/* <span className="cursor-pointer text-sm sm:border sm:rounded-sm sm:px-2 sm:py-0.5">
        Log in
      </span> */}
      {/* <span
        className={`mx-2 border rounded-sm px-2 py-1 cursor-pointer sm:hidden ${
          location.pathname === '/' ? 'border-white' : 'local-broder-purp'
        } `}
      >
        Sign up
      </span> */}
    </div>
  );
}
