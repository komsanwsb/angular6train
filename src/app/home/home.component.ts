import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
    name: string;
  showText = false;
  conditionExpression = 'A';
  case1Exp = 'A';

  @Output()toggle = new EventEmitter();


  price = 123.005642;


  constructor() { }

  ngOnInit() {

  }

  toggleShow() {
    this.showText = !this.showText;
    this.toggle.emit(this.showText);
  }

}
