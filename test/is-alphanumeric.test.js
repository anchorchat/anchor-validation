/* eslint-env mocha */
import { expect } from 'chai';
import { isAlphanumeric } from '../src';

describe('isAlphanumeric', () => {
  it('should return "Must be alphanumeric" if string is not alphanumeric', () => {
    expect(isAlphanumeric('not@lphanumeric')).to.equal('Must be alphanumeric');
  });

  it('should return undefined if value passes check', () => {
    expect(isAlphanumeric('alphanumeric')).to.equal(undefined);
  });
});
