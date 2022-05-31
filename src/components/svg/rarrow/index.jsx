const RarrowIcon = ({
  className,
  width = "9",
  height = "15",
  viewbox = "0 0 9 15",
  fill = "#1FA0E9",
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox={viewbox}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.115234 12.7871L5.40215 7.48859L0.115234 2.19013L1.74287 0.5625L8.66896 7.48859L1.74287 14.4147L0.115234 12.7871Z'
          fill={fill}
        />
      </svg>
    </div>
  );
};
export default RarrowIcon;
