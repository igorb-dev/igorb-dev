import * as React from "react"
const SvgComponent = (props, color) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M11.293 2.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L13 5.414V21a1 1 0 1 1-2 0V5.414L6.707 9.707a1 1 0 0 1-1.414-1.414l6-6Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
