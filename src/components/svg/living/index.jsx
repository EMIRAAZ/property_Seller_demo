const Living = ({
  customClass,
  width = "17",
  height = "17",
  viewBox = "0 0 17 17",
  fill = "#6565d6",
}) => {
  return (
    <div className={`${customClass}`}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_821)">
          <path
            d="M14.5625 5.57031V12.1328H7V5.57031C5.96613 5.57031 5.125 6.41144 5.125 7.44531V14.9453H6.0625V14.0078H15.5V14.9453H16.4375V7.44531C16.4375 6.41144 15.5964 5.57031 14.5625 5.57031Z"
            fill={fill}
          />
          <path d="M1.375 11.1953H0.4375V14.9453H1.375V11.1953Z" fill={fill} />
          <path d="M4.1875 11.1953H3.25V14.9453H4.1875V11.1953Z" fill={fill} />
          <path
            d="M2.78125 8.38281V7.44531H1.84375V8.38281H0.4375V10.2578H4.1875V8.38281H2.78125Z"
            fill={fill}
          />
          <path
            d="M3.86125 2.75781H0.76375L0.4375 5.98416V6.50781H4.1875V5.98416L3.86125 2.75781Z"
            fill={fill}
          />
          <path
            d="M12.6875 9.32031H8.875C8.35806 9.32031 7.9375 9.74088 7.9375 10.2578V11.1953H13.625V10.2578C13.625 9.74088 13.2044 9.32031 12.6875 9.32031Z"
            fill={fill}
          />
          <path
            d="M12.6875 3.69531H8.875C8.35806 3.69531 7.9375 4.11588 7.9375 4.63281V8.63506C8.21353 8.47497 8.53359 8.38281 8.875 8.38281H12.6875C13.0289 8.38281 13.349 8.47497 13.625 8.63506V4.63281C13.625 4.11588 13.2044 3.69531 12.6875 3.69531Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_821">
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
export default Living;
