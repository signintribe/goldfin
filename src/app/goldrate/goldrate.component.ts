import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-goldrate',
  templateUrl: './goldrate.component.html',
  styleUrls: ['./goldrate.component.css']
})
export class GoldrateComponent implements OnInit {

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
    if(!this._auth.loggedIn() && localStorage.getItem('type') != 'admin')
    {
      this.router.navigate(['/login']);
    }
     



  }
  submit(){
    this.error = "";
    this.sucess = "";
    this.data._id = localStorage.getItem("_id");
    this._auth.updategoldrate(this.data).subscribe(
      res => {
        if(res.status==200){
          this.sucess="New Gold Rate is added to Goldfin Portal.";
          let url = "/superAdmin";
          // localStorage.setItem('pks19302','true');
          // localStorage.setItem('pks19303',res.data.formId);
          setTimeout((router: Router) => {
            this.router.navigate([url]);
          }, 2000);
        }
        else if(res.status==403) {
          this.error = res.Message;
        }
      },
      err => console.log(err)
    )
  }
}
