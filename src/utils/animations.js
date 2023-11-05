import colors from 'tailwindcss/colors';
export const enterTransition = {
  opacity: {
    duration: 0.4,
  },
  x: {
    duration: 0.5,
    type: 'spring',
  },
};

export const exitTransition = {
  opacity: {
    duration: 0.4,
  },
  x: {
    delay: 0.4,
    duration: 0.5,
    type: 'spring',
  },
};

export const pageAnimations = {
  animateIn: {
    opacity: 1,
    x: 0,
    transition: enterTransition,
  },
  animateOutLeft: {
    opacity: 0.4,
    x: -1000,
    transition: exitTransition,
  },
  animateOutRight: {
    opacity: 0.4,
    x: 1000,
    transition: exitTransition,
  },
};

export const navLinkVariant = {
  rest: {
    backgroundColor: 'transparent',
  },
  hover: {
    backgroundColor: colors.indigo['900'],
  },
};

export const navLinkArrowVariant = {
  rest: {
    x: -20,
    y: 20,
    opacity: 0,
  },
  hover: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

export const mobileAside = {
  closed: {
    width: 0,
    transition: {
      when: 'afterChildren',
      duration: 0.2,
    },
  },
  open: {
    width: '50%',
    transition: {
      when: 'beforeChildren',
      duration: 0.2,
    },
  },
};

export const mobileMenuContainer = {
  closed: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      duration: 0.1,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.1,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const mobileMenuItems = {
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};
