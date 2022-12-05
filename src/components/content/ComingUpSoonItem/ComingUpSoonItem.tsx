//@ts-nocheck
import React, { useRef, useLayoutEffect, useState } from 'react';
import styles from './ComingUpSoonItem.module.scss';

const ComingUpSoonItem = ({
  dash: dashRaw = { width: 6, gap: 6, size: 1 },
  satellite = { width: 16 },
  duration,
  offsetDegree,
  text,
  className = '',
}) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [ratio, setRatio] = useState(0);
  const [dash, setDash] = useState({ ...dashRaw });

  useLayoutEffect(() => {
    const height = ref.current.offsetHeight;
    const ratio = height / 100;

    const dashLocal = {
      width: dash.width / ratio,
      size: dash.size / ratio,
      gap: dash.gap / ratio,
    };

    setRatio(ratio);
    setHeight(height);
    setDash({ ...dashLocal });
  }, []);

  return (
    <div className={`${styles.satellite} ${className}`} ref={ref}>
      <div className={styles.satellite__text}>{text}</div>

      <SatelliteSatellite {...{ duration, offsetDegree, satellite }} />
      <SatelliteOrbita {...{ duration, offsetDegree, dash }} />
    </div>
  );
};

export default ComingUpSoonItem;

export const SatelliteOrbita = ({
  dash: { width, gap, size },
  offsetDegree,
  duration,
}) => {
  return (
    <svg
      className={styles.satellite__orbita}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <defs>
        <mask id="satellite-mask">
          <circle
            id="outer"
            cx="50"
            cy="50"
            r={50 - size * 2}
            fill="white"
            stroke="white"
            strokeWidth={size * 4}
            strokeDasharray={`${width}, ${gap}`}
          />
          <circle id="inner" cx="50" cy="50" r={50.2 - size * 2} />
        </mask>
      </defs>

      <g mask="url(#satellite-mask)" width="280" height="280">
        <foreignObject
          className={styles.satellite__back}
          style={{ animationDuration: `${duration}s` }}
          x="0"
          y="0"
          width="100"
          height="100"
        >
          <div
            className={styles.satellite__gradient}
            style={{
              transform: `rotate(${+offsetDegree}deg)`,
            }}
            xmlns="http://www.w3.org/1999/xhtml"
          ></div>
        </foreignObject>
      </g>
    </svg>
  );
};

export const SatelliteSatellite = ({
  duration,
  offsetDegree,
  satellite: { width },
}) => {
  return (
    <div
      className={styles.satellite__satellite}
      style={{ animationDuration: `${duration}s` }}
    >
      <div
        className={styles.satellite__wrap_offset}
        style={{
          transform: `rotate(${+offsetDegree + 92}deg)`,
        }}
      >
        <svg
          width={width}
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5155 9.26507L18.5155 5.93234C18.5154 5.70861 18.4265 5.49405 18.2683 5.33585C18.1101 5.17764 17.8956 5.08875 17.6718 5.08872L14.9357 5.08872L14.9357 2.59961L18.6181 2.59961V0.912369H9.56615L9.56615 2.59961L13.2485 2.59961V5.08872L10.5124 5.08872C10.2887 5.08875 10.0741 5.17764 9.91589 5.33585C9.75769 5.49405 9.6688 5.70861 9.66877 5.93234L9.66877 9.26507L1.56307 9.26507C1.33934 9.2651 1.12478 9.35399 0.966574 9.5122C0.808372 9.6704 0.719479 9.88496 0.719446 10.1087V16.0749C0.719479 16.2986 0.808372 16.5132 0.966574 16.6714C1.12478 16.8296 1.33934 16.9185 1.56307 16.9185L9.66877 16.9185L9.66877 20.2513C9.6688 20.475 9.75769 20.6895 9.91589 20.8477C10.0741 21.0059 10.2887 21.0948 10.5124 21.0949L13.2485 21.0949V23.584L9.56615 23.584L9.56615 25.2712H18.6181V23.584L14.9357 23.584L14.9357 21.0949L17.6718 21.0949C17.8956 21.0948 18.1101 21.0059 18.2683 20.8477C18.4265 20.6895 18.5154 20.475 18.5155 20.2513L18.5155 16.9185L26.6212 16.9185C26.8449 16.9185 27.0595 16.8296 27.2177 16.6714C27.3759 16.5132 27.4648 16.2986 27.4648 16.0749V10.1087C27.4648 9.88496 27.3759 9.6704 27.2177 9.5122C27.0595 9.35399 26.8449 9.2651 26.6212 9.26507L18.5155 9.26507ZM2.40669 15.2313V10.9523L4.8958 10.9523V15.2313L2.40669 15.2313ZM6.58304 15.2313V10.9523L9.66877 10.9523V15.2313L6.58304 15.2313ZM16.8282 19.4076H11.356V6.77596H16.8282V19.4076ZM18.5155 15.2313V10.9523H21.6012V15.2313H18.5155ZM25.7775 15.2313H23.2884V10.9523H25.7775V15.2313Z"
            fill="#DC4945"
          />
        </svg>
      </div>
    </div>
  );
};
