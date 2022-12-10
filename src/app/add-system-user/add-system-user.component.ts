import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-system-user',
  templateUrl: './add-system-user.component.html',
  styleUrls: ['./add-system-user.component.css']
})
export class AddSystemUserComponent implements OnInit {
  constructor(private _auth: AuthService,public router: Router) { }
  
  data = <any>{};
  error = "";
  values = 0;
  values1 = 0;
  statusCode = 0;
  statusCode2 = 0;
  statusCode3 = 0;
  suggest = '';
  suggestName = '';
  suggestName1 = '';
  suggestName2 = '';
  firstDash = false;
  sucess = "";
  verify = false;
  
  ngOnInit(): void {
    if(!this._auth.loggedIn() && localStorage.getItem('type') != 'admin')
    {
      this.router.navigate(['/login']);
    }
    this.data.phone = "+92";
     



  }
  onKeyCNIC(event: any) {
    if(event.target.value.length == 5){
      this.data.cnic = event.target.value + '-';
    }
    else if (event.target.value.length == 13){
      this.data.cnic = event.target.value + '-';
    }
  }

  submit(){
    this.error = "";
    this.sucess = "";
    this._auth.cnicCheck(this.data.cnic)
    .subscribe(
      res => {
        this.statusCode3 = res.status;
        if(this.statusCode3 == 200){
          this.error = "CNIC already registered."
        }
        else {
          this._auth.signupSystem(this.data).subscribe(
            res => {
              if(res.status==200){
                this.sucess="System User is sucessfully registered to Goldfin Portal.";
                let url = "/superAdmin";
                // localStorage.setItem('pks19302','true');
                // localStorage.setItem('pks19303',res.data.formId);
                setTimeout((router: Router) => {
                  this.router.navigate([url]);
                }, 3500);
              }
              else if(res.status==403) {
                this.error = res.Message;
              }
            },
            err => console.log(err)
          )
        }
      },
      err => console.log(err)
    );
  }
  onKeyMobile(event: any) {
    if(this.values1 == 0){
      this.data.phone = this.data.phone.slice(0, 3) + "-"+event.target.value.substr(event.target.value.length - 1);
    }
    
    if(event.target.value.length == 3){
      this.data.phone = event.target.value + '-';
    }
    else if (event.target.value.length == 7){
      this.data.phone = event.target.value + '-';
    }
    this.values1 ++;
    
  }
}
