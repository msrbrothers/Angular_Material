import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-material',
  templateUrl: './button-material.component.html',
  styleUrls: ['./button-material.component.css']
})
export class ButtonMaterialComponent implements OnInit {
  panel : boolean = false;
  button : boolean = false;
  card : boolean = false;
  tab : boolean = false;
  constructor() { }

  ngOnInit() {
  }


  panelOpen(){
this.panel = true;
this.button = false;
this.card =false;
  }
  buttonOpen(){
 this.button = true;
 this.panel = false;
 this.card =false;
  }
  cardOpen(){
  this.card =true;
  this.panel = false;
this.button = false;
  }
  tabOpen(){
    this.tab = true;
    }

    logChange(index){
      console.log(index);
      
    }
}
