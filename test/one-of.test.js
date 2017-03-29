/* eslint-env mocha */
import { expect } from 'chai';
import { oneOf, isEqual, isAlphanumeric } from '../src';

describe('oneOf', () => {
  it('should return undefined if both validations pass', () => {
    const isEqualValidation = isEqual('test', 'test');
    const isAlphanumericValidation = isAlphanumeric('test', 'test');
    expect(oneOf(isEqualValidation, isAlphanumericValidation, 'error_one_of')).to.equal(undefined);
  });

  it('should return true if validation fails and no error message is specified', () => {
    const isEqualValidation = isEqual('test', 'test');
    const isAlphanumericValidation = isAlphanumeric('test@!', 'test');
    expect(oneOf(isEqualValidation, isAlphanumericValidation)).to.equal(true);
  });

  it('should return error message if validation fails', () => {
    const isEqualValidation = isEqual('test', 'test');
    const isAlphanumericValidation = isAlphanumeric('test@!', 'test');
    expect(oneOf(isEqualValidation, isAlphanumericValidation, 'error_one_of')).to.equal('error_one_of');
  });
});
