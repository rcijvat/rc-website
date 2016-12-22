import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/toPromise';

import {Album} from './album/album';
import {Image} from './album/image';


@Injectable()
export class GalleryService {

  private albumsPromise = null;

  constructor(private http: Http) { }

  getAlbums(): Promise<Album[]> {
    if (this.albumsPromise) {
      return this.albumsPromise;
    }
    return this.albumsPromise = this.http.get('/gallery/albums')
      .toPromise()
      .then((response: any) => {
        let albumsJson = response.json();
        let albums: Album[] = [];
        _.each(albumsJson, (albumJson: any) => {
          let images: Image[] = [];
          if (!_.isObject(albumJson) || !_.isString(albumJson.name)) {
            return;
          }
          _.each(albumJson.images, (image: any) => {
            if (_.isObject(image) && _.isString(image.path) && _.isString(image.thumb)) {
              images.push(new Image(image.path, image.thumb));
            }
          });
          albums.push(new Album(albumJson.name, images));
        });
        return albums;
      }, (err: any) => {
        this.albumsPromise = null;
        throw err;
      });
  }
}
