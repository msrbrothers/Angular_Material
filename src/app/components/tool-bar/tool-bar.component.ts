import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  toolbar : boolean = true;
  sidebar : boolean = false;
  opened : boolean = true;
  constructor() { }

  ngOnInit() {
  }
  sideBar(){
    console.log("colkkfkkfkfkfkf1");
    
    this.sidebar = true;
    this.toolbar= false;
  }
  toolBar(){
    console.log("colkkfkkfkfkfkf2");
    this.sidebar = false;
    this.toolbar= true;
  }
}
