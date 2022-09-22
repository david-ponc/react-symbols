import { ComponentProps, FC } from 'react';

const Pug: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FED7AA"
      fillRule="evenodd"
      d="M18.727 9.217c0 .153.001.31.009.471.011.2.051.404.093.615.072.368.148.752.078 1.149-.06.389-.101.778-.143 1.16-.044.415-.088.822-.153 1.213-.047.303-.265.58-.48.854-.218.276-.433.55-.472.847-.203 1.592-1.796 2.326-5.542 2.326v.125h-.016v-.125c-3.746 0-5.4-.734-5.62-2.326-.038-.287-.265-.558-.496-.834-.234-.278-.47-.561-.518-.867-.065-.39-.109-.797-.153-1.213a25.751 25.751 0 00-.143-1.16c-.07-.396.006-.773.078-1.136.041-.209.082-.413.093-.612.009-.125.015-.247.02-.366.027-.535.05-1.01.293-1.445.749-1.296 2.716-2.045 6.462-2.045 3.746 0 5.62.75 6.369 2.03.239.393.24.842.241 1.34zm-6.285 2.353c.067-.018.095-.133.063-.258-.033-.125-.113-.213-.18-.196-.066.018-.095.133-.062.258.032.125.112.213.18.196zm-.113.282c-.123.025-.212.043-.212.068.009.035.013.09.017.153.004.05.007.105.014.16l.002.26c.004.375.01.918-.021 1.114.687.024 1.72.935 1.72 2.075v.063c-.015-1.109-1.326-2.014-1.748-2.014-.421 0-1.732.905-1.748 2.014v-.063c0-1.12 1.026-2.044 1.713-2.075-.043-.235-.043-1.03-.043-1.375 0-.066.006-.149.01-.214.004-.044.006-.08.006-.098 0-.04-.633-.204-.822-.252.158.04.622.148.713.096.093-.062.14-.25.14-.25s.031.188.156.25c.125.078.703-.11.703-.11-.167.112-.42.162-.6.198zm-1.164-.197l.052.013-.052-.013zm.664-.274c-.039.123-.123.207-.19.186-.065-.02-.087-.137-.049-.26.038-.124.123-.207.189-.187.066.02.088.137.05.26zm-1.226 1.367a.125.125 0 11-.25 0 .125.125 0 01.25 0zm-.718.749a.125.125 0 11-.25 0 .125.125 0 01.25 0zm-.36-.625a.125.125 0 100-.25.125.125 0 000 .25zm4.122-.124a.125.125 0 11-.25 0 .125.125 0 01.25 0zm.593.874a.125.125 0 100-.25.125.125 0 000 .25zm.359-.874a.125.125 0 11-.25 0 .125.125 0 01.25 0z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#18181B"
      fillRule="evenodd"
      d="M17.752 10.812a1.374 1.374 0 11-2.747 0 1.374 1.374 0 012.747 0zm-1.373-.609a.359.359 0 11-.718 0 .359.359 0 01.718 0z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#FED7AA"
      d="M14.287 10.75s1.233.842 1.904 1.67c.672.827.656.983.656.983l-.484.219s-.687-1.296-1.53-1.78c-.858-.484-.952-.89-.952-.89l.406-.203z"
    ></path>
    <path
      fill="#18181B"
      fillRule="evenodd"
      d="M9.151 10.812a1.374 1.374 0 11-2.747 0 1.374 1.374 0 012.747 0zm-.655-.609a.359.359 0 11-.718 0 .359.359 0 01.718 0z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#FED7AA"
      d="M9.776 10.75s-1.234.842-1.905 1.67c-.671.827-.655.983-.655.983l.483.219s.687-1.296 1.53-1.78.953-.89.953-.89l-.406-.203z"
    ></path>
    <path
      fill="#713F12"
      d="M15.926 6.254s1.81 1.514 2.341 3.262c.531 1.749.313 3.871.718 4.137.578.374 1.234-1.858 1.452-2.092.344-.374 1.483-1.327 1.561-1.498.078-.172-2.31-2.779-3.356-3.294-1.264-.593-2.825-.64-2.716-.515zM8.074 6.254s-1.81 1.514-2.341 3.262c-.531 1.749-.313 3.871-.718 4.137-.578.374-1.234-1.858-1.452-2.092-.344-.374-1.483-1.327-1.561-1.498-.078-.172 2.31-2.779 3.356-3.294 1.264-.593 2.825-.64 2.716-.515z"
    ></path>
    <path
      fill="#713F12"
      fillRule="evenodd"
      d="M15.723 12.888c-.535-.658-1.302-1.284-2.305-1.588-.105-.335-.602-.691-1.3-.691-.683.012-1.172.354-1.293.675-1.03.297-1.815.934-2.36 1.604-.725.884-.723 1.27-.72 2.046l.001.186c0 2.486.664 2.548 1.319 2.61.209.02.416.04.601.137.628.314 1.276.295 1.935.275.161-.004.323-.01.485-.01h.015c.153 0 .304.005.454.008.677.016 1.327.032 1.966-.288.185-.095.394-.11.603-.124.654-.047 1.317-.094 1.317-2.577l.002-.123c.016-.82.024-1.232-.72-2.14zm-3.28-1.318c.066-.018.094-.133.062-.258-.033-.125-.113-.213-.18-.196-.066.018-.095.133-.062.258.032.125.112.213.18.196zm-.114.282c-.123.025-.212.043-.212.068.009.035.013.09.017.153.004.05.007.105.014.16l.002.26c.004.375.01.918-.021 1.114.687.024 1.72.935 1.72 2.075v.063c-.015-1.109-1.326-2.014-1.748-2.014-.421 0-1.732.905-1.748 2.014v-.063c0-1.12 1.026-2.044 1.713-2.075-.043-.235-.043-1.03-.043-1.375 0-.066.006-.149.01-.214.004-.044.006-.08.006-.098 0-.04-.633-.204-.822-.252.158.04.622.148.713.096.093-.062.14-.25.14-.25s.031.188.156.25c.125.078.703-.11.703-.11-.167.112-.42.162-.6.198zm-1.164-.197l.052.013-.052-.013zm.664-.274c-.039.123-.123.207-.19.186-.065-.02-.087-.137-.049-.26.038-.124.123-.207.189-.187.066.02.088.137.05.26zm-1.226 1.367a.125.125 0 11-.25 0 .125.125 0 01.25 0zm-.718.749a.125.125 0 11-.25 0 .125.125 0 01.25 0zm-.36-.625a.125.125 0 100-.25.125.125 0 000 .25zm4.122-.124a.125.125 0 11-.25 0 .125.125 0 01.25 0zm.593.874a.125.125 0 100-.25.125.125 0 000 .25zm.359-.874a.125.125 0 11-.25 0 .125.125 0 01.25 0z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      d="M16.02 10.562a.359.359 0 100-.718.359.359 0 000 .718zM8.137 10.562a.359.359 0 100-.718.359.359 0 000 .718z"
    ></path>
  </svg>
);

export default Pug;
