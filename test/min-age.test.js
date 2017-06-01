/* eslint-env mocha */
import { expect } from 'chai';
import { minAge } from '../src';

describe('minAge', () => {
  it('should return minAge(number) function if only a number is provided', () => {
    expect(minAge(15, 'YYYY-MM-DD')).to.be.a('function');
  });

  it('should return error message if validation fails', () => {
    expect(minAge(10, 'YYYY-MM-DD')('2016-10-10', 'error_min_age')).to.equal('error_min_age');
  });

  it('should return true if validation fails and no error message is specified', () => {
    expect(minAge(10, 'YYYY-MM-DD')('2016-10-10')).to.equal(true);
  });

  it('should return undefined if value passes check', () => {
    expect(minAge(9, 'YYYY-MM-DD')('1990-10-10', 'error_min_age')).to.equal(undefined);
  });
});
