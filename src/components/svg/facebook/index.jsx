const Facebook = ({
  width = '10',
  height = '21',
  viewBox = '0 0 10 21',

  fill = 'none',
  customClass,
  onClick,
}) => {
  return (
    <div className={customClass} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.15069 4.27556H9.96237V1.12021C9.64981 1.07721 8.57488 0.980469 7.32299 0.980469C4.7109 0.980469 2.92154 2.62347 2.92154 5.64321V8.42233H0.0390625V11.9498H2.92154V20.8254H6.4556V11.9506H9.22149L9.66056 8.42316H6.45477V5.99298C6.4556 4.97344 6.73012 4.27556 8.15069 4.27556Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
export default Facebook;
