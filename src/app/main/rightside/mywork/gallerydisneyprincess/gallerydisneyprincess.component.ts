import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallerydisneyprincess',
  templateUrl: './gallerydisneyprincess.component.html',
  styleUrls: ['./gallerydisneyprincess.component.scss']
})
export class GallerydisneyprincessComponent implements OnInit {

  ngOnInit(): void {
    
        
        
          var galleryDescription = document.getElementById('galleryDesc') as HTMLElement;
    
          setTimeout(function(){
            galleryDescription.classList.add('showMe');
          }, 600);
          // Get the modal
          var modal = document.getElementById('myModal');
    
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var img = document.getElementById('myImg') as HTMLImageElement;
          var modalImg = document.getElementById("img01") as HTMLImageElement;
          var captionText = document.getElementById("caption") as HTMLImageElement;
          
          img.onclick = function(){
            modal.style.display = "flex";
            modal.style.flexFlow = "column";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
          }
    
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0] as HTMLElement;
    
          // When the user clicks on <span> (x), close the modal
          span.onclick = function() { 
            modal.style.display = "none";
          }
        
      }
    }