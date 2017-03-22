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
