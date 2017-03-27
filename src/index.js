export { default as normalizeDate } from './normalizers/date';

export const required = (value, error) => (value ? undefined : error);

export const maxLength = max => (
  (value, error) => (value && value.length > max ? error : undefined)
);

export const minLength = min => (
  (value, error) => (value && value.length < min ? error : undefined)
);

export const isAlphanumeric = (value, error) => (
  value && /[^a-zA-Z0-9]/.test(value) ? error : undefined
);

export const isEmail = (value, error) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return value && !emailRegex.test(value) ? error : undefined;
};

export const isEqual = (value, comparison, error) => (
  (value && comparison && value !== comparison) ? error : undefined
);
