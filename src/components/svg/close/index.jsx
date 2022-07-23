const Close = ({
  className = '',
  width = '15',
  height = '15',
  viewBox = '0 0 15 15',
  onClick = () => {},
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        onClick={onClick}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3307 1.64956L12.9419 0.260742L7.43587 5.76678L1.92984 0.260742L0.541016 1.64956L6.04705 7.1556L0.541016 12.6616L1.92984 14.0505L7.43587 8.54442L12.9419 14.0505L14.3307 12.6616L8.82469 7.1556L14.3307 1.64956Z"
          fill="#3E88F1"
        />
      </svg>
    </div>
  );
};
export default Close;
