import './movetotop.scss';
import MoveTop from '../svg/movetop';

export const MoveToTop = () => {
  return (
    <div
      className="move-to-top"
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
