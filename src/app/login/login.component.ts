import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../shared/service/servicename.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { FirebaseApp } from '@firebase/app-types';
import { RecaptchaVerifier } from '@firebase/auth-types';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: string;
  password: string;
  phoneNumber: string;
  _recap: RecaptchaVerifier;
  otp: string;

  constructor(private _service: ServicenameService, private _auth: AngularFireAuth) {


  }


  testData() {
    this.userId = 'admin';
    this.password = '12345';
    this._service.loadProject().subscribe( (resp) => {
      console.log('success' , resp);

    });
  }

  onToggle(_event) {
    console.log(_event);

  }

  OnSubmit(loginForm) {
    if (loginForm.valid) {
      const data = loginForm.value;
     /* this._service.doLogin(data).subscribe((resp) => {
        console.log(resp);
      });*/
      this._auth.auth.signInWithEmailAndPassword(data.userId, data.password).then(
        (resp) => {
          console.log(resp);
          alert('success' + resp);
        }
      ).catch(err => {
          console.log(err);
          alert('fails' + err);
      });
    } else {
      alert('Invalid');
      const  data = loginForm.value;
    }
  }

  onGoogleSignIn() {
    this._auth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  onFacebookSignIn() {
    this._auth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());

  }

  ngOnInit() {
    this._recap = new firebase.auth.RecaptchaVerifier('recapt-id');
    this._recap.render().then((resp) => {
      console.log('success capcha ', resp);
    });
  }
  onRequestOtp() {

    this._auth.auth.signInWithPhoneNumber('+66882952860',   this._recap).then((confirmationResult) => {
      window['confirmationResult'] = confirmationResult;
     // console.log('success auth ', confirmationResult);
    });
  }

  confirmOtp() {
    window['confirmationResult'].confirm(this.otp).then((resp) => {
      console.log('success auth ', resp);
    });
  }
}
