import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeftsideComponent } from './main/leftside/leftside.component';
import { RightsideComponent } from './main/rightside/rightside.component';
import { TopbarComponent } from './main/topbar/topbar.component';
import { AlertModule } from 'ngx-bootstrap';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AboutComponent } from './main/rightside/about/about.component';
import { MyworkComponent } from './main/rightside/mywork/mywork.component';
import { ContactComponent } from './main/rightside/contact/contact.component';

import { GallerylogosComponent } from './main/rightside/mywork/gallerylogos/gallerylogos.component';
import { GallerybusinesscComponent } from './main/rightside/mywork/gallerybusinessc/gallerybusinessc.component';
import { GallerybookiluComponent } from './main/rightside/mywork/gallerybookilu/gallerybookilu.component';
import { GalleryillustrationsComponent } from './main/rightside/mywork/galleryillustrations/galleryillustrations.component';

import { NgxGalleryModule } from 'ngx-gallery';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';
import { GallerydisneyprincessComponent } from './main/rightside/mywork/gallerydisneyprincess/gallerydisneyprincess.component';
import { GalleryotherworkComponent } from './main/rightside/mywork/galleryotherwork/galleryotherwork.component';
import { GalleryoldportfolioComponent } from './main/rightside/mywork/galleryoldportfolio/galleryoldportfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftsideComponent,
    RightsideComponent,
    TopbarComponent,
    AboutComponent,
    MyworkComponent,
    ContactComponent,
    GallerylogosComponent,
    GallerybusinesscComponent,
    GallerybookiluComponent,
    GalleryillustrationsComponent,
    IntroComponent,
    MainComponent,
    GallerydisneyprincessComponent,
    GalleryotherworkComponent,
    GalleryoldportfolioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
