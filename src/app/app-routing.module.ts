import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './contact/contact.component';

import { GallerylogosComponent } from './gallerylogos/gallerylogos.component';
import { GallerybusinesscComponent } from './gallerybusinessc/gallerybusinessc.component';
import { GallerybookiluComponent } from './gallerybookilu/gallerybookilu.component';
import { GalleryillustrationsComponent } from './galleryillustrations/galleryillustrations.component';

const routes: Routes = [

{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full' },

{
  path: 'home',
  component: HomeComponent,
  data: { page: 'home' } 
},
{
  path: 'about',
  component: AboutComponent,
  data: { page: 'about' } 
},
{
  path: 'mywork',
  component: MyworkComponent,
  data: { page: 'mywork' },
  children: [
    {path: '', redirectTo: 'logos', pathMatch: 'full'},
    {path: 'logos', component: GallerylogosComponent},
    {path: 'businesscards', component: GallerybusinesscComponent},
    {path: 'bookillustrations', component: GallerybookiluComponent},
    {path: 'illustrations', component: GalleryillustrationsComponent},
  ] 
},
{
  path: 'contact',
  component: ContactComponent,
  data: { page: 'contact' } 
},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}