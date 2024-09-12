import type { ComponentProps, FC } from "react";

const FolderProviders: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4H5Z"
      clipRule="evenodd"
    />
    <path
      fill="#C084FC"
      d="M16.772 13.404c.267.958-.287 1.954-1.22 2.193l-.494.127a5.218 5.218 0 0 0 .005 1.587l.457.114c.942.236 1.502 1.241 1.227 2.205l-.157.555a4.45 4.45 0 0 0 1.256.81l.418-.456a1.651 1.651 0 0 1 2.454 0l.422.461a4.45 4.45 0 0 0 1.256-.802l-.168-.602c-.267-.958.287-1.954 1.22-2.193l.494-.127a5.217 5.217 0 0 0-.005-1.587l-.457-.114c-.941-.236-1.501-1.241-1.227-2.205l.158-.554a4.446 4.446 0 0 0-1.257-.81l-.417.455a1.651 1.651 0 0 1-2.455 0L17.86 12c-.46.193-.883.466-1.255.802l.167.602Zm2.728 4.414c-.678 0-1.227-.59-1.227-1.318 0-.728.55-1.318 1.227-1.318.678 0 1.227.59 1.227 1.318 0 .728-.55 1.318-1.227 1.318Z"
    />
  </svg>
);

export default FolderProviders;
