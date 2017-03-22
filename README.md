# Anchor validation

[![Build Status](https://travis-ci.org/anchorchat/anchor-validation.svg?branch=master)](https://travis-ci.org/anchorchat/anchor-validation)

Module for exposing a few validation methods to be used in redux-forms.

## Usage

Install from npm

[![NPM](https://nodei.co/npm/anchor-validation.png)](https://nodei.co/npm/anchor-validation/)


# Examples

## [redux-form](http://redux-form.com/6.5.0/docs/api/)
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
        value => required(value, 'required'),
        value => minLength(2)(value, 'error_min_length'),
        value => maxLength(15)(value, 'error_max_length'),
        value => isAlphanumeric(value, 'error_not_alphanumeric')
      ]
    }
  />
  <Button onClick={handleSubmit(onSubmit)} disabled={invalid || submitting}>
    <p>Sign in</p>
  </Button>
</form>
```
