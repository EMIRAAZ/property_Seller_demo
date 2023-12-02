import { useLocation, useNavigate } from 'react-router-dom';

function India() {
  let navigate = useNavigate();

  return (
    <div style={{ marginTop: '200px' }}>
      <p className="flex justify-center  font-bold text-5xl sm:text-3xl">
        Coming Soon ...
      </p>
      <p className="flex justify-center mt-5">
        go back to &nbsp;
        <span
          className="underline cursor-pointer text-blue-600 visited:text-purple-600"
          onClick={() => navigate('/')}
        >
          propertySeller.uae
        </span>
      </p>
    </div>
  );
}

export default India;
