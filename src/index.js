export { normalizeDate, normalizeUsername } from './normalizers';

export const required = (value, error = true) => (value ? undefined : error);

export const maxLength = max => (
  (value, error = true) => (value && value.length > max ? error : undefined)
);

export const minLength = min => (
  (value, error = true) => (value && value.length < min ? error : undefined)
);

export const isAlphanumeric = (value, error = true) => (
  value && /[^a-zA-Z0-9]/.test(value) ? error : undefined
);

export const isEmail = (value, error = true) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return value && !emailRegex.test(value) ? error : undefined;
};

export const isEqual = (value, comparison, error = true) => (
  (value && comparison && value !== comparison) ? error : undefined
);

export const isNotEqual = (value, comparison, error = true) => (
  (value && comparison && value === comparison) ? error : undefined
);

export const oneOf = (fn1, fn2, error = true) => (
  (fn1 || fn2) ? error : undefined
);
