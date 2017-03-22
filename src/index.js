export const required = value => (value ? undefined : 'Required');
export const maxLength = max => (
  value => (value && value.length > max ? `Must be ${max} characters or less` : undefined)
);
export const minLength = min => (
  value => (value && value.length < min ? `Must be atleast ${min} characters` : undefined)
);
export const isAlphanumeric = value => (value && /[^a-zA-Z0-9]/.test(value) ? 'Must be alphanumeric' : undefined);
