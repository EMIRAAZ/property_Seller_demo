const ShareIcon = ({
  className,
  width = "9",
  height = "15",
  viewbox = "0 0 9 15",
  fill = "#6565d6",
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
          d="M9.08008 8.87349C8.63674 8.87349 8.24008 9.04849 7.93675 9.32266L3.77758 6.90182C3.80674 6.76766 3.83008 6.63349 3.83008 6.49349C3.83008 6.35349 3.80674 6.21932 3.77758 6.08516L7.89008 3.68766C8.20508 3.97932 8.61924 4.16016 9.08008 4.16016C10.0484 4.16016 10.8301 3.37849 10.8301 2.41016C10.8301 1.44182 10.0484 0.660156 9.08008 0.660156C8.11174 0.660156 7.33008 1.44182 7.33008 2.41016C7.33008 2.55016 7.35341 2.68432 7.38258 2.81849L3.27008 5.21599C2.95508 4.92432 2.54091 4.74349 2.08008 4.74349C1.11174 4.74349 0.330078 5.52516 0.330078 6.49349C0.330078 7.46182 1.11174 8.24349 2.08008 8.24349C2.54091 8.24349 2.95508 8.06266 3.27008 7.77099L7.42341 10.1977C7.39424 10.3202 7.37674 10.4485 7.37674 10.5768C7.37674 11.516 8.14091 12.2802 9.08008 12.2802C10.0192 12.2802 10.7834 11.516 10.7834 10.5768C10.7834 9.63766 10.0192 8.87349 9.08008 8.87349Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
export default ShareIcon;
