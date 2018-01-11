import moment from 'moment';
import isemail from 'isemail';
import getAge from './get-age';

export { normalizeDate, normalizeUsername } from './normalizers';

export const required = (value, error = true) => (value ? undefined : error);

export const maxLength = max => (
  (value, error = true) => (value && value.length > max ? error : undefined)
);

export const minLength = min => (
  (value, error = true) => (value && value.length < min ? error : undefined)
);

export const validDate = format => (
  (value, error = true) => (!format || !moment(value, format, true).isValid() ? error : undefined)
);

export const maxAge = (max, format) => (
  (value, error = true) => (getAge(value, format) > max ? error : undefined)
);

export const minAge = (min, format) => (
  (value, error = true) => (getAge(value, format) < min ? error : undefined)
);

export const isAlphanumeric = (value, error = true) => (
  value && /[^a-zA-Z0-9]/.test(value) ? error : undefined
);

export const isEmail = (value, error = true) => {
  return !isemail.validate(value) ? error : undefined;
};

export const isEqual = (value, comparison, error = true) => (
  (value && comparison && value !== comparison) ? error : undefined
);

export const isNotEqual = (value, comparison, error = true) => (
  (value && comparison && value === comparison) ? error : undefined
);

export const oneOf = (fn1, fn2, error = true) => (
  (fn1 && fn2) ? error : undefined
);
