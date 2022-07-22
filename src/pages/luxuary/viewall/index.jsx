import './viewall.scss';
import BasicButton from '../../../components/button/BasicButton';
import { useState } from 'react';

const ViewAll = ({ count, getApi, limit = 6 }) => {
  const [current, setCurrent] = useState(1);

  const setCurrentPage = () => {
    if (current * limit < count) {
      setCurrent(current + 1);
      onChangeCurrentPage(current + 1);
    }
  };
  const onChangeCurrentPage = current => {
    const offset = limit * current - limit > 0 ? limit * current - limit : 0;
    getApi(`limit=${limit}&offset=${offset}`);
  };

  return (
    <div className="view-btn-class-luxury">
      <div className="container">
        <BasicButton customClass="view-all-home-btn" onClick={setCurrentPage}>
          View All Properties
        </BasicButton>
      </div>
    </div>
  );
};

export default ViewAll;
