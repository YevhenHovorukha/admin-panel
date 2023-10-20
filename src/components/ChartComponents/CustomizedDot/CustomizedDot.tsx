const CustomizedDot = (props: any) => {
  const { cx, cy } = props;

  return (
    <svg
      x={cx - 14}
      y={cy - 14}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="white"
    >
      <path
        opacity="0.16"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26798 6.26801 -3.05176e-05 14 -3.05176e-05C21.732 -3.05176e-05 28 6.26798 28 14ZM14 26C20.6274 26 26 20.6274 26 14C26 7.37255 20.6274 1.99997 14 1.99997C7.37258 1.99997 2 7.37255 2 14C2 20.6274 7.37258 26 14 26Z"
        fill="#3751FF"
      />
      <g filter="url(#filter0_d_10239_103)">
        <path
          d="M21 14C21 17.866 17.866 21 14 21C10.134 21 7 17.866 7 14C7 10.134 10.134 6.99997 14 6.99997C17.866 6.99997 21 10.134 21 14Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_d_10239_103)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 17C15.6569 17 17 15.6568 17 14C17 12.3431 15.6569 11 14 11C12.3431 11 11 12.3431 11 14C11 15.6568 12.3431 17 14 17ZM14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 6.99997 14 6.99997C10.134 6.99997 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
          fill="#3751FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_10239_103"
          x="5"
          y="5.99997"
          width="18"
          height="18"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.215686 0 0 0 0 0.317647 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10239_103"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_10239_103"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_10239_103"
          x="5"
          y="5.99997"
          width="18"
          height="18"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.215686 0 0 0 0 0.317647 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10239_103"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_10239_103"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CustomizedDot;
