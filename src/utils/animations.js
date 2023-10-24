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
