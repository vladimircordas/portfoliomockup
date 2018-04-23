import { Component, OnInit } from '@angular/core';
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
import { Page } from './gallerypagesdefine/gallerypagesdefine.component';
import { PAGES } from './gallerypages/gallerypages.component';
@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss'],
  animations: [
    trigger('childAnimation', [
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
                '0.25s ease-in-out',
                style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
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
    ]),trigger('animateGallery', [
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
                '.5s ease-in-out',
                style({ opacity: 1, transform: 'translateY(0px) rotate(0)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('0s', style({ opacity: 0, })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class MyworkComponent implements OnInit {

  pages = PAGES;
  selectedPage: Page;

  constructor() { }

  ngOnInit() {
    var currpage = PAGES[0];
    this.selectedPage = currpage;
    document.getElementById('gallery-loc').classList.add('visible');
    
  }
  
  ngOnChanges() { 
    var currpage = PAGES[0];
    this.selectedPage = currpage; 
  }
  
  onSelect(page: Page): void {
    this.selectedPage = page;
  }
  
  exp: boolean = false;
  child: boolean = false;
}
