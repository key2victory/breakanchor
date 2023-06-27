import {memo} from "react";
import {MdOutlineSchool, MdWorkOutline} from "react-icons/md";
import "./styles.css";

export const Logo = memo(function Logo({
  name,
  size = "48px",
  style = {
    filter: " grayscale(1) brightness(.9) contrast(2)",
    mixBlendMode: "multiply",
    color: "hsl(0,0%,50%)",
    flexGrow: 1,
    flexShrink: 1,
  },
}) {
  const LogoList = {
    watkins: LogoWatkins,
    gsfta: MdOutlineSchool,
    bechtel: LogoBechtel,
    cadre5: LogoCadre5,
    breakanchor: MdWorkOutline,
    audiohand: MdWorkOutline,
    connectionpoint: MdWorkOutline,
    ktown: MdWorkOutline,
  };
  const Component =
    LogoList[name] !== undefined ? LogoList[name] : MdWorkOutline;

  return (
    <div style={{width: size, height: size, ...style}}>
      <Component size="100%" />
    </div>
  );
});

const LogoWatkins = memo(function LogoWatkins({size = "100%"}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "stretch",
        alignItems: "stretch",
        padding: ".2rem",
        flexGrow: 1,
        flexShrink: 1,
      }}
    >
      <img
        src="./img/watkins.jpg"
        alt=""
        width="auto"
        height="auto"
        style={{flexGrow: 1, flexShrink: 1}}
      />{" "}
    </div>
  );
});

const LogoCadre5 = memo(function LogoCadre5(size = "100%") {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 220 200" //"0 0 324.21 156.03"
      preserveAspectRatio="xMidYMid meet"
    >
      <g x="0" y="0" transform="translate(-54,20)">
        <path
          d="M138.48 100.15v16.49h-40a52.57 52.57 0 0 1-18.75-3.11 40.58 40.58 0 0 1-13.81-8.47 35.72 35.72 0 0 1-8.58-12.59 41.46 41.46 0 0 1 0-30.72 35.72 35.72 0 0 1 8.58-12.59 40.58 40.58 0 0 1 13.81-8.47 52.57 52.57 0 0 1 18.75-3.11h40v16.49H98.87a33.5 33.5 0 0 0-11.57 1.81 23.11 23.11 0 0 0-8.13 4.91 19.25 19.25 0 0 0-4.79 7.34 27 27 0 0 0 0 18 19.25 19.25 0 0 0 4.79 7.34 23.11 23.11 0 0 0 8.13 4.91 33.27 33.27 0 0 0 11.57 1.81h39.61z"
          fill="#231f20"
        />
        <path
          d="M269.83 91.9a23.83 23.83 0 0 1-2.5 10.79 24.52 24.52 0 0 1-7.73 8.86 40.12 40.12 0 0 1-13.26 6 72.79 72.79 0 0 1-19.1 2.2 56.39 56.39 0 0 1-15.17-1.92 57.94 57.94 0 0 1-12.16-4.8 40 40 0 0 1-8.91-6.33 31 31 0 0 1-5.39-6.66l15.06-8.59a19.13 19.13 0 0 0 3.79 3.73 33.26 33.26 0 0 0 6.27 3.82 41.74 41.74 0 0 0 8.23 2.88 40.39 40.39 0 0 0 9.77 1.13 50.75 50.75 0 0 0 11.32-1.07 27.14 27.14 0 0 0 7.54-2.77 11.52 11.52 0 0 0 4.19-3.89 8.76 8.76 0 0 0 1.29-4.46 6.62 6.62 0 0 0-2-4.92 14.84 14.84 0 0 0-5.38-3.22 36.3 36.3 0 0 0-7.93-1.8 78.28 78.28 0 0 0-9.73-.57c-3.06 0-6.21.13-9.47.4s-6.49.62-9.68 1.07-6.28 1-9.27 1.58-5.76 1.24-8.28 1.92l4.59-47.66h68.22v17.02H210l-1.1 12.76c3.19-.61 6.7-1.09 10.53-1.47s7.73-.57 11.72-.57a83.54 83.54 0 0 1 14.11 1.19 40.31 40.31 0 0 1 12.37 4.12 24.22 24.22 0 0 1 8.83 8.08q3.37 5.15 3.37 13.15z"
          fill="#c10230"
        />
        <path
          d="M165.25 116.64a7.77 7.77 0 0 1-7.88-7.89 8 8 0 1 1 7.88 7.89zM165.25 84.54a7.76 7.76 0 0 1-7.88-7.88 8 8 0 1 1 7.88 7.88zM165.25 53.38a7.77 7.77 0 0 1-7.88-7.89 8 8 0 1 1 7.88 7.89z"
          fill="#929497"
        />
      </g>{" "}
    </svg>
  );
});

