import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pupblic-zone',
  templateUrl: './pupblic-zone.component.html',
  styleUrls: ['./pupblic-zone.component.css']
})
export class PupblicZoneComponent implements OnInit {

constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLoginPage () {
    // this.router.navigate(['admin' , 'demo-list']);
    this.router.navigate(['login']);
  }
  goToHomePage () {
    // this.router.navigate(['admin' , 'demo-list']);
    this.router.navigate(['home']);
  }
  goToPage (zone: string, page: string) {
    // this.router.navigate(['admin' , 'demo-list']);
    this.router.navigate([zone, page]);
  }
}
