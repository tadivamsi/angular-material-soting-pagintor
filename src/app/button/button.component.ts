import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
 

  hidden = false;
  constructor(){ 
  
    
  }
 
  
  isDisabled = true;


  ngOnInit(): void {
  
  }


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  
}