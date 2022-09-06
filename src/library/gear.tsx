import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Gear: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#64748B"
        d="M5.939 5.37a3.763 3.763 0 01-2.712 4.696l-1.099.272a10.777 10.777 0 00.012 3.4l1.015.244a3.763 3.763 0 012.728 4.723l-.35 1.187a9.936 9.936 0 002.792 1.734l.928-.976a3.763 3.763 0 015.454.001l.938.987a9.937 9.937 0 002.79-1.717l-.373-1.29a3.763 3.763 0 012.712-4.697l1.098-.271a10.774 10.774 0 00-.012-3.4l-1.014-.245a3.763 3.763 0 01-2.728-4.723l.35-1.186a9.929 9.929 0 00-2.792-1.735l-.928.976a3.762 3.762 0 01-5.454-.001l-.938-.987a9.932 9.932 0 00-2.79 1.717l.373 1.29zM12 14.822c-1.506 0-2.727-1.263-2.727-2.822 0-1.558 1.22-2.822 2.727-2.822 1.506 0 2.727 1.264 2.727 2.822 0 1.559-1.22 2.822-2.727 2.822z"
      ></path>
    </svg>
  );
};

export default Gear;
