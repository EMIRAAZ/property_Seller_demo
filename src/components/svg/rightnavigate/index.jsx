const RightNavigate = ({ customClass, onClick }) => {
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
            d="M10.2887 6.84314C10.6359 7.19027 10.6359 7.75309 10.2887 8.10022L4.63188 13.7571C4.28475 14.1042 3.72194 14.1042 3.3748 13.7571C3.02767 13.4099 3.02767 12.8471 3.37481 12.5L8.40312 7.47168L3.37481 2.44337C3.02767 2.09624 3.02767 1.53342 3.37481 1.18629C3.72194 0.839158 4.28475 0.839158 4.63188 1.18629L10.2887 6.84314ZM0.898438 6.58279L9.66019 6.58279L9.66019 8.36057L0.898437 8.36057L0.898438 6.58279Z"
            fill="#282828"
          />
        </svg>
      </svg>
    </div>
  );
};
export default RightNavigate;
