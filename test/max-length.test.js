/* eslint-env mocha */
import { expect } from 'chai';
import { maxLength } from '../src';

describe('maxLength', () => {
  it('should return maxLength(number) function if only a number is provided', () => {
    expect(maxLength(15)).to.be.a('function');
  });

  it('should return error message if validation fails', () => {
    expect(maxLength(10)('12345678910', 'error_max_length')).to.equal('error_max_length');
  });

  it('should return undefined if value passes check', () => {
    expect(maxLength(10)('123456789', 'error_max_length')).to.equal(undefined);
  });
});
