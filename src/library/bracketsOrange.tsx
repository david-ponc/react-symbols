import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const BracketsOrange: React.FC<SvgInterface> = (
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
        fill="#EA580C"
        d="M4.778 6.667A2.667 2.667 0 017.444 4a.889.889 0 010 1.778.889.889 0 00-.888.889v3.5c0 .701-.273 1.35-.73 1.833.457.483.73 1.132.73 1.832v3.501c0 .491.398.89.888.89a.889.889 0 010 1.777 2.667 2.667 0 01-2.666-2.667v-3.5a.889.889 0 00-.674-.863l-.43-.108a.889.889 0 010-1.724l.43-.108a.889.889 0 00.674-.862V6.667zm14.222 0A2.667 2.667 0 0016.333 4a.889.889 0 000 1.778c.491 0 .89.398.89.889v3.5c0 .701.272 1.35.729 1.833a2.664 2.664 0 00-.73 1.832v3.501a.889.889 0 01-.889.89.889.889 0 000 1.777A2.667 2.667 0 0019 17.333v-3.5c0-.408.278-.764.673-.863l.431-.108a.889.889 0 000-1.724l-.43-.108a.889.889 0 01-.674-.862V6.667z"
      ></path>
    </svg>
  );
};

export default BracketsOrange;
