import assert from 'assert';
import { describe, it } from 'mocha';

import Humanizer from '../index';

describe('error handling', () => {
  it('throws an error when passed a bad language in the function', () => {
    function humanizingWith() {
      return () => {
        const h = new Humanizer();
        h.humanize(10000);
      };
    }

    assert.throws(humanizingWith({}), Error);
  });

  it('throws an error when no passed language in a humanizer', () => {
    function humanizing(language) {
      return () => new Humanizer(language);
    }

    assert.throws(humanizing(), Error);
    assert.doesNotThrow(humanizing({}), Error);
  });
});
