'use client';

import { motion } from 'framer-motion';

import colors from 'tailwindcss/colors';

const CloseButton = ({ title, opened, onClick, className }) => {
  return (

<motion.button
title={title}
onClick={onClick}

className={`p-3 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center rounded-md ${
  className ? className : ''
}`}
>
<motion.svg
  className="h-8 w-8"
  fill="none"
  animate={{
    stroke: opened ? colors.rose['300'] : 'white',
  }}
  transition={{ delay: 0.1 }}
  viewBox="0 0 24 24"
>
  <motion.path
    name={'close-A'}
    fill="none"
    strokeWidth="2.2"
    d="M6 18 L18 6"
  />
  <motion.path
    name={'close-B'}
    fill="none"
    strokeWidth="2.2"
    d="M6 6 L18 18"
  />
  </motion.svg>
  </motion.button>)}

  export default CloseButton;