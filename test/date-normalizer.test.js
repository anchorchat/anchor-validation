/* eslint-env mocha */
import { expect } from 'chai';
import { normalizeDate } from '../src';

describe('normalizeDate', () => {
  it('should return only numbers', () => {
    expect(normalizeDate('')).to.equal('');
    expect(normalizeDate('h')).to.equal('');
    expect(normalizeDate('11')).to.equal('11');
    expect(normalizeDate('11-u')).to.equal('11');
    expect(normalizeDate('11-12')).to.equal('11-12');
    expect(normalizeDate('11-12@anchor.chat')).to.equal('11-12');
    expect(normalizeDate('11-12-2017')).to.equal('11-12-2017');
    expect(normalizeDate('11-12-2er')).to.equal('11-12-2');
  });
});
