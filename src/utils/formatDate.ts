const formatDate = (date: Date) => {
  return `${addZeros(date.getDate())}/${addZeros(
    date.getUTCMonth() + 1
  )}/${date.getFullYear()}`;
};

const addZeros = (value: number) => {
  if (value < 10) {
    return `0${value}`;
  } else {
    return value;
  }
};

export default formatDate;
