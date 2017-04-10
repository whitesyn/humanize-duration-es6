Humanize Duration
=================
[![npm version](https://badge.fury.io/js/humanize-duration-es6.svg)](https://npmjs.org/package/humanize-duration-es6)
[![build status](https://travis-ci.org/whitesyn/humanize-duration-es6.svg?branch=master)](https://travis-ci.org/whitesyn/humanize-duration-es6)

ES6 version of the [humanize-duration](https://github.com/EvanHahn/HumanizeDuration.js) library with some modifications. 

Converts the time in milliseconds to something like "30 minutes" or "3 days, 1 hour".

Basic usage
-----------

This package is available as *humanize-duration-es6* on [npm](https://www.npmjs.com/package/humanize-duration-es6).

```js
import Humanizer from 'humanize-duration-es6';
import localeEn from 'humanize-duration-es6/src/locale/en'

const h = new Humanizer(localeEn);
h.humanize(12000);
```

Usage
-----

By default, library will humanize down to the second, and will return a decimal for the smallest unit.

```js
h.humanize(3000)      // '3 seconds'
h.humanize(2250)      // '2.25 seconds'
h.humanize(97320000)  // '1 day, 3 hours, 2 minutes'
```

### Options

You can change the settings by passing options as the second argument:

**delimiter**

String to display between the previous unit and the next value.

```js
h.humanize(22140000, { delimiter: ' and ' })  // '6 hours and 9 minutes'
h.humanize(22140000, { delimiter: '--' })     // '6 hours--9 minutes'
```

**spacer**

String to display between each value and unit.

```js
h.humanize(260040000, { spacer: ' whole ' })  // '3 whole days, 14 whole minutes'
h.humanize(260040000, { spacer: '' })         // '3days, 14minutes'
```

**largest**

Number representing the maximum number of units to display for the duration.

```js
h.humanize(1000000000000)                  // '31 years, 8 months, 1 week, 19 hours, 46 minutes, 40 seconds'
h.humanize(1000000000000, { largest: 2 })  // '31 years, 8 month'
```

**units**

Array of strings to define which units are used to display the duration (if needed). Can be one, or a combination of any, of the following: `['y', 'mo', 'w', 'd', 'h', 'm', 's', 'ms']`

```js
h.humanize(3600000, { units: ['h'] })       // '1 hour'
h.humanize(3600000, { units: ['m'] })       // '60 minutes'
h.humanize(3600000, { units: ['d', 'h'] })  // '1 hour'
```

**round**

Boolean value. Use `true` to [round](https://en.wikipedia.org/wiki/Rounding#Round_half_up) the smallest unit displayed (can be combined with `largest` and `units`).

```js
h.humanize(1200)                   // '1.2 seconds'
h.humanize(1200, { round: true })  // '1 second'
h.humanize(1600, { round: true })  // '2 seconds'
```

**decimal**

String to substitute for the decimal point in a decimal fraction.

```js
h.humanize(1200)                          // '1.2 seconds'
h.humanize(1200, { decimal: ' point ' })  // '1 point 2 seconds'
```

**conjunction**

String to include before the final unit. You can also set `serialComma` to `false` to eliminate the final comma.

```js
h.humanize(22140000, { conjunction: ' and ' })                      // '6 hours and 9 minutes'
h.humanize(22141000, { conjunction: ' and ' })                      // '6 hours, 9 minutes, and 1 second'
h.humanize(22140000, { conjunction: ' and ', serialComma: false })  // '6 hours and 9 minutes'
h.humanize(22141000, { conjunction: ' and ', serialComma: false })  // '6 hours, 9 minutes and 1 second'
```

**unitMeasures**

Customize the value used to calculate each unit of time.

```js
h.humanize(400)    // '0.4 seconds'
h.humanize(400, {  // '1 year, 1 month, 5 days'
  unitMeasures: {
    y: 365,
    mo: 30,
    w: 7,
    d: 1
  }
})
```

**Combined example**

```js
h.humanize(3602000, {
  round: true,
  spacer: ' great ',
  units: ['m']
})
// '60 great minutes'
```

### Languages

You can also add new languages. For example:

```js
import Humanizer from 'humanize-duration-es6';

const shortEnLocale = {
  y: () => "y",
  mo: () => "mo",
  w: () => "w",
  d: () => "d",
  h: () => "h",
  m: () => "m",
  s: () => "s",
  ms: () => "ms",
  decimal: () => "."
};
const shortEnglishHumanizer = new Humanizer(shortEnLocale, {
  spacer: "",
  delimiter: " "
});

shortEnglishHumanizer.humanize(15600000)  // '4 h, 20 m'
```

Supported languages
-------------------

Humanize Duration supports the following languages:

| Language             | Code    |
|----------------------|---------|
| Arabic               | `ar`    |
| Catalan              | `ca`    |
| Chinese, simplified  | `zh_CN` |
| Chinese, traditional | `zh_TW` |
| Czech                | `cs`    |
| Danish               | `da`    |
| Dutch                | `nl`    |
| English              | `en`    |
| Finnish              | `fi`    |
| French               | `fr`    |
| German               | `de`    |
| Greek                | `gr`    |
| Hungarian            | `hu`    |
| Icelandic            | `is`    |
| Indonesian           | `id`    |
| Italian              | `it`    |
| Japanese             | `ja`    |
| Korean               | `ko`    |
| Lithuanian           | `lt`    |
| Malay                | `ms`    |
| Norwegian            | `no`    |
| Polish               | `pl`    |
| Portuguese           | `pt`    |
| Russian              | `ru`    |
| Spanish              | `es`    |
| Swedish              | `sv`    |
| Turkish              | `tr`    |
| Ukrainian            | `uk`    |
| Vietnamese           | `vi`    |


Credits
-------

Based on library [humanize-duration](https://github.com/EvanHahn/HumanizeDuration.js)

Licensed under the permissive [Unlicense](http://unlicense.org/).
