import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Demo } from '../shared/model/demo';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {
  _data;
  constructor(private _fireStore: AngularFirestore, private _rout: Router) { }

  ngOnInit() {
    // this._data = this._fireStore.collection('items', ref => ref.where('code', '==', '777')).valueChanges();
    this._data = this._fireStore.collection('items', ref => ref.orderBy('code')).valueChanges();
  }

  onDelete(item) {
   // item.delete();
   const doc = this._fireStore.doc(`/items/${item.code}`);
   doc.delete().then((ret) => {
   console.log('this is a remove');
   }
   );
  }

  // onFormSubmit(demoForm) {
  //   this._fireStore.collection('items').doc(this._data.code).set(this._data).then(
  //     (resp) => {
  //       console.log(resp);
  //       this._rout.navigate(['admin', 'demo-list']);
  //     }
  //   );
  // }

  onAdd() {
    this._rout.navigate(['admin', 'demo-form', 'ADD', '']);
  }

  onEdit(item: Demo) {
    this._rout.navigate(['admin', 'demo-form', 'EDIT', item.code]);
  }

}
