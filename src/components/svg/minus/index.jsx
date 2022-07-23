const Minus = ({
  width = '24',
  height = '24',
  viewBox = '0 0 24 24',
  fill = '#00000',
}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
      >
        <path fill={fill} d="M24 0h-10v-0h-4v0h-10v4h10v0h4v-10h10z"></path>
      </svg>
    </div>
  );
};
export default Minus;
