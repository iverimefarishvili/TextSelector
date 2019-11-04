import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   ngOnInit() {
    
   }


   bold() {
    let range
    let sel = window.getSelection();
      if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
      }
    
      //document.designMode = "on";
      if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      
      document.execCommand("ForeColor", false, "red");
      
      //document.designMode = "off";  
   }
}
