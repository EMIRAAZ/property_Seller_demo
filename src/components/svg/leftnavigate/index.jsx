const LeftNavigate = ({ customClass, onClick }) => {
  return (
    <div className={customClass} onClick={onClick}>
      <svg
        width="28"
        height="29"
        viewBox="0 0 28 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.9"
          cx="14.2801"
          cy="14.4715"
          r="12.3569"
          stroke="#282828"
          strokeWidth="2.66666"
        />
        <svg
          width="28"
          height="23"
          viewBox="0 -4 11 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M0.367516 6.84314C0.0203838 7.19027 0.0203839 7.75309 0.367517 8.10022L6.02437 13.7571C6.3715 14.1042 6.93431 14.1042 7.28145 13.7571C7.62858 13.4099 7.62858 12.8471 7.28144 12.5L2.25313 7.47168L7.28144 2.44337C7.62858 2.09624 7.62858 1.53342 7.28144 1.18629C6.93431 0.839158 6.3715 0.839158 6.02437 1.18629L0.367516 6.84314ZM9.75781 6.58279L0.996056 6.58279L0.996056 8.36057L9.75781 8.36057L9.75781 6.58279Z"
            fill="#282828"
          />
        </svg>
      </svg>
    </div>
  );
};
export default LeftNavigate;
