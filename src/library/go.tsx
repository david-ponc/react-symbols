import { ComponentProps, FC } from 'react';

const Go: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <g fill="#60A5FA" clipPath="url(#clip0_20558_611)">
      <path
        fillRule="evenodd"
        d="M1.878 9.794c-.046 0-.058-.023-.035-.058l.244-.313c.023-.035.081-.058.127-.058h4.14c.046 0 .058.035.034.07l-.197.301c-.023.035-.08.07-.116.07l-4.197-.012zM.128 10.86c-.047 0-.058-.022-.035-.057l.243-.313c.023-.035.081-.058.128-.058H5.75c.046 0 .07.035.058.07l-.093.278c-.012.046-.058.07-.104.07l-5.484.01zM2.933 11.928c-.046 0-.058-.035-.034-.07l.162-.29c.023-.035.07-.07.116-.07h2.319c.046 0 .07.035.07.082l-.024.278c0 .046-.046.081-.081.081l-2.528-.011zM14.968 9.585c-.73.186-1.229.325-1.948.51-.174.047-.185.059-.336-.115-.174-.197-.301-.325-.545-.44-.73-.36-1.438-.256-2.098.173-.789.51-1.195 1.264-1.183 2.203.012.928.65 1.693 1.565 1.82.789.105 1.45-.174 1.971-.765.104-.127.197-.267.313-.429H10.47c-.243 0-.3-.15-.22-.348.151-.36.43-.962.592-1.264a.313.313 0 01.29-.185h4.22c-.024.313-.024.626-.07.939-.127.835-.44 1.6-.95 2.273-.835 1.1-1.925 1.785-3.305 1.97-1.136.151-2.191-.07-3.119-.765-.858-.649-1.345-1.507-1.472-2.574-.151-1.263.22-2.4.985-3.397.823-1.078 1.913-1.762 3.247-2.006 1.09-.197 2.133-.07 3.072.569a3.634 3.634 0 011.345 1.634c.07.105.023.163-.116.197z"
        clipRule="evenodd"
      ></path>
      <path d="M18.806 15.997c-1.055-.023-2.018-.325-2.83-1.02a3.636 3.636 0 01-1.251-2.238c-.21-1.31.15-2.47.939-3.501.846-1.113 1.866-1.693 3.246-1.937 1.183-.208 2.296-.092 3.305.592.915.626 1.483 1.472 1.634 2.585.197 1.566-.255 2.84-1.333 3.93-.765.777-1.704 1.264-2.783 1.485-.313.058-.626.07-.927.104zm2.76-4.684c-.012-.15-.012-.267-.036-.383-.208-1.147-1.263-1.797-2.365-1.542-1.078.244-1.774.928-2.029 2.018-.209.904.232 1.82 1.067 2.191.638.278 1.275.244 1.89-.07.916-.475 1.414-1.217 1.472-2.214z"></path>
    </g>
    <defs>
      <clipPath id="clip0_20558_611">
        <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.336)"></path>
      </clipPath>
    </defs>
  </svg>
);

export default Go;
