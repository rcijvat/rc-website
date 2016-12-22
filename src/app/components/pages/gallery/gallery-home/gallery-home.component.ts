import { Component, OnInit } from '@angular/core';
import {Album} from '../album/album';
import {GalleryService} from '../gallery.service';

@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.scss']
})
export class GalleryHomeComponent implements OnInit {

  private albums: Album[];

  constructor(galleryService: GalleryService) {
    galleryService.getAlbums().then((albums: Album[]) => this.albums = albums, (err: any) => console.error(err));
  }

  ngOnInit() {
  }

}
