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
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  animations: [
    trigger('animateGallery', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateY(-500px) rotate(0)'
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
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  exp: boolean = false;
}
