/* eslint-env mocha */
import { expect } from 'chai';
import { maxAge } from '../src';

describe('maxAge', () => {
  it('should return maxAge(number) function if only a number is provided', () => {
    expect(maxAge(15, 'YYYY-MM-DD')).to.be.a('function');
  });

  it('should return error message if validation fails', () => {
    expect(maxAge(10, 'YYYY-MM-DD')('1990-10-10', 'error_max_age')).to.equal('error_max_age');
  });

  it('should return true if validation fails and no error message is specified', () => {
    expect(maxAge(10, 'YYYY-MM-DD')('1990-10-10')).to.equal(true);
  });

  it('should return undefined if value passes check', () => {
    expect(maxAge(10, 'YYYY-MM-DD')('2016-10-10', 'error_max_age')).to.equal(undefined);
  });
});
