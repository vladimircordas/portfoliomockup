import { Component, OnInit } from '@angular/core';

import { Router, NavigationStart, NavigationEnd, ParamMap } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {

    var contactMe = document.getElementById('contactMe') as HTMLElement;
    var workBtn = document.getElementById('workIntro') as HTMLElement;
    var aboutBtn = document.getElementById('aboutIntro') as HTMLElement;
    var rocketFlightChange = document.getElementById('rocketFlight') as HTMLElement;
    var rocketFlightPopup = document.getElementById('img-r-1') as HTMLElement;
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    window.onload = function(){

    if (( windowWidth >= 1920 ) && ( windowHeight >= 1080 )) {
      rocketFlightChange.classList.remove('flightB');
      rocketFlightChange.classList.add('flightA');
        setTimeout(function(){
          rocketFlightChange.classList.remove('flightA');
          rocketFlightChange.classList.add('flightB');
        }, 15000);
      } else {
        rocketFlightPopup.classList.remove('popupOne');
        rocketFlightPopup.classList.add('popupTwo');
      }
    }
    contactMe.addEventListener('click', function() {
      document.getElementById('contact').style.display = "block";
      document.getElementById('about').style.display = "none";
      document.getElementById('gallery-btns').style.display = "none";
      document.getElementById('profile-picture').style.display = "none";
      document.getElementById('profile-logo').style.display = "block";

    });
    workBtn.addEventListener('click', function() {
      document.getElementById('gallery-btns').style.display = "none";
      document.getElementById('about').style.display = "none";
      document.getElementById('contact').style.display = "none";
      document.getElementById('profile-picture').style.display = "none";
      document.getElementById('profile-logo').style.display = "block";
    });
    aboutBtn.addEventListener('click', function() {
      document.getElementById('gallery-btns').style.display = "none";
      document.getElementById('about').style.display = "block";
      document.getElementById('contact').style.display = "none";
      document.getElementById('profile-picture').style.display = "block";
      document.getElementById('profile-logo').style.display = "none";
    });
  }
}