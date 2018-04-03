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
import { TopbarComponent } from '../topbar/topbar.component';
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
      
    ]),trigger('animateGallery', [
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
                '.33s ease-in-out',
                style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
              ),
              animateChild(
                
              )
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('0.33s', style({ opacity: 0 })), animateChild()],
            { optional: true }
          )
        ])
      ])
      
    ])
  ]
})
export class MyworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  exp: boolean = false;
  child: boolean = false;
}
