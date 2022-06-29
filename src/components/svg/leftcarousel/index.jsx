const LeftCarousel = ({
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
        <g clipPath="url(#clip0_0_3226)">
          <circle cx="27.4936" cy="24.0932" r="23.9028" fill="white" />
          <path
            d="M33.2109 35.3127L23.5146 25.5952L33.2109 15.8777L30.2258 12.8926L17.5232 25.5952L30.2258 38.2978L33.2109 35.3127Z"
            fill="#1FA0E9"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_3226">
            <rect
              width="50.8104"
              height="50.8104"
              fill="white"
              transform="matrix(-1 0 0 1 51.3936 0.19043)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
export default LeftCarousel;
