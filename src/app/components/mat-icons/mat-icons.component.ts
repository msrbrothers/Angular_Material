import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-icons',
  templateUrl: './mat-icons.component.html',
  styleUrls: ['./mat-icons.component.css']
})
export class MatIconsComponent implements OnInit {
  icon : boolean = false;
  manu : boolean = false;
  grid : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  iconOpen(){
  this.icon = true;
  this.manu = false
  this.grid =false;
  }
  manuOpen(){
    this.icon = false;
    this.manu = true
    this.grid =false;
  }
  gridopen(){
    this.icon = false;
    this.manu = false;
    this.grid =true;
  }
}
