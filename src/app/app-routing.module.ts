import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './main/rightside/about/about.component';
import { MyworkComponent } from './main/rightside/mywork/mywork.component';
import { ContactComponent } from './main/rightside/contact/contact.component';

import { GallerylogosComponent } from './main/rightside/mywork/gallerylogos/gallerylogos.component';
import { GallerybusinesscComponent } from './main/rightside/mywork/gallerybusinessc/gallerybusinessc.component';
import { GallerybookiluComponent } from './main/rightside/mywork/gallerybookilu/gallerybookilu.component';
import { GalleryillustrationsComponent } from './main/rightside/mywork/galleryillustrations/galleryillustrations.component';
import { GallerydisneyprincessComponent } from './main/rightside/mywork/gallerydisneyprincess/gallerydisneyprincess.component';
import { GalleryotherworkComponent } from './main/rightside/mywork/galleryotherwork/galleryotherwork.component';
import { GalleryoldportfolioComponent } from './main/rightside/mywork/galleryoldportfolio/galleryoldportfolio.component';

const routes: Routes = [

{
  path: '',
  redirectTo: 'intro',
  pathMatch: 'full' 
},
{
  path: 'intro',
  component: IntroComponent,
  data: { page: 'intro' }
},
{
  path: 'main',
  component: MainComponent,
  data: { page: 'main' },
  children: [
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
      {path: '', redirectTo: 'woodscreative', pathMatch: 'full'},
      {path: 'woodscreative', component: GallerylogosComponent},
      {path: 'nitea', component: GallerybusinesscComponent},
      {path: 'melimaya', component: GallerybookiluComponent},
      {path: 'escapeplan', component: GalleryillustrationsComponent},
      {path: 'disneyprincesscastle', component: GallerydisneyprincessComponent},
      {path: 'oldportfolio', component: GalleryoldportfolioComponent},
      {path: 'otherwork', component: GalleryotherworkComponent},
    ] 
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { page: 'contact' } 
  },
  ]}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}