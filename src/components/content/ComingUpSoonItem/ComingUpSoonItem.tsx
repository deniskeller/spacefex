/* eslint-disable react-hooks/exhaustive-deps */
//@ts-nocheck
import React, { useRef, useLayoutEffect, useState } from 'react';
import styles from './ComingUpSoonItem.module.scss';

const ComingUpSoonItem = ({
  dash: dashRaw = { width: 6, gap: 6, size: 1 },
  satellite = { width: 16 },
  duration = '0',
  offsetDegree = '0',
  text,
  className = '',
}) => {
  const ref = useRef(null);
  // const [height, setHeight] = useState(0);
  // const [ratio, setRatio] = useState(0);
  // const [dash, setDash] = useState({ ...dashRaw });

  // useLayoutEffect(() => {
  //   const height = ref.current.offsetHeight;
  //   const ratio = height / 100;

  //   const dashLocal = {
  //     width: dash.width / ratio,
  //     size: dash.size / ratio,
  //     gap: dash.gap / ratio,
  //   };

  //   setRatio(ratio);
  //   setHeight(height);
  //   setDash({ ...dashLocal });
  // }, []);

  return (
    <div className={`${styles.satellite} ${className}`} ref={ref}>
      <div className={styles.satellite__text}>{text}</div>

      <div className={styles.satellite__sputnik}>
        <svg
          id="elMhfonJHrt1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 311 311"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <defs>
            <linearGradient
              id="elMhfonJHrt7-fill"
              x1="283"
              y1="141"
              x2="0"
              y2="141"
              spreadMethod="pad"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0 0)"
            >
              <stop
                id="elMhfonJHrt7-fill-0"
                offset="0%"
                stopColor="rgba(255,255,255,0.4)"
              />
              <stop
                id="elMhfonJHrt7-fill-1"
                offset="11.9792%"
                stopColor="rgba(255,255,255,0.195312)"
              />
              <stop
                id="elMhfonJHrt7-fill-2"
                offset="100%"
                stopColor="rgba(255,255,255,0)"
              />
            </linearGradient>
            <linearGradient
              id="elMhfonJHrt8-fill"
              x1="283"
              y1="142"
              x2="0"
              y2="142"
              spreadMethod="pad"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0 0)"
            >
              <stop
                id="elMhfonJHrt8-fill-0"
                offset="0%"
                stopColor="rgba(255,255,255,0.4)"
              />
              <stop id="elMhfonJHrt8-fill-1" offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <g id="elMhfonJHrt2">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 155.5 155.5"
              to="360 155.5 155.5"
              dur="10s"
              repeatCount="indefinite"
            />
            <rect width="311" height="311" rx="0" ry="0" fill="none" />
            <path
              d="M20.3695,136.846l.3773-3.311c.0253-.222-.0387-.445-.178-.621-.1393-.175-.3424-.287-.5647-.313l-2.7185-.309.2818-2.474l3.6587.417.191-1.676-8.9937-1.025-.191,1.677l3.6586.416-.2818,2.474-2.7185-.31c-.2223-.026-.4455.039-.6206.178s-.2877.342-.3131.564l-.3773,3.312-8.05359-.918c-.2223-.025-.44554.039-.62064.178s-.28771.342-.31307.565l-.67548,5.928c-.0253.222.03873.445.17801.62s.34239.288.56468.313l8.05359.918-.3773,3.311c-.0253.223.0387.446.178.621s.3424.288.5647.313l2.7185.31-.2818,2.473-3.65872-.417-.19102,1.676l8.99374,1.025.191-1.676-3.6586-.417.2818-2.473l2.7185.31c.2223.025.4455-.039.6206-.178.1751-.14.2877-.343.3131-.565l.3773-3.311l8.0536.917c.2223.026.4455-.038.6206-.178.1751-.139.2877-.342.3131-.564l.6755-5.928c.0253-.223-.0388-.446-.178-.621s-.3424-.288-.5647-.313l-8.0536-.918ZM3.68883,140.95l.48445-4.251l2.4731.282-.48445,4.251-2.4731-.282Zm4.14949.473l.48446-4.251l3.06592.349-.4845,4.252-3.06588-.35Zm9.70648,5.31l-5.437-.62l1.4301-12.55l5.437.619-1.4301,12.551Zm2.1492-3.959l.4845-4.251l3.0659.349-.4845,4.252-3.0659-.35Zm7.2154.822l-2.4731-.281.4845-4.252l2.4731.282-.4845,4.251Z"
              fill="#dc4945"
            />
          </g>
          <g mask="url(#elMhfonJHrt9)">
            <g id="elMhfonJHrt6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 155.5 155.5"
                to="360 155.5 155.5"
                dur="10s"
                repeatCount="indefinite"
              />
              <rect
                width="283"
                height="141"
                rx="0"
                ry="0"
                transform="translate(14 14)"
                fill="url(#elMhfonJHrt7-fill)"
              />
              <rect
                width="283"
                height="142"
                rx="0"
                ry="0"
                transform="matrix(1 0 0-1 14 297)"
                fill="url(#elMhfonJHrt8-fill)"
              />
            </g>
            <mask
              id="elMhfonJHrt9"
              mask-type="alpha"
              x="-150%"
              y="-150%"
              height="400%"
              width="400%"
            >
              <circle
                r="141"
                transform="translate(155.500001 155.5)"
                fill="none"
                stroke="#fff"
                strokeDasharray="6,6"
              />
            </mask>
          </g>
        </svg>
      </div>

      {/* <SatelliteSatellite {...{ duration, offsetDegree, satellite }} />
      <SatelliteOrbita {...{ duration, offsetDegree, dash }} /> */}
    </div>
  );
};

