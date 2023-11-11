export const TwitterIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M5.04876 5L12.7705 15.3417L5 23.75H6.74884L13.5519 16.3884L19.0486 23.75H25L16.8438 12.8266L24.0765 5H22.3277L16.0624 11.7799L11.0001 5H5.04876ZM7.62056 6.29031H10.3546L22.4278 22.4595H19.6937L7.62056 6.29031Z"
        fill={color ? color : "#F1F1F1"}
      />
    </svg>
  );
};
