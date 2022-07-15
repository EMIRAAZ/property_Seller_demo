const Favourite = (
  { width = '12', height = '10', viewbox = '0 0 12 10' },
  fill = '#979797'
) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox={viewbox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.18658 0.336965C7.37326 0.337681 6.59352 0.661347 6.01878 1.2368C5.73495 0.947982 5.39674 0.718214 5.02366 0.560752C4.65059 0.403291 4.25003 0.321252 3.84509 0.319369C3.44015 0.317486 3.03884 0.395795 2.66432 0.54978C2.28979 0.703765 1.94946 0.930378 1.66295 1.21655C1.37644 1.50272 1.14943 1.84278 0.995004 2.21712C0.840578 2.59147 0.761796 2.99268 0.763202 3.39762C0.764608 3.80256 0.846174 4.20322 1.0032 4.57648C1.16022 4.94974 1.38959 5.28822 1.67808 5.5724L6.01878 9.9131L10.3595 5.5724C10.7883 5.14308 11.0801 4.59626 11.1981 4.00107C11.3161 3.40589 11.2549 2.78908 11.0223 2.22867C10.7897 1.66826 10.3961 1.18941 9.89138 0.852684C9.38662 0.51596 8.79334 0.336487 8.18658 0.336965ZM9.63348 4.8515L6.01878 8.4662L2.40408 4.8515C2.21407 4.66149 2.06335 4.43592 1.96052 4.18766C1.85768 3.9394 1.80476 3.67332 1.80476 3.4046C1.80476 3.13589 1.85768 2.8698 1.96052 2.62154C2.06335 2.37328 2.21407 2.14771 2.40408 1.9577C2.59409 1.76769 2.81967 1.61697 3.06793 1.51413C3.31619 1.4113 3.58227 1.35837 3.85098 1.35837C4.1197 1.35837 4.38578 1.4113 4.63404 1.51413C4.8823 1.61697 5.10788 1.76769 5.29789 1.9577L6.01878 2.68371L6.73968 1.96281C7.12957 1.59087 7.64773 1.38337 8.18658 1.38337C8.72543 1.38337 9.24358 1.59087 9.63348 1.96281C9.82362 2.15275 9.97447 2.3783 10.0774 2.62657C10.1803 2.87484 10.2333 3.14096 10.2333 3.40971C10.2333 3.67847 10.1803 3.94459 10.0774 4.19286C9.97447 4.44113 9.82362 4.66668 9.63348 4.85662V4.8515Z"
          fill="#979797"
        />
      </svg>
    </div>
  );
};
export default Favourite;