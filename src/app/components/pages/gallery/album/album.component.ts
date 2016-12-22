import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Album} from './album';
import {GalleryService} from '../gallery.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  private id: number = -1;
  private albums: Album[] = null;
  private album: Album = null;

  constructor(private route: ActivatedRoute, private galleryService: GalleryService) {
    galleryService.getAlbums().then((albums: Album[]) => {
      this.albums = albums;
      this.loadAlbum();
    }, (err: any) => console.error(err));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
      this.loadAlbum();
    });
  }

  private loadAlbum() {
    _.size(this.albums) && (this.album = this.albums[this.id]);
  }
}
