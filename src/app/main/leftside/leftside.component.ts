import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.scss']
})
export class LeftsideComponent implements OnInit {
  
  public isCollapsed = true;
  
  wasClicked = false;
  
      navClick() {
          this.wasClicked= !this.wasClicked;
      }

  constructor() { }

  ngOnInit() {
    
    
    var initialAnimImg  = document.getElementsByClassName('slide-nav') as HTMLCollectionOf<HTMLElement>;
    
    for (var i = 0; i < initialAnimImg.length; i++) {
      initialAnimImg[i].setAttribute("style", "animation-delay: 0s;");
    }
    
    
   
  }

}
