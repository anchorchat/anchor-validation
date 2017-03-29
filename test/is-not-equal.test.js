/* eslint-env mocha */
import { expect } from 'chai';
import { isNotEqual } from '../src';

describe('isNotEqual', () => {
  it('should return error message if validation fails', () => {
    expect(isNotEqual('same string', 'same string', 'error_not_equal')).to.equal('error_not_equal');
  });

  it('should return true if validation fails and no error message is specified', () => {
    expect(isNotEqual('same string', 'same string')).to.equal(true);
  });

  it('should return undefined if value passes check', () => {
    expect(isNotEqual('first string', 'second string', 'error_not_equal')).to.equal(undefined);
  });
});
