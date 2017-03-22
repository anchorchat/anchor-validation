# Anchor validation

Module for exposing a few validation methods to be used in redux-forms.

# Examples
```
import { maxLength, minLength, required, isAlphanumeric } from 'anchor-validation';

const maxLength15 = maxLength(15);
const minLength2 = minLength(2);
const minLength6 = minLength(6);

<form>
  <Field
    name="username"
    component={renderField}
    label="username"
    type="text"
    validate={[required, minLength2, maxLength15, isAlphanumeric]}
  />
  <Button onClick={handleSubmit(onSubmit)} disabled={invalid || submitting}>
    <p>Sign in</p>
  </Button>
</form>
```
