import { Component, OnInit } from '@angular/core';
import { Demo } from '../shared/model/demo';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-db-form',
  templateUrl: './demo-db-form.component.html',
  styleUrls: ['./demo-db-form.component.css']
})
export class DemoDbFormComponent implements OnInit {
  _data: Demo = {
    code : '',
    name : ''
 };
 mode = 'ADD';
 code = '';
  constructor(private _fireDb: AngularFireDatabase, private _rout: Router, private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe((param) => {
      this.mode = param.mode ? param.mode : 'ADD';
      this.code = param.code;
    });
   }

  ngOnInit() {
    if ( this.mode === 'EDIT') {
      // this._fireStore.collection('items').doc(this.code).valueChanges().subscribe((data: Demo ) => {
      //   this._data = data;
      // });
      // this._fireDb.object(`/items/${item.code}`).remove().then((ret) => {
      //   console.log('this is a remove');
      //  }
     this._fireDb.object(`/items/${this.code}`).valueChanges().subscribe(( data: Demo ) => {
      this._data = data;
    });

    }
  }
  onFormSubmit() {
    // 1 . submit save with auto id
// this._fireDb.list('items').push(this._data).then(
//   (resp) => {
//     console.log(resp);
//     this._rout.navigate(['admin', 'demo-db-list']);
//   }};
//
// 2 . submit save with id
// const doc = this._fireDb.object(`/items/${this._data.code}`).set(this._data).then(
//      (resp) => {
//        console.log(resp);
//        this._rout.navigate(['admin', 'demo-db-list']);
//      });


      if ( this.mode === 'ADD') {
        this._fireDb.object(`/items/${this._data.code}`).set(this._data).then(
          (resp) => {
            console.log(resp);
            this._rout.navigate(['admin', 'demo-db-list']);
          });
       } else if ( this.mode === 'EDIT') {
        this._fireDb.object(`/items/${this._data.code}`).update(this._data).then(
          (resp) => {
            console.log(resp);
            this._rout.navigate(['admin', 'demo-db-list']);
          });
       }
     }
}
