import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.scss']
})
export class LeftsideComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
    var menu = document.getElementById("ham-menu");
    var bars = document.getElementById("bars");
    var clicked = true;
    
    // Click Effect
    menu.addEventListener("click", activate);
    function activate(){
      if (clicked){
        bars.classList.add("animation");
        clicked = false;
      } else {
        bars.classList.remove("animation");
        clicked = true;
      }
    }
  }

}
