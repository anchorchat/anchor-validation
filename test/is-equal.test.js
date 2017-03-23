/* eslint-env mocha */
import { expect } from 'chai';
import { isEqual } from '../src';

describe('isEqual', () => {
  it('should return error message if validation fails', () => {
    expect(isEqual('first string', 'second string', 'error_not_equal')).to.equal('error_not_equal');
  });

  it('should return undefined if value passes check', () => {
    expect(isEqual('same string', 'same string', 'error_not_equal')).to.equal(undefined);
  });
});
