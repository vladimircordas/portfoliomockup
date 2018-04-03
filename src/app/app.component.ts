import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ParamMap } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";


import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  stagger,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateX(500px) rotate(0)'
              }),
              animate(
                '0.25s ease-in-out',
                style({ opacity: 1, transform: 'translateX(0) rotate(0)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('0.25s', style({ opacity: 0 })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})

export class AppComponent implements OnInit {
  
      
      public isCollapsed = true;
      constructor(private router: Router, private location: Location) { }
      
      ngOnInit() {
        var homebtn = document.getElementById('home-btn');
        var aboutbtn = document.getElementById('about-btn');
        var gallerybtn = document.getElementById('gallery-btn');
        var contactbtn = document.getElementById('contact-btn');
        var home = document.getElementById('home');
        var about = document.getElementById('about');
        var gallery = document.getElementById('gallery-btns');
        var contact = document.getElementById('contact');

        

        window.onload = () => {
          if ( homebtn.classList.contains('active')) {
            home.style.display = "block";
            about.style.display = "none";
            gallery.style.display = "none";
            contact.style.display = "none";
          } else if ( aboutbtn.classList.contains('active')) {
            home.style.display = "none";
            about.style.display = "block";
            gallery.style.display = "none";
            contact.style.display = "none";
          } else if ( gallerybtn.classList.contains('active')) {
            home.style.display = "none";
            about.style.display = "none";
            gallery.style.display = "block";
            contact.style.display = "none";
          } else if ( contactbtn.classList.contains('active')) {
            home.style.display = "none";
            about.style.display = "none";
            gallery.style.display = "none";
            contact.style.display = "block";
          }
        }
        console.log(homebtn.classList);
        console.log(home);
        homebtn.addEventListener("click", () => { 
        
          if ( homebtn.classList.contains('active')) {
            home.style.display = "block";
            about.style.display = "none";
            gallery.style.display = "none";
            contact.style.display = "none";
          }
        });
        
        aboutbtn.addEventListener("click", () => { 
          
          if ( aboutbtn.classList.contains('active')) {
            home.style.display = "none";
            about.style.display = "block";
            gallery.style.display = "none";
            contact.style.display = "none";
          }
        });
        gallerybtn.addEventListener("click", () => { 
          
          if ( gallerybtn.classList.contains('active')) {
            home.style.display = "none";
            about.style.display = "none";
            gallery.style.display = "block";
            contact.style.display = "none";
          }
        });
        contactbtn.addEventListener("click", () => { 
        
          if ( contactbtn.classList.contains('active')) {
            home.style.display = "none";
            about.style.display = "none";
            gallery.style.display = "none";
            contact.style.display = "block";
          }
        });


        var logo : HTMLElement = document.getElementById('logos-btn') as HTMLElement;
        var busi : HTMLElement = document.getElementById('busi-btn') as HTMLElement;
        var book : HTMLElement = document.getElementById('book-btn') as HTMLElement;
        var illu : HTMLElement = document.getElementById('illu-btn') as HTMLElement;
        
        logo.addEventListener("click", () => { 
          var logoClick : HTMLElement  = document.getElementById('logo-anim') as HTMLElement;
          logoClick.click();
        });
        busi.addEventListener("click", () => { 
          var busiClick : HTMLElement  = document.getElementById('busi-anim') as HTMLElement;
          busiClick.click();
        });
        book.addEventListener("click", () => { 
          var bookClick : HTMLElement  = document.getElementById('book-anim') as HTMLElement;
          bookClick.click();
        });
        illu.addEventListener("click", () => { 
          var illuClick : HTMLElement  = document.getElementById('illu-anim') as HTMLElement;
          illuClick.click();
        });
      }
      
      
  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'home';
  }
}
