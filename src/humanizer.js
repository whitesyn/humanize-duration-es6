class Humanizer {
  static get DEFAULT_OPTIONS() {
    return {
      delimiter: ', ',
      spacer: ' ',
      conjunction: '',
      serialComma: true,
      units: ['y', 'mo', 'w', 'd', 'h', 'm', 's'],
      round: false,
      unitMeasures: {
        y: 31557600000,
        mo: 2629800000,
        w: 604800000,
        d: 86400000,
        h: 3600000,
        m: 60000,
        s: 1000,
        ms: 1,
      },
    };
  }

  constructor(locale, options = {}) {
    if (!locale) {
      throw new Error('Humanizer locale is not specified');
    }

    this.locale = locale;
    this.options = Object.assign({}, Humanizer.DEFAULT_OPTIONS, options);
  }

  humanize(milliseconds, optionsOverrides = {}) {
    let ms = Math.abs(milliseconds);

    const dictionary = this.locale;
    const options = Object.assign({}, this.options, optionsOverrides);

    const pieces = [];

    options.units.forEach((unitName, i) => {
      const unitMS = options.unitMeasures[unitName];

      let unitCount;

      // What's the number of full units we can fit?
      if (i + 1 === options.units.length) {
        unitCount = ms / unitMS;
      } else {
        unitCount = Math.floor(ms / unitMS);
      }

      // Add the string.
      pieces.push({
        unitCount,
        unitName,
      });

      // Remove what we just figured out.
      ms -= unitCount * unitMS;
    });

    let firstOccupiedUnitIndex = 0;
    pieces.some((piece, i) => {
      if (piece.unitCount) {
        firstOccupiedUnitIndex = i;
      }

      return !!piece.unitCount;
    });

    if (options.round) {
      let previousPiece;
      let i = pieces.length - 1;

      while (i >= 0) {
        const piece = pieces[i];
        piece.unitCount = Math.round(piece.unitCount);

        if (i === 0) {
          break;
        }

        previousPiece = pieces[i - 1];

        const prevUnitMeasures = options.unitMeasures[previousPiece.unitName];
        const currentUnitMeasures = options.unitMeasures[piece.unitName];
        const ratioToLargerUnit = prevUnitMeasures / currentUnitMeasures;

        if (
          ((piece.unitCount % ratioToLargerUnit) === 0) ||
          (options.largest && ((options.largest - 1) < (i - firstOccupiedUnitIndex)))
        ) {
          previousPiece.unitCount += piece.unitCount / ratioToLargerUnit;
          piece.unitCount = 0;
        }

        i -= 1;
      }
    }

    const result = [];
    pieces.some((piece) => {
      if (piece.unitCount) {
        result.push(Humanizer.render(piece.unitCount, piece.unitName, dictionary, options));
      }

      return (result.length === options.largest);
    });

    let renderedResult;
    if (result.length) {
      if (!options.conjunction || result.length === 1) {
        renderedResult = result.join(options.delimiter);
      } else if (result.length === 2) {
        renderedResult = result.join(options.conjunction);
      } else if (result.length > 2) {
        renderedResult = result.slice(0, -1).join(options.delimiter) +
          (options.serialComma ? ',' : '') + options.conjunction + result.slice(-1);
      }
    } else {
      const type = options.units[options.units.length - 1];
      renderedResult = Humanizer.render(0, type, dictionary, options);
    }

    return renderedResult;
  }

  static render(count, type, dictionary, options) {
    const decimal = (options.decimal === undefined)
      ? dictionary.decimal
      : options.decimal;

    const countStr = count.toString().replace('.', decimal);

    const dictionaryValue = dictionary[type];
    if (!dictionaryValue) {
      throw new Error('Humanizer locale formatter is not specified');
    }

    const word = (typeof dictionaryValue === 'function')
      ? dictionaryValue(count)
      : dictionaryValue;

    return countStr + options.spacer + word;
  }
}

export default Humanizer;
