import * as _ from 'lodash';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Album} from './album';
import {GalleryService} from '../gallery.service';
import {ModalDirective} from 'ng2-bootstrap';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  private id: number = -1;
  private albums: Album[] = null;
  private album: Album = null;

  @ViewChild('imageModal')
  private imageModal: ModalDirective;

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

  private showImageModal(imageIndex: number): void {
    this.album.setActiveImage(imageIndex);
    this.imageModal.show();
  }

  private hideImageModal(): void {
    this.album.setActiveImage(-1);
    this.imageModal.hide();
  }
}
