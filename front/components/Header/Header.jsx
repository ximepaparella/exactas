import * as React from "react";
import Grid from "@mui/material/Grid";

import styles from "./Header.module.scss";

const Header = ({ ...r }) => {
  return (
    <header className={styles["header"]}>
      <Grid container spacing={0} justifyContent="center">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: "#ffffff00" }}
            viewBox="0 0 304 77"
            width="250"
            height="auto"
          >
            <path
              fill="#00688c"
              d="M139.385 26.546c.158-.84.34-1.65.547-2.43.884-3.416 2.16-6.27 3.825-8.52 1.645-2.25 3.681-3.957 6.067-5.082s5.06-1.687 8.041-1.687c2.468 0 4.73.374 6.787 1.124 2.057.75 3.805 1.875 5.265 3.417 1.46 1.54 2.612 3.478 3.435 5.853.697 2.013 1.097 4.323 1.203 6.934h9.507c-.127-3.9-.775-7.34-1.95-10.35-1.315-3.354-3.166-6.145-5.51-8.353-2.345-2.208-5.122-3.875-8.33-4.979-3.208-1.083-6.664-1.645-10.407-1.645-4.524 0-8.576.791-12.154 2.354-3.579 1.583-6.623 3.937-9.111 7.103-2.488 3.166-4.401 7.123-5.738 11.873a46.786 46.786 0 00-1 4.388h9.523zm17.925 50.27c1.417 0 2.785-.088 4.1-.267 2.794-.353 5.36-1.052 7.705-2.087 3.537-1.562 6.499-3.937 8.905-7.103 2.427-3.166 4.257-7.103 5.512-11.852.189-.712.145-1.526-.07-2.394.398-1.391.625-2.293.625-2.293V35.882l-3.763-.002v-.227h-11.847v7.999h6.115l-.006 2.856c0 3.965-.443 7.784-1.318 10.984-.669 1.727-1.476 3.253-2.425 4.576-3.146 4.412-7.658 6.663-13.533 6.75h-.35c-5.876-.086-10.386-2.337-13.532-6.75-1.636-2.279-2.852-5.155-3.656-8.632h-9.528c.153.707.316 1.397.495 2.07 1.254 4.75 3.085 8.687 5.511 11.853 2.407 3.166 5.368 5.54 8.906 7.103 3.43 1.516 7.346 2.308 11.745 2.354h.41zm-88.083-23.38l-.002 22.047h9.296l-.002-22.047h-9.292zm28.587-17.735l-3.505.014 3.544 7.773 13.43 31.995h10.283l-14.499-33.516c4.031-1.375 7.178-3.687 9.42-6.936 2.241-3.229 3.372-7.062 3.372-11.52 0-2.957-.452-5.644-1.357-8.06a16.539 16.539 0 00-4.093-6.229c-1.81-1.728-4.072-3.082-6.766-4.04-2.694-.959-5.8-1.459-9.317-1.459h-29.1l.001 22.823h9.292l.002-15.053h19.435c3.97 0 6.993 1.062 9.09 3.187 2.098 2.125 3.147 5.04 3.147 8.748 0 1.834-.308 3.52-.884 5.041-.576 1.52-1.399 2.812-2.468 3.896-1.07 1.083-2.345 1.895-3.846 2.478-1.522.584-3.33.858-5.181.858zM5.74 53.436c1.173 5.702 3.13 10.35 5.879 13.944 4.792 6.29 11.866 9.436 21.245 9.436 3.66 0 7.033-.563 10.118-1.625 3.085-1.083 5.738-2.75 7.96-5 2.22-2.249 3.968-5.082 5.223-8.498.89-2.422 1.468-5.179 1.73-8.257H48.63c-.188 1.653-.495 3.169-.918 4.55-.76 2.416-1.83 4.436-3.208 6.04-1.399 1.604-3.064 2.812-5.039 3.604-1.974.791-4.175 1.187-6.602 1.187-6.354 0-11.064-2.229-14.128-6.728-1.558-2.276-2.714-5.159-3.478-8.653H5.742zm5.879-43.151c-3.112 4.081-5.21 9.503-6.303 16.261h9.507c.722-4.53 2.026-8.181 3.912-10.95 3.064-4.499 7.774-6.77 14.128-6.77 2.345 0 4.505.417 6.438 1.23a13.344 13.344 0 014.977 3.666c1.357 1.624 2.406 3.666 3.146 6.124.594 1.97.948 4.206 1.066 6.7h9.528c-.152-3.872-.772-7.283-1.853-10.262-1.255-3.458-3.003-6.312-5.224-8.603-2.221-2.291-4.874-4-7.959-5.145C39.898 1.41 36.525.828 32.865.828c-9.379 0-16.453 3.166-21.245 9.457z"
            ></path>
            <path fill="#ff3cac" d="M0 30.157h19.744v19.997H0z"></path>
            <path
              fill="#ffd50b"
              d="M63.179 30.157h19.744v19.997H63.179z"
            ></path>
            <path
              fill="#08bebe"
              d="M125.042 30.157h19.744v19.997h-19.744z"
            ></path>
            <path
              fill="#00668c"
              d="M210.146 24.902c2.103 0 3.773-.603 5.009-1.844 1.236-1.24 1.862-3.069 1.862-5.517h-2.504c0 1.71-.402 3.018-1.172 3.89-.77.89-1.847 1.325-3.195 1.325-1.734 0-3.018-.604-3.853-1.81-.85-1.208-1.268-3.053-1.268-5.5V13.97c0-2.449.417-4.276 1.268-5.484.835-1.207 2.12-1.828 3.853-1.828 1.316 0 2.36.453 3.13 1.342.771.889 1.156 2.197 1.156 3.907h2.585c0-2.398-.626-4.226-1.878-5.5-1.252-1.258-2.906-1.895-4.993-1.895-5.186 0-7.77 3.404-7.77 10.195 0 6.808 2.584 10.195 7.77 10.195zm14.992 0c1.477 0 2.665-.503 3.58-1.526.9-1.022 1.365-2.414 1.365-4.175h-2.328c0 1.09-.24 1.962-.707 2.6-.481.637-1.091.955-1.862.955-1.124 0-1.958-.42-2.488-1.291-.53-.872-.803-2.23-.819-4.075h8.204v-1.492c0-2.482-.418-4.293-1.22-5.416-.82-1.107-2.071-1.677-3.757-1.677-1.927 0-3.355.654-4.286 1.962-.948 1.308-1.413 3.337-1.413 6.087 0 2.817.465 4.862 1.429 6.137.947 1.274 2.376 1.911 4.302 1.911zm-3.227-9.658c.097-1.459.386-2.532.9-3.236.513-.705 1.268-1.057 2.295-1.057.819 0 1.445.37 1.862 1.107.418.738.642 1.794.642 3.186h-5.699zm11.144 9.658h2.344v-9.625c0-1.307.273-2.364.819-3.152.546-.771 1.22-1.174 2.006-1.174.69 0 1.22.218 1.59.62.353.403.546 1.124.546 2.147v11.184h2.36V13.567c0-1.677-.322-2.884-.964-3.639-.642-.738-1.573-1.123-2.777-1.123-1.654 0-2.874.72-3.66 2.146h-.177l-.305-2.146h-1.782v16.097zm15.783 0c.29 0 .578-.033.9-.117.32-.067.577-.168.802-.285v-1.744h-.69c-.9 0-1.349-.47-1.349-1.442V10.951h2.04V8.805h-2.04V4.512h-1.846l-.514 4.293h-1.3v2.146h1.3v10.313c0 1.04.209 1.911.626 2.599.418.704 1.108 1.04 2.071 1.04zm3.895 0h2.344v-10.06c0-1.359.256-2.348.786-2.969a2.596 2.596 0 012.039-.922h.77V8.99c-.064 0-.192-.033-.4-.1a3.035 3.035 0 00-.707-.084c-.658 0-1.204.184-1.622.52a3.302 3.302 0 00-.947 1.308h-.176l-.305-1.828h-1.782v16.097zm12.686 0c1.766 0 3.114-.654 4.03-1.978.898-1.308 1.364-3.337 1.364-6.07 0-2.717-.466-4.746-1.365-6.07-.915-1.308-2.263-1.98-4.03-1.98-1.797 0-3.146.672-4.045 1.98-.915 1.324-1.365 3.353-1.365 6.07 0 2.733.45 4.762 1.365 6.07.899 1.325 2.248 1.978 4.046 1.978zm0-2.146c-1.959 0-2.938-1.777-2.938-5.349V16.3c0-3.555.979-5.349 2.938-5.349 1.942 0 2.922 1.794 2.922 5.35v1.106c0 3.572-.98 5.35-2.922 5.35zm18.955 2.146a3.46 3.46 0 001.894-.536c.578-.37 1.044-.906 1.413-1.61h.144l.322 2.146h1.781V3.44h-2.36v7.194h-.144c-.257-.57-.674-1.006-1.252-1.342a4.026 4.026 0 00-1.975-.486c-1.348 0-2.424.687-3.259 2.029-.834 1.341-1.252 3.337-1.252 5.986 0 2.75.401 4.78 1.22 6.104.803 1.325 1.959 1.978 3.468 1.978zm.481-2.146c-.93 0-1.605-.42-2.038-1.258-.45-.838-.659-2.196-.659-4.091V16.3c0-1.878.21-3.253.659-4.091.433-.839 1.107-1.258 2.038-1.258 1.798 0 2.714 1.828 2.714 5.467v.989c0 3.572-.916 5.35-2.714 5.35zm13.729 2.146c1.477 0 2.665-.503 3.58-1.526.899-1.022 1.365-2.414 1.365-4.175H301.2c0 1.09-.241 1.962-.707 2.6-.481.637-1.091.955-1.862.955-1.124 0-1.959-.42-2.488-1.291-.53-.872-.803-2.23-.819-4.075h8.204v-1.492c0-2.482-.418-4.293-1.22-5.416-.82-1.107-2.072-1.677-3.757-1.677-1.927 0-3.356.654-4.287 1.962-.947 1.308-1.412 3.337-1.412 6.087 0 2.817.465 4.862 1.428 6.137.948 1.274 2.376 1.911 4.303 1.911zm-3.227-9.658c.096-1.459.385-2.532.9-3.236.513-.705 1.267-1.057 2.295-1.057.818 0 1.445.37 1.862 1.107.418.738.642 1.794.642 3.186h-5.699zm-92.178 33.697h2.536v-9.658h5.298l3.644 9.658h2.826l-3.966-10.094c1.108-.352 1.975-.973 2.585-1.845.61-.872.915-1.911.915-3.119 0-1.626-.514-2.917-1.525-3.89-1.028-.955-2.472-1.442-4.367-1.442h-7.946v20.39zm2.536-11.804v-6.44h5.33c1.06 0 1.894.286 2.472.839.578.57.867 1.341.867 2.33 0 .99-.32 1.778-.93 2.382-.611.604-1.414.889-2.409.889h-5.33zm19.855 11.804c1.477 0 2.665-.503 3.58-1.525.899-1.023 1.364-2.415 1.364-4.176h-2.328c0 1.09-.24 1.962-.706 2.6-.482.636-1.092.955-1.862.955-1.124 0-1.959-.42-2.489-1.291-.53-.872-.802-2.23-.818-4.075h8.203v-1.492c0-2.482-.417-4.293-1.22-5.416-.819-1.107-2.07-1.677-3.757-1.677-1.926 0-3.355.654-4.286 1.962-.947 1.308-1.413 3.337-1.413 6.087 0 2.817.466 4.862 1.43 6.137.946 1.274 2.375 1.911 4.302 1.911zm-3.227-9.658c.096-1.459.385-2.532.899-3.236.514-.705 1.268-1.057 2.296-1.057.818 0 1.444.37 1.862 1.107.417.738.642 1.794.642 3.186h-5.7zm16.054 9.658c1.573 0 2.73-.57 3.5-1.71.755-1.14 1.14-2.599 1.14-4.36h-2.344c0 1.342-.177 2.331-.53 2.968-.353.638-.947.956-1.766.956-.947 0-1.637-.436-2.055-1.325-.433-.888-.642-2.23-.642-4.024V40.34c0-1.777.209-3.119.658-4.007.434-.889 1.108-1.342 2.04-1.342.818 0 1.38.319 1.7.922.322.62.482 1.61.482 2.985h2.457c0-2.012-.37-3.521-1.108-4.527-.738-1.006-1.926-1.526-3.532-1.526-1.766 0-3.082.654-3.917 1.945-.835 1.308-1.252 3.337-1.252 6.104 0 2.783.401 4.812 1.236 6.103.835 1.308 2.135 1.945 3.933 1.945zm11.472 0c1.654 0 2.874-.704 3.66-2.146h.177l.321 2.146h1.782V32.844h-2.36v9.625c0 1.325-.273 2.381-.819 3.152-.546.788-1.22 1.174-2.006 1.174-.69 0-1.22-.201-1.59-.604-.369-.402-.546-1.123-.546-2.163V32.844h-2.344v11.335c0 1.677.322 2.901.964 3.639.642.755 1.557 1.123 2.761 1.123zm9.826 0h2.343v-10.06c0-1.359.257-2.348.787-2.968a2.597 2.597 0 012.039-.923h.77v-1.962c-.064 0-.192-.033-.4-.1a3.037 3.037 0 00-.707-.084c-.659 0-1.204.184-1.622.52a3.301 3.301 0 00-.947 1.308h-.177l-.305-1.828h-1.781V48.94zm12.362 0c1.477 0 2.65-.385 3.516-1.173.867-.788 1.317-1.979 1.317-3.555 0-1.006-.209-1.811-.594-2.415a3.949 3.949 0 00-1.413-1.358c-.562-.302-1.268-.604-2.135-.922-.947-.302-1.638-.62-2.087-.94-.45-.318-.675-.821-.675-1.492 0-.536.145-1.006.45-1.442.305-.436.835-.654 1.59-.654.738 0 1.284.235 1.605.688.32.453.497 1.006.497 1.677v.268h2.44l.033-.553c0-1.191-.385-2.197-1.156-3.002-.77-.805-1.83-1.224-3.179-1.224-1.445 0-2.6.402-3.452 1.19-.85.789-1.268 1.845-1.268 3.186 0 .94.177 1.694.546 2.264.353.57.803 1.006 1.317 1.308.513.302 1.204.587 2.038.872.69.252 1.236.486 1.622.688.385.2.706.486.98.821.256.352.4.805.4 1.342 0 .737-.224 1.29-.658 1.693-.433.403-.979.587-1.621.587-.739 0-1.333-.218-1.782-.67-.466-.453-.69-1.14-.69-2.046v-.285h-2.473c-.032.184-.032.385-.032.62 0 1.274.401 2.348 1.204 3.22.803.871 1.22 1.307 1.22 1.307h2.44zm12.981 0c1.766 0 3.115-.654 4.03-1.978.899-1.308 1.365-3.337 1.365-6.07 0-2.717-.466-4.746-1.365-6.07-.915-1.308-2.264-1.98-4.03-1.98-1.798 0-3.146.672-4.045 1.98-.915 1.324-1.365 3.353-1.365 6.07 0 2.733.45 4.762 1.365 6.07.899 1.325 2.247 1.978 4.046 1.978zm0-2.146c-1.958 0-2.938-1.777-2.938-5.349V40.34c0-3.554.98-5.349 2.938-5.349 1.943 0 2.922 1.794 2.922 5.35v1.106c0 3.572-.979 5.35-2.921 5.35zm12.796 2.146c1.477 0 2.649-.385 3.516-1.173s1.316-1.979 1.316-3.555c0-1.006-.209-1.811-.594-2.415a3.95 3.95 0 00-1.413-1.358c-.561-.302-1.268-.604-2.135-.922-.947-.302-1.637-.62-2.087-.94-.45-.318-.674-.821-.674-1.492 0-.536.144-1.006.45-1.442.304-.436.834-.654 1.589-.654.738 0 1.284.235 1.605.688.321.453.498 1.006.498 1.677v.268h2.44l.032-.553c0-1.191-.385-2.197-1.156-3.002-.77-.805-1.83-1.224-3.178-1.224-1.445 0-2.601.402-3.452 1.19-.85.789-1.268 1.845-1.268 3.186 0 .94.176 1.694.546 2.264.353.57.802 1.006 1.316 1.308.514.302 1.204.587 2.039.872.69.252 1.236.486 1.621.688.385.2.707.486.98.821.256.352.4.805.4 1.342 0 .737-.224 1.29-.657 1.693-.434.403-.98.587-1.622.587-.738 0-1.332-.218-1.782-.67-.465-.453-.69-1.14-.69-2.046v-.285h-2.472c-.033.184-.033.385-.033.62 0 1.274.402 2.348 1.204 3.22.803.871 1.22 1.307 1.22 1.307h2.44zm-87.881 15.454h5.121v.486c0 2.013-.385 3.522-1.14 4.494-.77.973-1.958 1.46-3.58 1.46-1.669 0-2.953-.604-3.82-1.829-.867-1.224-1.3-3.051-1.3-5.483v-1.476c0-2.397.449-4.208 1.38-5.45.915-1.24 2.215-1.86 3.885-1.86 1.413 0 2.52.402 3.34 1.19.818.788 1.236 1.979 1.236 3.572h2.584c0-2.247-.658-3.958-1.974-5.131-1.317-1.174-3.05-1.778-5.186-1.778-2.52 0-4.463.872-5.844 2.582-1.38 1.728-2.07 4.26-2.07 7.613 0 3.388.658 5.936 1.99 7.647 1.333 1.71 3.26 2.549 5.78 2.549 2.231 0 3.933-.772 5.089-2.348l.546 2.348h1.67V62.249h-7.707v2.146zm16.077 8.585c1.477 0 2.665-.503 3.58-1.525.899-1.023 1.364-2.415 1.364-4.176h-2.327c0 1.09-.241 1.962-.707 2.6-.482.636-1.092.955-1.862.955-1.124 0-1.959-.42-2.489-1.291-.53-.872-.802-2.23-.818-4.075h8.203v-1.492c0-2.482-.417-4.293-1.22-5.416-.819-1.107-2.07-1.677-3.756-1.677-1.927 0-3.356.654-4.287 1.962-.947 1.308-1.413 3.337-1.413 6.087 0 2.817.466 4.862 1.43 6.137.946 1.274 2.375 1.912 4.302 1.912zm-3.227-9.658c.096-1.459.385-2.532.899-3.236.514-.705 1.268-1.057 2.296-1.057.818 0 1.444.37 1.862 1.107.417.738.642 1.794.642 3.186h-5.7zm10.712 9.658h2.344v-9.625c0-1.307.273-2.364.819-3.152.545-.771 1.22-1.174 2.006-1.174.69 0 1.22.218 1.59.62.353.403.546 1.124.546 2.147v11.185h2.36V61.645c0-1.677-.322-2.884-.964-3.639-.642-.737-1.573-1.123-2.777-1.123-1.654 0-2.874.72-3.66 2.146h-.177l-.305-2.146h-1.782V72.98zm16.139-17.64h2.006l3.083-3.74-.032-.083h-2.585l-2.472 3.823zm1.75 17.64c1.476 0 2.664-.503 3.58-1.525.898-1.023 1.364-2.415 1.364-4.176h-2.328c0 1.09-.24 1.962-.706 2.6-.482.636-1.092.955-1.862.955-1.124 0-1.959-.42-2.489-1.291-.53-.872-.802-2.23-.819-4.075h8.204v-1.492c0-2.482-.417-4.293-1.22-5.416-.819-1.107-2.071-1.677-3.757-1.677-1.926 0-3.355.654-4.286 1.962-.947 1.308-1.413 3.337-1.413 6.087 0 2.817.466 4.862 1.429 6.137.947 1.274 2.376 1.912 4.302 1.912zm-3.227-9.658c.096-1.459.385-2.532.899-3.236.513-.705 1.268-1.057 2.295-1.057.82 0 1.445.37 1.863 1.107.417.738.642 1.794.642 3.186h-5.7zm13.377 9.658c.289 0 .578-.033.899-.117a3.04 3.04 0 00.803-.285v-1.744h-.69c-.9 0-1.35-.47-1.35-1.442V59.03h2.04v-2.146h-2.04V52.59h-1.846l-.513 4.293h-1.3v2.146h1.3v10.313c0 1.04.208 1.911.626 2.599.417.704 1.108 1.04 2.07 1.04zm3.174-19.317h2.36v-2.146h-2.36v2.146zm0 19.318h2.36V56.883h-2.36V72.98zm9.572-.001c1.573 0 2.729-.57 3.5-1.71.754-1.14 1.14-2.599 1.14-4.36h-2.345c0 1.342-.176 2.331-.53 2.968-.353.638-.947.956-1.765.956-.947 0-1.638-.436-2.055-1.325-.434-.888-.642-2.23-.642-4.024v-1.107c0-1.777.208-3.119.658-4.007.433-.889 1.107-1.342 2.039-1.342.818 0 1.38.319 1.701.922.321.62.482 1.61.482 2.985h2.456c0-2.012-.369-3.521-1.108-4.527-.738-1.006-1.926-1.526-3.531-1.526-1.766 0-3.083.654-3.918 1.945-.834 1.308-1.252 3.337-1.252 6.104 0 2.783.402 4.812 1.236 6.103.835 1.308 2.136 1.946 3.934 1.946zm11.716 0c1.766 0 3.115-.654 4.03-1.978.899-1.308 1.364-3.337 1.364-6.07 0-2.717-.465-4.746-1.364-6.07-.915-1.308-2.264-1.98-4.03-1.98-1.798 0-3.146.672-4.045 1.98-.916 1.324-1.365 3.353-1.365 6.07 0 2.733.45 4.762 1.365 6.07.899 1.325 2.247 1.979 4.045 1.979zm0-2.146c-1.958 0-2.938-1.777-2.938-5.349v-1.107c0-3.554.98-5.349 2.938-5.349 1.943 0 2.922 1.794 2.922 5.35v1.106c0 3.572-.98 5.35-2.922 5.35zm11.933 2.146c1.476 0 2.649-.385 3.515-1.173.867-.788 1.317-1.979 1.317-3.555 0-1.006-.209-1.811-.594-2.415a3.95 3.95 0 00-1.413-1.358c-.562-.302-1.268-.604-2.135-.922-.947-.302-1.638-.62-2.087-.94-.45-.318-.674-.821-.674-1.492 0-.536.144-1.006.45-1.442.304-.436.834-.654 1.589-.654.738 0 1.284.235 1.605.688.321.453.498 1.006.498 1.677v.268h2.44l.032-.553c0-1.191-.385-2.197-1.156-3.002-.77-.805-1.83-1.224-3.179-1.224-1.445 0-2.6.402-3.451 1.19-.851.789-1.269 1.845-1.269 3.186 0 .94.177 1.694.546 2.264.353.57.803 1.006 1.317 1.308.513.302 1.204.587 2.039.872.69.252 1.236.486 1.621.688.385.2.706.486.98.821.256.352.4.805.4 1.342 0 .737-.224 1.29-.658 1.693-.433.403-.979.587-1.621.587-.738 0-1.332-.218-1.782-.67-.466-.453-.69-1.14-.69-2.046v-.285h-2.473c-.032.184-.032.385-.032.62 0 1.274.402 2.348 1.204 3.22a101.7 101.7 0 001.22 1.308h2.44z"
            ></path>
          </svg>
        </a>
      </Grid>
    </header>
  );
};

export default Header;
