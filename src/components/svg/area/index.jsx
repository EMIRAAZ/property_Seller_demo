const Area = ({
  customClass,
  width = '17',
  height = '17',
  viewBox = '0 0 17 17',
  fill = '#1FA0E9',
}) => {
  return (
    <div className={`${customClass}`}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_846)">
          <path
            d="M15.3786 0.851562H4.44929C3.88859 0.851562 3.43359 1.30635 3.43359 1.86753V2.8249H4.49976V1.91773H15.3281V12.7459H14.5093V13.812H15.3786C15.9393 13.812 16.3943 13.3573 16.3943 12.7961V1.86753C16.3943 1.30635 15.9393 0.851562 15.3786 0.851562Z"
            fill={fill}
          />
          <path
            d="M12.4274 3.89062H1.49804C0.937418 3.89062 0.482422 4.34534 0.482422 4.9066V15.8351C0.482422 16.3964 0.937418 16.8511 1.49804 16.8511H12.4274C12.9881 16.8511 13.4431 16.3964 13.4431 15.8351V4.9066C13.4431 4.34534 12.9881 3.89062 12.4274 3.89062ZM12.377 15.7849H1.54859V4.95683H12.3769V15.7849H12.377Z"
            fill={fill}
          />
          <path
            d="M2.37479 15.1323L4.84132 15.1331C4.91322 15.1331 4.97828 15.0896 5.00584 15.0232C5.03346 14.9569 5.01787 14.8803 4.96736 14.8293L4.11147 13.9732L10.5523 7.49774L11.4076 8.35334C11.4586 8.4041 11.5352 8.41945 11.6013 8.39182C11.6679 8.36426 11.7112 8.29941 11.7112 8.22759L11.7117 5.76158C11.7117 5.66345 11.632 5.58381 11.5337 5.58381L9.06763 5.58301C8.99573 5.58301 8.93067 5.62644 8.90311 5.69286C8.87548 5.75921 8.89062 5.83574 8.94162 5.88675L9.79849 6.74392L3.35766 13.2193L2.50076 12.3627C2.44972 12.3119 2.37371 12.2966 2.30705 12.3242C2.24042 12.3518 2.19727 12.4166 2.19727 12.4884V14.9545C2.1973 15.0526 2.27694 15.1323 2.37479 15.1323Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_846">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.4375 0.851562)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
export default Area;