const LogoBechtel = memo(function LogoBechtel(size = "100%") {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} //"106.135"
      height={size} //"80"
      viewBox="0 0 106.135 80"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M78.083,57.784l-4.4,1.554V50.692L68.8,52.416V74.627L73.681,72.9V64l4.4-1.554v8.9l4.882-1.724V47.414l-4.882,1.724Z"
        transform="translate(-21.246 -22.402)"
        fill="#57727f"
      />
      <path
        d="M84.376,51.571l4.284-1.513V67.6l4.882-1.724V48.334l4.283-1.513V42.156L84.376,46.9Z"
        transform="translate(-20.258 -22.791)"
        fill="#57727f"
      />
      <path
        d="M117.99,52.455V34.909l-4.882,1.724V58.845l11.484-4.055V50.124Z"
        transform="translate(-18.457 -23.585)"
        fill="#57727f"
      />
      <path
        d="M35.726,74.983a8.538,8.538,0,0,0,1.68-5.036c.005-.962-.254-3.912-2.845-4.6a6.343,6.343,0,0,0-3.436.284l-7.012,2.477v22.21l9.268-3.272a6.966,6.966,0,0,0,3.4-2.318,9.067,9.067,0,0,0,1.643-5.118c.013-2.022-.843-4.15-2.7-4.627M29,71.05s1.967-.739,2.43-.884c1.253-.426,1.711.79,1.713,1.638a2.714,2.714,0,0,1-1.769,2.613c-.317.118-2.375.839-2.375.839Zm3.282,11.721L29,83.929V79.211l2.827-1c1.147-.433,2.046.408,2.046,1.779a2.653,2.653,0,0,1-1.591,2.778"
        transform="translate(-24.113 -20.919)"
        fill="#57727f"
      />
      <path
        d="M99.267,63.833l11.751-4.15V55.018l-6.869,2.425V52.725l5.278-1.864V46.681l-5.277,1.864V44.563l6.869-2.425V37.471l-11.751,4.15Z"
        transform="translate(-19.058 -23.113)"
        fill="#57727f"
      />
      <path
        d="M40.244,84.675l11.751-4.15V75.86l-6.869,2.425V73.568L50.4,71.7V67.523l-5.277,1.864V65.405l6.869-2.425V58.314l-11.751,4.15Z"
        transform="translate(-23.086 -21.646)"
        fill="#57727f"
      />
      <path
        d="M66.911,66.893,62.559,68.43v2.322a2.9,2.9,0,0,1-2.05,2.868c-1.229.441-1.933.019-1.933-1.195v-10.5a2.919,2.919,0,0,1,2.089-2.8c1.264-.444,1.892-.011,1.895,1.29v2.364l4.352-1.535v-2.3c-.01-3.228-1.7-4.985-4.525-4.7a11.163,11.163,0,0,0-2,.466,9.561,9.561,0,0,0-6.69,9.11V73.6c.01,3.3,1.976,5.234,4.958,4.931a8.389,8.389,0,0,0,1.945-.455,9,9,0,0,0,6.315-8.6Z"
        transform="translate(-22.222 -21.965)"
        fill="#57727f"
      />
      <path
        d="M73.875,30.137a33.135,33.135,0,0,1,23,9.239l6.3-2.225A39.326,39.326,0,0,0,34.6,61.366l6.3-2.225a33.251,33.251,0,0,1,32.976-29"
        transform="translate(-23.658 -24.056)"
        fill="#ff2800"
      />
      <path
        d="M73.466,94.914A33.133,33.133,0,0,1,50.3,85.51l-6.284,2.219a39.327,39.327,0,0,0,68.739-24.273l-6.28,2.217A33.25,33.25,0,0,1,73.466,94.914"
        transform="translate(-21.457 -20.995)"
        fill="#ff2800"
      />
    </svg>
  );
});
