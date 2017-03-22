/* eslint-env mocha */
import { expect } from 'chai';
import { required } from '../src';

describe('required', () => {
  it('should return undefined if value is provided', () => {
    expect(required('defined')).to.equal(undefined);
  });

  it('should return "Required" if no value is provided', () => {
    expect(required()).to.equal('Required');
  });
});
