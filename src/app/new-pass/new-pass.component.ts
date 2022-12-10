import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent implements OnInit {
  link="";
  userId = "";
  verfication = "";
  sucess = "";
  values = 0;
  error = "";
  sucess1 = "";
  error1 = "";
  data = <any>{};
  data1 = <any>{};
  passLower = /^(?=.*[a-z]).+$/;
  passUper = /^(?=.*[A-Z]).+$/;
  passnbr = /^(?=.*[\d]).+$/;
  passspecial = /([-+=_!@#$%^&*.,;:'\"<>/?`~\[\]\(\)\{\}\\\|\s])/;
  passw=  /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
  codeOKAY : boolean = false;
  constructor(private _auth: AuthService,public router: Router) {   }

  ngOnInit(): void {
    var pageURL = window.location.href;
    this.link= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    this._auth.getverifiedCode(this.link)
    .subscribe(
      res => {
        this.data1 = res.data;

        if(res.status == 200)
        {
          this.codeOKAY = true;
        }
        else {
          this.router.navigate(['/login']);
        }

      },
      err => console.log(err)
    )
  }

  submit(){
    this.error = "";
    this.sucess = "";

    if(this.data.password!=this.data.password2){
      this.error="Both Passwords does not match";
    }
    else if(this.data.password.length<7 ){
       this.error="Password must be greater than 7 characters.";
    }
    else if(!(this.data.password.match(this.passLower))){
       this.error="Password must contain atleast one lower case letter.";
    }
    else if(!(this.data.password.match(this.passUper))){
      this.error="Password must contain atleast one uper case letter.";
    }
    else if(!(this.data.password.match(this.passnbr))){
      this.error="Password must contain atleast one number.";
    }
    else if(!(this.data.password.match(this.passspecial))){
      this.error="Password must contain atleast one SPECIAL character.";
    }

    let obj = {
      password : this.data.password,
      userId : this.link
    }
    this._auth.setPasswordForWeb(obj)
    .subscribe(
      res => {
        this.data1 = res.data;

        if(res.status == 200)
        {
          this.sucess = res.data.message;
          setTimeout((router: Router) => {
            this.router.navigate(['/login']);
          }, 1500);
        }
        else {
           this.error = res.data.Message;
        }

      },
      err => console.log(err)
    )
  }

}
