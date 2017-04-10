import assert from 'assert';
import { describe, it } from 'mocha';

import localeEn from '../src/locale/en';
import Humanizer from '../index';

describe('humanizer', () => {
  it('humanizes English when passed no arguments', () => {
    const h = new Humanizer(localeEn);

    assert.equal(h.humanize(1000), '1 second');
  });

  it('humanizes English when passed an empty object', () => {
    const h = new Humanizer(localeEn, {});

    assert.equal(h.humanize(1000), '1 second');
  });

  it('can change the delimiter', () => {
    const h = new Humanizer(localeEn, { delimiter: '+' });

    assert.equal(h.humanize(0), '0 seconds');
    assert.equal(h.humanize(1000), '1 second');
    assert.equal(h.humanize(363000), '6 minutes+3 seconds');
  });

  it('can change the spacer', () => {
    const h = new Humanizer(localeEn, { spacer: ' whole ' });

    assert.equal(h.humanize(0), '0 whole seconds');
    assert.equal(h.humanize(1000), '1 whole second');
    assert.equal(h.humanize(260040000), '3 whole days, 14 whole minutes');
  });

  it('can use a conjunction', () => {
    const h = new Humanizer(localeEn, { conjunction: ' and ' });

    assert.equal(h.humanize(0), '0 seconds');
    assert.equal(h.humanize(1000), '1 second');
    assert.equal(h.humanize(260040000), '3 days and 14 minutes');
    assert.equal(h.humanize(10874000), '3 hours, 1 minute, and 14 seconds');
  });

  it('can use a conjunction without a serial comma', () => {
    const h = new Humanizer(localeEn, {
      conjunction: ' & ',
      serialComma: false,
    });

    assert.equal(h.humanize(1000), '1 second');
    assert.equal(h.humanize(260040000), '3 days & 14 minutes');
    assert.equal(h.humanize(10874000), '3 hours, 1 minute & 14 seconds');
  });

  it('can change the units', () => {
    const h = new Humanizer(localeEn, { units: ['d'] });
    const ONE_HOUR_IN_MS = 60 * 60 * 1000;
    const ONE_DAY_IN_MS = 24 * ONE_HOUR_IN_MS;

    assert.equal(h.humanize(0), '0 days');
    assert.equal(h.humanize(6 * ONE_HOUR_IN_MS), '0.25 days');
    assert.equal(h.humanize(7 * ONE_DAY_IN_MS), '7 days');
  });

  it('can overwrite the unit measures in the initializer', () => {
    const h = new Humanizer(localeEn, {
      unitMeasures: {
        y: 10512000000,
        mo: 864000000,
        w: 144000000,
        d: 28800000,
        h: 3600000,
        m: 60000,
        s: 1000,
        ms: 1,
      },
    });

    assert.equal(h.humanize(1000), '1 second');
    assert.equal(h.humanize(3600000), '1 hour');
    assert.equal(h.humanize(28800000), '1 day');
    assert.equal(h.humanize(144000000), '1 week');
  });

  it('can change the decimal', () => {
    const h = new Humanizer(localeEn, {
      units: ['s'],
      decimal: 'what',
    });

    assert.equal(h.humanize(1234), '1what234 seconds');
    assert.equal(h.humanize(1234, {
      decimal: '!!',
    }), '1!!234 seconds');
  });

  it('can do simple rounding', () => {
    const h = new Humanizer(localeEn, { round: true });

    assert.equal(h.humanize(0), '0 seconds');
    assert.equal(h.humanize(499), '0 seconds');
    assert.equal(h.humanize(500), '1 second');
    assert.equal(h.humanize(1000), '1 second');
    assert.equal(h.humanize(1499), '1 second');
    assert.equal(h.humanize(1500), '2 seconds');
    assert.equal(h.humanize(1500), '2 seconds');
    assert.equal(h.humanize(121499), '2 minutes, 1 second');
    assert.equal(h.humanize(121500), '2 minutes, 2 seconds');
  });

  it('can do rounding with the "units" option', () => {
    const h = new Humanizer(localeEn, { round: true });

    assert.equal(h.humanize(86364000, { units: ['y', 'mo', 'w', 'd', 'h'] }), '1 day');
    assert.equal(h.humanize(1209564000, { units: ['y', 'mo', 'w', 'd', 'h'] }), '2 weeks');
    assert.equal(h.humanize(3692131200000, { units: ['y', 'mo'] }), '117 years');
    assert.equal(h.humanize(3692131200001, { units: ['y', 'mo', 'w', 'd', 'h', 'm'] }), '116 years, 11 months, 4 weeks, 1 day, 4 hours, 30 minutes');
  });

  it('can do rounding with the "largest" option', () => {
    const h = new Humanizer(localeEn, { round: true });

    assert.equal(h.humanize(3692131200000, { largest: 1 }), '117 years');
    assert.equal(h.humanize(3692131200000, { largest: 2 }), '117 years');
    assert.equal(h.humanize(3692131200001, { largest: 100 }), '116 years, 11 months, 4 weeks, 1 day, 4 hours, 30 minutes');
    assert.equal(h.humanize(2838550, { largest: 3 }), '47 minutes, 19 seconds');
  });

  it('can ask for the largest units', () => {
    const h = new Humanizer(localeEn, { largest: 2 });

    assert.equal(h.humanize(0), '0 seconds');
    assert.equal(h.humanize(1000), '1 second');
    assert.equal(h.humanize(2000), '2 seconds');
    assert.equal(h.humanize(540360012), '6 days, 6 hours');
    assert.equal(h.humanize(540360012), '6 days, 6 hours');
    assert.equal(h.humanize(540360012, { largest: 3 }), '6 days, 6 hours, 6 minutes');
    assert.equal(h.humanize(540360012, { largest: 100 }), '6 days, 6 hours, 6 minutes, 0.012 seconds');
  });

  it('has options which can be modified', () => {
    const h = new Humanizer(localeEn);

    assert.equal(h.humanize(363000), '6 minutes, 3 seconds');

    h.options.delimiter = '+';
    assert.equal(h.humanize(363000), '6 minutes+3 seconds');

    h.options.units = ['m'];
    assert.equal(h.humanize(363000), '6.05 minutes');
  });

  it('can add a new language', () => {
    const h = new Humanizer({
      y() { return 'y'; },
      s() { return 'sec'; },
    });

    assert.equal(h.humanize(1000), '1 sec');
  });

  it('can overwrite an existing language', () => {
    const enOverride = Object.assign({}, localeEn, {
      y() { return 'y'; },
      mo() { return 'mo'; },
      w() { return 'w'; },
      d() { return 'd'; },
      h() { return 'h'; },
      m() { return 'm'; },
      s() { return 's'; },
      ms() { return 'ms'; },
      decimal: '.',
    });

    const h = new Humanizer(enOverride);

    assert.equal(h.humanize(1000), '1 s');
    assert.equal(h.humanize(15600000), '4 h, 20 m');
  });

  it('can overwrite the languages property in the initializer', () => {
    const h = new Humanizer({
      y: () => 'y',
      mo: () => 'mo',
      w: () => 'w',
      d: () => 'd',
      h: () => 'h',
      m: () => 'm',
      s: () => 's',
      ms: () => 'ms',
      decimal: '.',
    });

    assert.equal(h.humanize(1000), '1 s');
    assert.equal(h.humanize(15600000), '4 h, 20 m');
  });
});
