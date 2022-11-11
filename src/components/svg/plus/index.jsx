const Plus = ({
  width = '24',
  height = '24',
  viewBox = '0 0 24 24',
  className = '',
  fill = '#00000',
  onClick = () => {
    console.log('clicked');
  },
}) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
      >
        <path fill={fill} d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
      </svg>
    </div>
  );
};
export default Plus;
