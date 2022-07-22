import './movetotop.scss';
import { useState } from 'react';
import MoveTop from '../svg/movetop';

export const MoveToTop = () => {
  const [scroll, setScroll] = useState(0);
  window.addEventListener('scroll', event => {
    let scrollY = window.scrollY;
    setScroll(scrollY);
  });
  return (
    <div
      className={`move-to-top ${scroll > 0 ? 'show-move' : 'hide-move'}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <MoveTop />
    </div>
  );
};

const MoveToTopComponent = () => {
  return (
    <div className="move-to-top-component">
      <div
        className="move-top-btn"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <MoveTop />
      </div>
    </div>
  );
};

export default MoveToTopComponent;
