import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';

import { AppRoutingModule }     from './app-routing.module';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import {GalleryService} from './components/pages/gallery/gallery.service';
import {SpanishTrainingService} from './components/pages/spanish-training/spanish-training.service';
import { AlbumComponent } from './components/pages/gallery/album/album.component';
import { GalleryHomeComponent } from './components/pages/gallery/gallery-home/gallery-home.component';
import {ModalModule} from 'ng2-bootstrap';
import { SpanishTrainingComponent } from './components/pages/spanish-training/spanish-training.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    HomeComponent,
    GalleryComponent,
    AboutusComponent,
    NavbarComponent,
    NotfoundComponent,
    AlbumComponent,
    HomeComponent,
    GalleryHomeComponent,
    SpanishTrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    AppRoutingModule
  ],
  providers: [
    GalleryService,
    SpanishTrainingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
