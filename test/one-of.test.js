/* eslint-env mocha */
import { expect } from 'chai';
import { oneOf, isEqual, isAlphanumeric, isEmail } from '../src';

describe('oneOf', () => {
  it('should return undefined if both validations pass', () => {
    const isEqualValidation = isEqual('test', 'test');
    const isAlphanumericValidation = isAlphanumeric('test');
    expect(oneOf(isEqualValidation, isAlphanumericValidation, 'error_one_of')).to.equal(undefined);
  });

  it('should return undefined if validation fails on one of the checks', () => {
    const isEqualValidation = isEqual('test', 'test');
    const isAlphanumericValidation = isAlphanumeric('test@!');
    expect(oneOf(isEqualValidation, isAlphanumericValidation, 'error_one_of')).to.equal(undefined);
  });

  it('should return true if validation fails on both checks and no error message is specified', () => {
    const isEqualValidation = isEqual('test@!', 'not equal');
    const isAlphanumericValidation = isAlphanumeric('test@!');
    expect(oneOf(isEqualValidation, isAlphanumericValidation)).to.equal(true);
  });

  it('should return error message if validation fails on both checks', () => {
    const isEmailValidation = isEmail('test@');
    const isAlphanumericValidation = isAlphanumeric('test@');
    expect(oneOf(isEmailValidation, isAlphanumericValidation, 'error_one_of')).to.equal('error_one_of');
  });
});
