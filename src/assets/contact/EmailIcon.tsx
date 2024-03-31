import React from "react";
import type { SVGProps } from "react";

export default function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" fillOpacity={0} d="M12 13L4 8V18H20V8L12 13Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="1s"
          dur="0.15s"
          values="0;0.3"
        ></animate>
      </path>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <rect
          width={18}
          height={14}
          x={3}
          y={5}
          strokeDasharray={64}
          strokeDashoffset={64}
          rx={1}
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          ></animate>
        </rect>
        <path
          strokeDasharray={24}
          strokeDashoffset={24}
          d="M3 6.5L12 12L21 6.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.4s"
            values="24;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
