import * as React from "react";
const TinyLoad = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "0 0",
      display: "block",
    }}
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g transform="matrix(.7 0 0 .7 50 50)">
      <circle r={50} fill="#34bf49" />
      <circle cy={-28} r={15} fill="#fff">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 0 0;360 0 0"
        />
      </circle>
    </g>
  </svg>
);
export default TinyLoad;
