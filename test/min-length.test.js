/* eslint-env mocha */
import { expect } from 'chai';
import { minLength } from '../src';

describe('minLength', () => {
  it('should return minLength(number) function if only a number is provided', () => {
    expect(minLength(15)).to.be.a('function');
  });

  it('should return error message if validation fails', () => {
    expect(minLength(10)('123456789', 'error_min_length')).to.equal('error_min_length');
  });

  it('should return undefined if value passes check', () => {
    expect(minLength(9)('123456789', 'error_min_length')).to.equal(undefined);
  });
});
