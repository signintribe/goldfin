import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  link="";
  userId = "";
  verfication = "";
  sucess = "";
  error = "";
  data = <any>{};
  data1 = <any>{};
  salary : boolean = false;
  constructor(private _auth: AuthService,public router: Router) { 
      
  }

  ngOnInit(): void {
    if(!this._auth.loggedIn())
    {
      this.router.navigate(['/login']);
    }
    this.link=localStorage.getItem("phone");
    this.userId=localStorage.getItem("_id");
    this.link=localStorage.getItem("phone");
    this.verfication=localStorage.getItem("phoneVerification");
    if(this.verfication == "1"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 500);
    }
  }
  submit(){
      let obj = {
        verifyCode : this.data.verifyCode,
        userId : this.userId
      }
      this.sucess = "";
      this.error = "";
      this._auth.verifyUser(obj)
      .subscribe(
        res => {
          this.data1 = res.data;
          if(res.status == 200)
          {
            this.sucess = res.data.message;
            localStorage.setItem("phoneVerification","1");
            setTimeout((router: Router) => {
              this.router.navigate(['/account']);
            }, 500);
          }
          else {
            this.error = res.Message;
          }

        },
        err => console.log(err)
      )
  }

}
