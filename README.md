# Anchor validation

Module for exposing a few validation methods to be used in redux-forms.

# Examples
```
import { maxLength, minLength, required, isAlphanumeric } from 'anchor-validation';

<form>
  <Field
    name="username"
    component={renderField}
    label="username"
    type="text"
    validate={
      [
        required('required'),
        minLength(2, 'error_min_length'),
        maxLength(15, 'error_max_length'),
        isAlphanumeric('error_not_alphanumeric')
      ]
    }
  />
  <Button onClick={handleSubmit(onSubmit)} disabled={invalid || submitting}>
    <p>Sign in</p>
  </Button>
</form>
```
