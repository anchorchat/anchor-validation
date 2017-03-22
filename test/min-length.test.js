/* eslint-env mocha */
import { expect } from 'chai';
import { minLength } from '../src';

describe('minLength', () => {
  it('should return minLength(number) function if only a number is provided', () => {
    expect(minLength(15)).to.be.a('function');
  });

  it('should return "Must be atleast 10 characters" if both values are provided', () => {
    expect(minLength(10)('123456789')).to.equal('Must be atleast 10 characters');
  });

  it('should return undefined if value passes check', () => {
    expect(minLength(9)('123456789')).to.equal(undefined);
  });
});
