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
    validate={[required, minLength(2), maxLength(15), isAlphanumeric]}
  />
  <Button onClick={handleSubmit(onSubmit)} disabled={invalid || submitting}>
    <p>Sign in</p>
  </Button>
</form>
```
