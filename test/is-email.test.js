/* eslint-env mocha */
import { expect } from 'chai';
import { isEmail } from '../src';

describe('isEmail', () => {
  it('should return error message if validation fails', () => {
    expect(isEmail('notemail', 'error_no_email')).to.equal('error_no_email');
  });

  it('should return undefined if value passes check', () => {
    expect(isEmail('test@hotmail.com')).to.equal(undefined);
  });
});
