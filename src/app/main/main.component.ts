import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ParamMap } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";


import { AppComponent } from '../app.component';

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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})

export class MainComponent implements OnInit {

    public isCollapsed = true;
    constructor(private router: Router, private location: Location) { }
    
    ngOnInit() {
      
      var aboutbtn = document.getElementById('about-btn');
      var gallerybtn = document.getElementById('gallery-btn');
      var contactbtn = document.getElementById('contact-btn');
      var about = document.getElementById('about');
      var contact = document.getElementById('contact');
      
      aboutbtn.addEventListener('click', function(){
        document.getElementById('profile-picture').style.display = "block";
        document.getElementById('profile-logo').style.display = "none";
      });
      gallerybtn.addEventListener('click', function(){
        document.getElementById('profile-picture').style.display = "none";
        document.getElementById('profile-logo').style.display = "block";
      });
      contactbtn.addEventListener('click', function(){
        document.getElementById('profile-picture').style.display = "none";
        document.getElementById('profile-logo').style.display = "block";
      });
      window.onload = () => {
        if ( aboutbtn.classList.contains('active')) {
          about.style.display = "block";
          contact.style.display = "none";
        }  else if ( contactbtn.classList.contains('active')) {
          about.style.display = "none";
          contact.style.display = "block";
        }
      }

      aboutbtn.addEventListener("click", () => { 
        if ( aboutbtn.classList.contains('active')) {
          about.style.display = "block";
          contact.style.display = "none";
        }
      });
      gallerybtn.addEventListener("click", () => { 
        if ( gallerybtn.classList.contains('active')) {
          about.style.display = "none";
          contact.style.display = "none";
        }
      });
      contactbtn.addEventListener("click", () => { 
        if ( contactbtn.classList.contains('active')) {
          about.style.display = "none";
          contact.style.display = "block";
        }
      });

  }
    
getPage(outlet) {
  return outlet.activatedRouteData['page'] || 'about';
}
}
