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
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateX(100%) rotate(0)'
              }),
              animate(
                '0.35s ease-in',
                style({ opacity: 1, transform: 'translateX(0) rotate(0)' })
              ),
              query('@childAnimation', [
                animateChild()
              ],{ optional: true })
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
    ]),
    trigger('animateGallery', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateY(-250px) rotate(0)'
              }),
              
              animate(
                '0.25s ease-in-out',
                style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
              ),
              animateChild(
                
              )
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
export class RightsideComponent implements OnInit {

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  public isCollapsed = true;
  constructor(private router: Router, private location: Location) { }
  
  ngOnInit() {
  //  PATH CHECKING
  //  this.router.events.subscribe(path => {
  //    console.log('path = ', path);
  //  });
    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
      
  });
  this.router.events.subscribe((ev:any) => {
      if (ev instanceof NavigationStart) {
          if (ev.url != this.lastPoppedUrl)
              this.yScrollStack.push(window.scrollY);
          
      } else if (ev instanceof NavigationEnd) {
          if (ev.url == this.lastPoppedUrl) {
            
              this.lastPoppedUrl = undefined;
              window.scrollTo(0, this.yScrollStack.pop());
          } else {
            
            
            window.scrollTo(0, 0);
            
            }
          
              
      }
  });
  //  IF nav is sticky change padding-top on content container
  
  }
  exp: boolean = false;
  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'home';
  }
}
