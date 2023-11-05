import { forwardRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// This creates a Motion component out of NextJS's <Link/> component
const NextLink = forwardRef((props, ref) => <Link ref={ref} {...props} />);

// Required for EsLint
NextLink.displayName = 'NextLink';

// Motion version of the Link
const MotionLink = motion(NextLink, { forwardMotionProps: true });
export default MotionLink;
