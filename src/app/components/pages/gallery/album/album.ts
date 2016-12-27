import * as _ from 'lodash';

import {Image} from './image';

/**
 * Created by rcijvat on 12/21/16.
 */

export class Album {
  private activeImageIndex: number = -1;

  public activeImage: Image = null;

  constructor(public name: string, public images: Image[]) {}

  public setActiveImage(imageIndex: number): void {
    this.activeImageIndex = imageIndex;
    this.activeImage = this.images[imageIndex];

    if (!this.activeImage) {
      this.activeImageIndex = -1;
      this.activeImage = null;
    }
  }

  public hasPrevious() {
    return this.activeImageIndex > 0;
  }

  public hasNext() {
    return this.activeImageIndex < _.size(this.images);
  }

  public previous() {
    if (this.hasPrevious()) {
      --this.activeImageIndex;
      this.activeImage = this.images[this.activeImageIndex];
    }
  }

  public next() {
    if (this.hasNext()) {
      ++this.activeImageIndex;
      this.activeImage = this.images[this.activeImageIndex];
    }
  }
}
