import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
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
  codeOKAY : boolean = false;
  constructor(private _auth: AuthService,public router: Router) { 
      
  }

  ngOnInit(): void {
    this.data.phone = "+92";
  }
  submit(){
        this.sucess = "";
        this.error = "";
        this.sucess1 = "";
        this.error1 = "";
      if(this.data.phone.length == 15){
        let obj = {
          phone : this.data.phone
        }
        
        this._auth.forgotPassword(obj)
        .subscribe(
          res => {
            this.data1 = res.data;
            if(res.status == 200)
            {
              this.sucess = res.data.message;
              this.userId = res.data.userId;
              // setTimeout((router: Router) => {
              //   this.router.navigate(['/account']);
              // }, 500);
              this.codeOKAY = true;
            }
            else {
              this.error = res.Message;
            }
  
          },
          err => console.log(err)
        )
      }
      else {
        this.error = "Please enter the phone number : +92-XXX-XXXXXXX";
      }
      
  }
  submit123(){
    let obj = {
      verifyCode : this.data.verifyCode,
      userId : this.userId
    }
    this.sucess = "";
    this.error = "";
    this.sucess1 = "";
    this.error1 = "";
    this._auth.verifyUser2(obj)
    .subscribe(
      res => {
        this.data1 = res.data;
        if(res.status == 200)
        {
          this.sucess1 = res.data.message;
          let url = '/new-password/'+this.userId;
          setTimeout((router: Router) => {
            this.router.navigate([url]);
          }, 3500);
        }
        else {
          this.error1 = res.Message;
        }

      },
      err => console.log(err)
    )
}

onKeyMobile(event: any) {
  if(this.values == 0){
    this.data.phone = this.data.phone.slice(0, 3) + "-"+event.target.value.substr(event.target.value.length - 1);
  }
  
  if(event.target.value.length == 3){
    this.data.phone = event.target.value + '-';
  }
  else if (event.target.value.length == 7){
    this.data.phone = event.target.value + '-';
  }
  this.values ++;
  
}
}
