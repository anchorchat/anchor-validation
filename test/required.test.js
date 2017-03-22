/* eslint-env mocha */
import { expect } from 'chai';
import { required } from '../src';

describe('required', () => {
  it('should return undefined if value is provided', () => {
    expect(required('defined', 'error_required')).to.equal(undefined);
  });

  it('should return error message if validation fails', () => {
    expect(required(undefined, 'error_required')).to.equal('error_required');
  });
});
