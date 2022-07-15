const Tick = ({ width = '13', height = '10', viewBox = '0 0 13 10' }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.88601 9.45226C4.637 9.45226 4.38798 9.35797 4.19699 9.16698L0.490733 5.46072C0.111162 5.08115 0.111162 4.46465 0.490733 4.08508C0.870303 3.70551 1.4868 3.70551 1.86637 4.08508L4.88601 7.10472L10.9229 1.06544C11.3024 0.685869 11.9189 0.685869 12.2985 1.06544C12.6781 1.44501 12.6781 2.06151 12.2985 2.44108L5.57263 9.16698C5.38405 9.35555 5.13503 9.45226 4.88601 9.45226Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
export default Tick;