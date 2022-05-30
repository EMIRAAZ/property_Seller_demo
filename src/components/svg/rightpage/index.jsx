const RightPage = ({ customClass, onClick }) => {
  return (
    <div className={customClass} onClick={onClick}>
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.38045 8.49423C9.41547 8.53821 9.42513 8.54834 9.45512 8.59574C9.68154 8.94634 9.65985 9.43811 9.3902 9.76974C9.35522 9.81275 9.34439 9.82169 9.30524 9.86177L2.06676 16.7614C1.82823 16.9749 1.50182 17.0774 1.19621 17.0206C0.743382 16.9383 0.379478 16.5101 0.376489 16.0447C0.374944 15.814 0.455434 15.584 0.601153 15.4064C0.636858 15.3627 0.646992 15.353 0.686837 15.3137L7.20147 9.10404L0.991145 2.58868L0.949125 2.5417C0.605907 2.10626 0.677482 1.42188 1.12103 1.09442C1.47458 0.833409 2.0041 0.84398 2.34681 1.1238C2.38982 1.15878 2.39876 1.16961 2.43884 1.20876L9.33913 8.44797C9.35289 8.46386 9.36738 8.47906 9.38045 8.49423ZM17.864 8.69828C17.8983 8.74154 17.908 8.75168 17.9387 8.79839C18.1651 9.14898 18.1441 9.64147 17.8738 9.97238C17.8381 10.0161 17.8272 10.025 17.7881 10.0651L10.5496 16.9647C10.3118 17.1776 9.98539 17.2801 9.67974 17.2247C9.22692 17.1424 8.86301 16.7142 8.85933 16.248C8.85779 16.0174 8.93897 15.788 9.08472 15.609C9.1197 15.566 9.13053 15.5571 9.16968 15.517L15.6843 9.30737L9.47468 2.79274L9.43266 2.74575C9.39764 2.70177 9.3887 2.69095 9.358 2.64423C9.05452 2.17367 9.24156 1.45246 9.76535 1.20048C10.1431 1.01997 10.6177 1.11198 10.9224 1.41282L17.822 8.6513C17.8365 8.6665 17.8502 8.68239 17.864 8.69828Z"
          fill="#1FA0E9"
        />
      </svg>
    </div>
  );
};
export default RightPage;