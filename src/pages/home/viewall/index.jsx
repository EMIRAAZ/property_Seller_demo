import './viewall.scss';
import BasicButton from '../../../components/button/BasicButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewAll = ({
  count,
  getApi,
  limit = 6,
  goToOtherPage = false,
  link = '',
}) => {
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();

  const setCurrentPage = () => {
    if (goToOtherPage) {
      navigate(link);
    } else if (current * limit < count) {
      setCurrent(current + 1);
      onChangeCurrentPage(current + 1);
    }
  };
  const onChangeCurrentPage = current => {
    const offset = limit * current - limit > 0 ? limit * current - limit : 0;
    getApi(`limit=${limit}&offset=${offset}`);
  };

  return (
    <div className="view-btn-class">
      <div className="container">
        <BasicButton customClass="view-all-home-btn" onClick={setCurrentPage}>
          View All Properties
        </BasicButton>
      </div>
    </div>
  );
};

export default ViewAll;
