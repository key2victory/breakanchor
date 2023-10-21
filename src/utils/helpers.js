export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export const assertValue = (value, errorMessage) => {
  if (value === undefined) {
    throw new Error(errorMessage);
  }

  return value;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (value) => {
  const date = typeof value === 'string' ? new Date(value) : value;

  const dd = date.getDate() < 10 ? `0${date.getUTCDate()}` : `${date.getUTCDate()}`;
  const mm = months[date.getMonth()];

  const yyyy = date.getFullYear();

  return `${mm} ${dd}, ${yyyy}`;
};
