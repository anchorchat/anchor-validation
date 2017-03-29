/* eslint-env mocha */
import { expect } from 'chai';
import { isAlphanumeric } from '../src';

describe('isAlphanumeric', () => {
  it('should return error message if validation fails', () => {
    expect(isAlphanumeric('not@lphanumeric', 'error_not_alphanumeric')).to.equal('error_not_alphanumeric');
  });

  it('should return true if validation fails and no error message is specified', () => {
    expect(isAlphanumeric('not@lphanumeric')).to.equal(true);
  });

  it('should return undefined if value passes check', () => {
    expect(isAlphanumeric('alphanumeric')).to.equal(undefined);
  });
});
