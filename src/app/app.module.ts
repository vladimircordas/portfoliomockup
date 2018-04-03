import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { RightsideComponent } from './rightside/rightside.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AlertModule } from 'ngx-bootstrap';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './contact/contact.component';

import { GallerylogosComponent } from './gallerylogos/gallerylogos.component';
import { GallerybusinesscComponent } from './gallerybusinessc/gallerybusinessc.component';
import { GallerybookiluComponent } from './gallerybookilu/gallerybookilu.component';
import { GalleryillustrationsComponent } from './galleryillustrations/galleryillustrations.component';

import { NgxGalleryModule } from 'ngx-gallery';
import { trigger, style, transition, animate, group } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
    LeftsideComponent,
    RightsideComponent,
    TopbarComponent,
    HomeComponent,
    AboutComponent,
    MyworkComponent,
    ContactComponent,
    GallerylogosComponent,
    GallerybusinesscComponent,
    GallerybookiluComponent,
    GalleryillustrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
