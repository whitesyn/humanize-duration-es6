import assert from 'assert';
import fs from 'fs';
import path from 'path';
import parseCSV from 'csv-parse';
import { before, describe, it } from 'mocha';

import Humanizer from '../index';

const OPTIONS = {
  delimiter: '+',
  units: ['y', 'mo', 'w', 'd', 'h', 'm', 's', 'ms'],
};

describe('localized humanization', () => {
  const definitionsPath = path.resolve(__dirname, 'definitions');
  const files = fs.readdirSync(definitionsPath);

  const languages = files.reduce((result, file) => {
    let filename = null;
    if (path.extname(file) === '.csv') {
      filename = result.concat(path.basename(file, '.csv'));
    }
    return filename;
  }, []).filter(filename => filename !== null);

  languages.forEach((language) => {
    describe(`for ${language}`, () => {
      let pairs = [];

      before((done) => {
        const file = path.resolve(definitionsPath, `${language}.csv`);
        fs.readFile(file, { encoding: 'utf8' }, (errRead, data) => {
          if (errRead) {
            return done(errRead);
          }

          parseCSV(data, { delimiter: '$' }, (errParse, rows) => {
            if (errParse) {
              return done(errParse);
            }

            pairs = rows.map(r => [parseFloat(r[0]), r[1]]);

            done();
            return null;
          });

          return null;
        });
      });

      it('humanizes with a humanizer', () => {
        pairs.forEach((pair) => {
          // eslint-disable-next-line import/no-dynamic-require,global-require
          const locale = require(`../src/locale/${language}.js`).default;

          const humanizer = new Humanizer(locale, OPTIONS);
          const result = humanizer.humanize(pair[0]);
          assert.equal(result, pair[1]);
        });
      });
    });
  });
});
