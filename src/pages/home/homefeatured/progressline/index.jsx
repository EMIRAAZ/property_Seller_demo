import './progressline.scss';

const ProgressLine = ({ width = 2 }) => {
  const calcWidth = () => 100 / width;
  return (
    <div className="progress-line">
      <hr className="base" />
      <hr className="progress" style={{ width: `${calcWidth()}%` }} />
    </div>
  );
};

export default ProgressLine;
