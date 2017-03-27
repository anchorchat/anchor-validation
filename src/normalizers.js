export default (value) => {
  if (!value) {
    return value;
  }

  const numbers = value.replace(/[^\d]/g, '');

  if (numbers.length <= 2) {
    return numbers;
  }
  if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
  }
  return `${numbers.slice(0, 2)}-${numbers.slice(2, 4)}-${numbers.slice(4, 8)}`;
};
