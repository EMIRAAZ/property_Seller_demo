const DownArrow = ({ fill = '#02101C', className = '' }) => {
  return (
    <div className={`down-arrow ${className}`}>
      <svg
        width="10"
        height="8"
        viewBox="0 0 9 5"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.886719 0.181641L4.10468 5.20937L7.32263 0.181641H0.886719Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
export default DownArrow;
