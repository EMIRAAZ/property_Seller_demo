import './pagination.scss';
import RightPage from '../svg/rightpage';
import { useState } from 'react';

const Pagination = ({ totalPages = 10 }) => {
  const [currentState, setCurrentState] = useState(5);

  const onArrowClick = type => {
    if (type === 'right') {
      setCurrentState(currentState + 5);
    } else setCurrentState(currentState - 5);
  };
  const renderPageNumber = () => {
    let count = 0;
    const page = [];
    for (let i = currentState - 4; i <= totalPages && count < 5; i++) {
      count++;
      page.push(<p>{i}</p>);
    }
    return page;
  };

  const addRightDisable = () => {
    if (currentState >= totalPages) return true;
    else return false;
  };
  const addLeftDisable = () => {
    if (currentState === 5) return true;
    else return false;
  };

  return (
    <div className="pagination-component">
      <RightPage
        customClass={`mirror arrow ${addLeftDisable() ? 'disabled' : ''}`}
        onClick={() => onArrowClick('left')}
      />
      {renderPageNumber()}
      <RightPage
        customClass={`arrow ${addRightDisable() ? 'disabled' : ''}`}
        onClick={() => onArrowClick('right')}
      />
    </div>
  );
};

export default Pagination;
