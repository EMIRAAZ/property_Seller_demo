const ExpandIcon = ({
  className,
  width = '16',
  height = '24',
  viewbox = '0 0 16 24',
  fill = '#1c3988',
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox={viewbox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0906 0.301704L6.07908 4.54057L1.06754 0.301193C0.828605 0.0991464 0.442097 0.0991464 0.203162 0.301193C-0.0351687 0.50324 -0.0351687 0.830589 0.203162 1.03264L5.64661 5.63724C5.88494 5.83929 6.27206 5.83929 6.51039 5.63724L11.9538 1.03268C12.1922 0.830631 12.1922 0.502773 11.9538 0.300726C11.7161 0.0996568 11.3289 0.0996567 11.0906 0.301704Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
export default ExpandIcon;
