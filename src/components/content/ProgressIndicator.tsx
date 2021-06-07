import React, { CSSProperties, FC } from 'react';
import { motion } from 'framer-motion';

const radius = 10;
const circumference = Math.ceil(2 * Math.PI * radius);

const progressStyles: CSSProperties = {
  position: 'fixed',
  bottom: '2rem',
  left: '2rem',
};

export const ProgressIndicator: FC<{ perc: number }> = ({ perc = 0 }) => (
  <svg height={22} width={22} style={progressStyles}>
    <motion.circle
      cx={11}
      cy={11}
      r={radius}
      strokeWidth={2}
      fill='none'
      stroke='teal'
      initial={{
        strokeDasharray: circumference,
        strokeDashoffset: 1,
      }}
      animate={{
        strokeDasharray: circumference,
        strokeDashoffset: circumference - circumference * (perc / 100),
      }}
      transition={{ ease: 'linear' }}
    />
  </svg>
);
