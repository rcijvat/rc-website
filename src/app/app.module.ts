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
import { AlbumComponent } from './components/pages/gallery/album/album.component';
import { GalleryHomeComponent } from './components/pages/gallery/gallery-home/gallery-home.component';

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
    GalleryHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
