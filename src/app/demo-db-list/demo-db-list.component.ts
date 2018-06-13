import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-db-list',
  templateUrl: './demo-db-list.component.html',
  styleUrls: ['./demo-db-list.component.css']
})
export class DemoDbListComponent implements OnInit {
  _data;
  constructor(private _fireDb: AngularFireDatabase, private _rout: Router) {

   }

  ngOnInit() {
   this._data = this._fireDb.list('items').valueChanges();
  }
  onAdd() {
    this._rout.navigate(['admin', 'demo-db-form', 'ADD', '']);
  }

  onEdit(item ) {
    this._rout.navigate(['admin', 'demo-db-form', 'EDIT', item.code]);
  }
  onDelete(item) {
      this._fireDb.object(`/items/${item.code}`).remove().then((ret) => {
           console.log('this is a remove');
   }
   );
  }

}
