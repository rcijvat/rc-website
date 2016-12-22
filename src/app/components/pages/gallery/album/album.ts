import * as _ from 'lodash';

import {Image} from './image';

/**
 * Created by rcijvat on 12/21/16.
 */

export class Album {
  constructor(public name: string, public images: Image[]) {}
}