export default ComingUpSoonItem;

// export const SatelliteOrbita = ({
//   dash: { width, gap, size },
//   offsetDegree = '0',
//   duration = '0',
// }) => {
//   return (
//     <svg
//       className={styles.satellite__orbita}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 100 100"
//     >
//       <defs>
//         <mask id="satellite-mask">
//           <circle
//             id="outer"
//             cx="50"
//             cy="50"
//             r={50 - size * 2}
//             fill="white"
//             stroke="white"
//             strokeWidth={size * 4}
//             strokeDasharray={`${width}, ${gap}`}
//           />
//           <circle id="inner" cx="50" cy="50" r={50.2 - size * 2} />
//         </mask>
//       </defs>

//       <g mask="url(#satellite-mask)" width="100%" height="100%">
//         <foreignObject
//           className={styles.satellite__back}
//           style={{ animationDuration: `${duration}s` }}
//           x="0"
//           y="0"
//           width="100"
//           height="100"
//         >
//           <div
//             className={styles.satellite__gradient}
//             style={{
//               transform: `rotate(${+offsetDegree}deg)`,
//             }}
//             xmlns="http://www.w3.org/1999/xhtml"
//           ></div>
//         </foreignObject>
//       </g>
//     </svg>
//   );
// };

// export const SatelliteSatellite = ({
//   duration = '8',
//   offsetDegree = '0',
//   satellite: { width },
// }) => {
//   return (
//     <div
//       className={styles.satellite__satellite}
//       style={{ animationDuration: `${duration}s` }}
//     >
//       <div
//         className={styles.satellite__wrap_offset}
//         style={{
//           transform: `rotate(${+offsetDegree + 92}deg)`,
//         }}
//       >
//         <svg
//           width={width}
//           viewBox="0 0 28 26"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M18.5155 9.26507L18.5155 5.93234C18.5154 5.70861 18.4265 5.49405 18.2683 5.33585C18.1101 5.17764 17.8956 5.08875 17.6718 5.08872L14.9357 5.08872L14.9357 2.59961L18.6181 2.59961V0.912369H9.56615L9.56615 2.59961L13.2485 2.59961V5.08872L10.5124 5.08872C10.2887 5.08875 10.0741 5.17764 9.91589 5.33585C9.75769 5.49405 9.6688 5.70861 9.66877 5.93234L9.66877 9.26507L1.56307 9.26507C1.33934 9.2651 1.12478 9.35399 0.966574 9.5122C0.808372 9.6704 0.719479 9.88496 0.719446 10.1087V16.0749C0.719479 16.2986 0.808372 16.5132 0.966574 16.6714C1.12478 16.8296 1.33934 16.9185 1.56307 16.9185L9.66877 16.9185L9.66877 20.2513C9.6688 20.475 9.75769 20.6895 9.91589 20.8477C10.0741 21.0059 10.2887 21.0948 10.5124 21.0949L13.2485 21.0949V23.584L9.56615 23.584L9.56615 25.2712H18.6181V23.584L14.9357 23.584L14.9357 21.0949L17.6718 21.0949C17.8956 21.0948 18.1101 21.0059 18.2683 20.8477C18.4265 20.6895 18.5154 20.475 18.5155 20.2513L18.5155 16.9185L26.6212 16.9185C26.8449 16.9185 27.0595 16.8296 27.2177 16.6714C27.3759 16.5132 27.4648 16.2986 27.4648 16.0749V10.1087C27.4648 9.88496 27.3759 9.6704 27.2177 9.5122C27.0595 9.35399 26.8449 9.2651 26.6212 9.26507L18.5155 9.26507ZM2.40669 15.2313V10.9523L4.8958 10.9523V15.2313L2.40669 15.2313ZM6.58304 15.2313V10.9523L9.66877 10.9523V15.2313L6.58304 15.2313ZM16.8282 19.4076H11.356V6.77596H16.8282V19.4076ZM18.5155 15.2313V10.9523H21.6012V15.2313H18.5155ZM25.7775 15.2313H23.2884V10.9523H25.7775V15.2313Z"
//             fill="#DC4945"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };
