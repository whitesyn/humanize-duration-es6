import assert from 'assert';
import { describe, it } from 'mocha';

const pkg = require('../package.json');

describe('package.json', () => {
  it('has `bugs`', () => {
    assert.equal(typeof pkg.bugs, 'string');
  });
});
