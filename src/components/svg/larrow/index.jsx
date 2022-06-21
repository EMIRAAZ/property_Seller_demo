const LarrowIcon = ({
  className,
  width = "9",
  height = "15",
  viewbox = "0 0 9 15",
  fill = "#1FA0E9",
  onClick,
}) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox={viewbox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.38281 12.7871L4.09589 7.48859L9.38281 2.19013L7.75518 0.5625L0.829087 7.48859L7.75518 14.4147L9.38281 12.7871Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
export default LarrowIcon;
