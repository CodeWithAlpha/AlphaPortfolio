import React from "react";
import type { SVGProps } from "react";

export function Hamburger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
      ></path>
    </svg>
  );
}
