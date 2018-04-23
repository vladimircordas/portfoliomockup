import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-galleryotherwork',
  templateUrl: './galleryotherwork.component.html',
  styleUrls: ['./galleryotherwork.component.scss']
})
export class GalleryotherworkComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '90%',
        image: false,
        height: '700px',
        thumbnailsColumns: 3,
        thumbnailsRows: 3,
        thumbnailsArrows: true,
        imageDescription: true,
        imageArrows: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        imageSwipe: true,
        thumbnailsSwipe: true,
        previewKeyboardNavigation: true,
        previewDescription : true,
        previewSwipe : true,
        imageAnimation: NgxGalleryAnimation.Zoom,
        arrowPrevIcon: "triangle-left",
        arrowNextIcon: "triangle-right", 
        
        
      },{ "breakpoint": 1366, "width": "90%", "height": "550px", "thumbnailsColumns": 3, "thumbnailsRows": 2, },
      ,{ "breakpoint": 823, "width": "100%", "height": "200px", "thumbnailsColumns": 2, "thumbnailsRows": 1, },
      ,{ "breakpoint": 420, "width": "100%", "height": "400px", "thumbnailsColumns": 1, "thumbnailsRows": 2, },
      ,{ "breakpoint": 320, "width": "100%", "height": "350px", "thumbnailsColumns": 1, "thumbnailsRows": 2, }
    ];

   

    this.galleryImages = [
      {
        small: './assets/workcom-promo.png',
        medium: './assets/workcom-promo.png',
        big: './assets/workcom-promo.png',
        description: "Workcom promo campaign, kickofflabs CMS.",
        
      },
      {
        small: './assets/workcom-platform.png',
        medium: './assets/workcom-platform.png',
        big: './assets/workcom-platform.png',
        description: "Workcom landing page and app mockups, switched to angular later on.",
      },
      {
        small: './assets/milipol.png',
        medium: './assets/milipol.png',
        big: './assets/milipol.png',
        description: "Milipol website front-end, for acropont.ca.",
      },
      {
        small: './assets/acropont.png',
        medium: './assets/acropont.png',
        big: './assets/acropont.png',
        description: "Acropont.ca promo website.",
      },
      {
        small: './assets/superduper.png',
        medium: './assets/superduper.png',
        big: './assets/superduper.png',
        description: "Superduper webshop front-end, for acropont.ca.",
      },
      {
        small: './assets/canadas-gunshop.png',
        medium: './assets/canadas-gunshop.png',
        big: './assets/canadas-gunshop.png',
        description: "Canada's gunshop front-end, for acropont.ca.",
      },
      {
        small: './assets/energic.png',
        medium: './assets/energic.png',
        big: './assets/energic.png',
        description: "Energic landing page, for HeavyForm creative agency.",
      },
      {
        small: './assets/chips3.png',
        medium: './assets/chips3.png',
        big: './assets/chips3.png',
        description: "Chipsway landing page/mockup, for HeavyForm creative agency.",
      },
      {
        small: './assets/chips1.png',
        medium: './assets/chips1.png',
        big: './assets/chips1.png',
        description: "Chipsway facebook mini game, for HeavyForm creative agency.",
      },
      {
        small: './assets/chips2.png',
        medium: './assets/chips2.png',
        big: './assets/chips2.png',
        description: "Chipsway facebook mini game, for HeavyForm creative agency.",
      },
      
    ];
  }
}