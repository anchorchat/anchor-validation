/* eslint-env mocha */
import { expect } from 'chai';
import { normalizeUsername } from '../src';

describe('normalizeUsername', () => {
  it('should return only valid characters', () => {
    expect(normalizeUsername('')).to.equal('');
    expect(normalizeUsername('test')).to.equal('test');
    expect(normalizeUsername('test1')).to.equal('test1');
    expect(normalizeUsername('test_1')).to.equal('test_1');
    expect(normalizeUsername('test-1')).to.equal('test-1');
    expect(normalizeUsername('test1@')).to.equal('test1');
    expect(normalizeUsername('@')).to.equal('');
    expect(normalizeUsername('@test1')).to.equal('test1');
    expect(normalizeUsername('@test!!!')).to.equal('test');
    expect(normalizeUsername('testI')).to.equal('testi');
    expect(normalizeUsername('testlI')).to.equal('testli');
    expect(normalizeUsername('testlII')).to.equal('testlii');
  });
});
