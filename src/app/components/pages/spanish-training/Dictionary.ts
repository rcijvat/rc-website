/**
 * Created by rcijvat on 12/26/16.
 */

import * as _ from 'lodash';

import {Translation} from './Translation';

export interface TranslationDetails {
  translation: Translation;
  show: boolean;
  attempts: number;
}

interface TranslationDetailsDict {
  [spanish: string]: TranslationDetails
}

export class Dictionary {
  private dict: TranslationDetailsDict = {};

  constructor(rawString: string, lineSeparator: string = "\n", wordSeparator: string = ":", lhsIsSpanish: boolean = true) {
    let lines: string[] = _(rawString).split(lineSeparator).filter(_.invert(_.isEmpty)).value();
    _.each(lines, (line: string) => {
      let parts: string[] = _.split(line, wordSeparator);
      if (_.size(parts) == 2) {
        let spanish: string     = (lhsIsSpanish ? parts[0] : parts[1]).trim();
        let translation: string = (lhsIsSpanish ? parts[1] : parts[0]).trim();

        if (spanish in this.dict) {
          this.dict[spanish].translation.addTranslation(translation);
        } else {
          this.dict[spanish] = {
            translation: new Translation(spanish, translation),
            show: true,
            attempts: 0
          };
        }
      }
    });
  }

  public randomTranslation(): TranslationDetails {
    console.log(this.dict);
    let shownTranslations: TranslationDetails[] = _.filter(_.values(this.dict), {show: true});
    console.log(shownTranslations);
    if (shownTranslations.length > 0) {
      let randomIndex: number = _.random(0, shownTranslations.length - 1);
      return _.cloneDeep(shownTranslations[randomIndex]);
    }
    return null;
  }

  public hide(translation: Translation) {
    if (translation.spanish in this.dict) {
      this.dict[translation.spanish].show = false;
    }
  }

  public increaseAttempts(translation: Translation) {
    if (translation.spanish in this.dict) {
      ++this.dict[translation.spanish].attempts;
    }
  }
}
