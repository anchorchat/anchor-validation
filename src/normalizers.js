export const normalizeDate = (value) => {
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

export const normalizeUsername = (value) => {
  if (!value) {
    return value;
  }

  const valueWithoutI = value.replace(/[I]/g, match => match.toLowerCase());
  console.log(valueWithoutI);

  console.log('value should have no capital i now');
  return valueWithoutI.replace(/[^a-zA-Z0-9\-_]/g, '');
};
