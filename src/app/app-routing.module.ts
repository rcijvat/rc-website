/**
 * Created by rcijvat on 12/10/16.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './components/pages/home/home.component';
import { GalleryComponent }     from './components/pages/gallery/gallery.component';
import { AboutusComponent }     from './components/pages/aboutus/aboutus.component';
import { NotfoundComponent }     from './components/pages/notfound/notfound.component';
import {GalleryHomeComponent} from './components/pages/gallery/gallery-home/gallery-home.component';
import {AlbumComponent} from './components/pages/gallery/album/album.component';
import {SpanishTrainingComponent} from './components/pages/spanish-training/spanish-training.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',     component: HomeComponent },
  { path: 'gallery',  component: GalleryComponent,
    children: [
      { path: '', component: GalleryHomeComponent },
      { path: ':id', component: AlbumComponent }
    ]
  },
  { path: 'aboutus',  component: AboutusComponent },
  { path: 'spanish-training', component: SpanishTrainingComponent },
  { path: '**',       component: NotfoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
