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
    trigger('introMainAnimate', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateY(-700px) rotate(0)'
              }),
              animate(
                '.3s',
                style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('.3s', style({ opacity: 0, 
              transform: 'translateY(0px) rotate(0)' })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ]
  })


export class AppComponent implements OnInit {
  
      
      
      ngOnInit() {
        
    }
    exp: boolean = false;
    introMainPage(outlet) {
      return outlet.activatedRouteData['page'] || 'about';
    }
      
}
