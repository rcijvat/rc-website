import * as _ from 'lodash';

/**
 * Created by rcijvat on 12/26/16.
 */

export class Translation {

  public translations: string[] = [];

  constructor(public spanish: string, translation: string, translationSplitter: string = '/') {
    this.addTranslation(translation, translationSplitter);
  }

  public addTranslation(translation: string, translationSplitter: string = '/') {
    let newTranslations: string[] = _(translation)
      .split(translationSplitter)
      .map((s) => s.trim())
      .filter(_.negate(_.isEmpty))
      .value();

    this.translations = _.concat(this.translations, newTranslations);
  }
}
