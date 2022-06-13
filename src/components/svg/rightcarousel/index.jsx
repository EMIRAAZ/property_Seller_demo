const RightCarousel = ({
  customClass,
  width = '32',
  height = '51',
  viewBox = '0 0 52 51',
  onClick,
}) => {
  return (
    <div onClick={onClick} className={customClass}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_0_3222)">
          <circle cx="27.1616" cy="24.0932" r="23.9028" fill="white" />
          <path
            d="M19.3193 33.8107L29.0157 24.0932L19.3193 14.3757L22.3044 11.3906L35.007 24.0932L22.3044 36.7958L19.3193 33.8107Z"
            fill="#1FA0E9"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_3222">
            <rect
              width="50.8104"
              height="50.8104"
              fill="white"
              transform="translate(0.255859 0.19043)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
export default RightCarousel;
