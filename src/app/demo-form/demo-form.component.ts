import { Component, OnInit } from '@angular/core';
import { Demo } from '../shared/model/demo';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  _data: Demo = {
    code : '' ,
    name : ''
  };
  // private demoCollection: AngularFirestoreCollection<Demo>;
   mode = 'ADD';
   code = '';
  constructor(private _fireStore: AngularFirestore, private _rout: Router , private activateRoute: ActivatedRoute) {
    // this._data = new Demo();
    this._data.code = '00';
    activateRoute.params.subscribe((param) => {
      this.mode = param.mode ? param.mode : 'ADD';
      this.code = param.code;
    });
  }

  ngOnInit() {
    if ( this.mode === 'EDIT') {
      this._fireStore.collection('items').doc(this.code).valueChanges().subscribe((data: Demo ) => {
        this._data = data;
      });
    }
  }

  onFormSubmit() {
  //  const data = JSON.parse(JSON.stringify(this._data));
  //   this._fireStore.collection<Demo>('items').doc(this._data.code).set(this._data).then(
  //     (resp) => {
  //       console.log(resp);
  //       this._rout.navigate(['admin', 'demo-list']);
  //     }
  //   ).catch(err => {
  //     console.log(err);
  //     alert('fails' + err);
  //   });
  if ( this.mode === 'ADD') {
    this._fireStore.collection('items').doc(this._data.code)
    .set(this._data).then((resp) => {
      this._rout.navigate(['admin', 'demo-list']);
    }

    );
  } else if ( this.mode === 'EDIT') {
    this._fireStore.collection('items').doc(this._data.code)
    .update(this._data).then((resp) => {
      this._rout.navigate(['admin', 'demo-list']);
    });
  } else {
   alert('Invalid Mode');
  }
  }
}
