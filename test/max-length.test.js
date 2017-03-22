/* eslint-env mocha */
import { expect } from 'chai';
import { maxLength } from '../src';

describe('maxLength', () => {
  it('should return maxLength(number) function if only a number is provided', () => {
    expect(maxLength(15)).to.be.a('function');
  });

  it('should return "Must be 10 characters or less" if both values are provided', () => {
    expect(maxLength(10)('12345678910')).to.equal('Must be 10 characters or less');
  });

  it('should return undefined if value passes check', () => {
    expect(maxLength(10)('123456789')).to.equal(undefined);
  });
});
