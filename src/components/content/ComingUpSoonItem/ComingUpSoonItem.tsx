import React from 'react';
import styles from './ComingUpSoonItem.module.scss';

const ComingUpSoonItem = ({
  offsetDegree = '0',
  text = '',
  className = '',
}) => {
  return (
    <div className={`${styles.satellite} ${className}`}>
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
                offset="80%"
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
              from={`${offsetDegree} 155.5 155.5`}
              to={`${+offsetDegree - 0 + 360} 155.5 155.5`}
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
                from={`${offsetDegree} 155.5 155.5`}
                to={`${+offsetDegree - 0 + 360} 155.5 155.5`}
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
    </div>
  );
};

export default ComingUpSoonItem;
