const Logout = ({
  className = '',
  width = '18',
  height = '17',
  viewBox = '0 0 18 17',
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4677 3.81464L12.2277 5.05461L14.4966 7.33229H5.55296V9.09111H14.4966L12.2277 11.36L13.4677 12.6088L17.8647 8.2117L13.4677 3.81464ZM2.03531 2.05582H9.07061V0.296997H2.03531C1.06796 0.296997 0.276489 1.08847 0.276489 2.05582V14.3676C0.276489 15.3349 1.06796 16.1264 2.03531 16.1264H9.07061V14.3676H2.03531V2.05582Z"
          fill="#000000"
        />
      </svg>
    </div>
  );
};
export default Logout;
