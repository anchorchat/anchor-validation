/* eslint-env mocha */
import { expect } from 'chai';
import { validDate } from '../src';

describe('validDate', () => {
  it('should return validDate function if only a date format is provided', () => {
    expect(validDate('YYYY-MM-DD')).to.be.a('function');
  });

  it('should return error message if validation fails', () => {
    expect(validDate('YYYY-MM-DD')('05-12-1991', 'error_date')).to.equal('error_date');
  });

  it('should return true if validation fails and no error message is specified', () => {
    expect(validDate('YYYY-MM-DD')('05-12-1991')).to.equal(true);
  });

  it('should return undefined if value passes check', () => {
    expect(validDate('YYYY-MM-DD')('1990-10-10', 'error_date')).to.equal(undefined);
  });
});
