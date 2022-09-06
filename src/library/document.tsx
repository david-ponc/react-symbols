import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Document: React.FC<SvgInterface> = (
  props: SvgInterface
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#64748B"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-.375-.78l-5-4A1 1 0 0013 3H6z"
      ></path>
      <path
        stroke="#64748B"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v5h6"
      ></path>
    </svg>
  );
};

export default Document;
