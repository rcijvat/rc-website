/**
 * Created by rcijvat on 12/21/16.
 */

import * as _ from 'lodash';

export class Image {
  public name;

  constructor(public path: string, public thumb: string) {
    this.name = _(path).split('/').last();
  }
}
