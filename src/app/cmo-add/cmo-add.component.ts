import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cmo-add',
  templateUrl: './cmo-add.component.html',
  styleUrls: ['./cmo-add.component.css']
})
export class CmoAddComponent implements OnInit {
  constructor(private _auth: AuthService,public router: Router) { }
  
  data = <any>{};
  error = "";
  values = 0;
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
    if(!this._auth.loggedIn())
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
          this._auth.signupCMO(this.data).subscribe(
            res => {
              if(res.status==200){
                this.sucess="Customer is sucessfully registered to Goldfin Portal.";
                let url = "/cmo2/"+res.data._id;
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
}
