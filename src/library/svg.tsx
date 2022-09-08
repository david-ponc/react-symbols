import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const SVG: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path stroke="#52525B" strokeWidth="1.5" d="M5 5H19V19H5z"></path>
      <rect width="4" height="4" x="3" y="3" fill="#F472B6" rx="1"></rect>
      <rect width="4" height="4" x="17" y="3" fill="#F472B6" rx="1"></rect>
      <rect width="4" height="4" x="17" y="17" fill="#F472B6" rx="1"></rect>
      <rect width="4" height="4" x="3" y="17" fill="#F472B6" rx="1"></rect>
    </svg>
  );
};

export default SVG;
