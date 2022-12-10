import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cmofeedback',
  templateUrl: './cmofeedback.component.html',
  styleUrls: ['./cmofeedback.component.css']
})
export class CmofeedbackComponent implements OnInit {
  link = "";
  data1 = <any>{};
  data3 = <any>{};
  record = "";
  //baseURL = "http://134.209.144.186:3000";
  baseURL = "https://api.goldfin.com.pk";
  showPic1 : boolean = false;
  showPic2 : boolean = false;
  trustvo = false;
  constructor(private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {
    var pageURL = window.location.href;
    this.link= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    
    this._auth.userData(this.link)
    .subscribe(
      res => {
      this.data3 = res.data[0];  
    },
    err => console.log(err)
    )
    
    this._auth.getCMOForm(this.link)
    .subscribe(
      res => {
        this.data1 = res.data;
        if(this.data1 == null || this.data1.length == 0){
            this.record = "No Feedback Provided by CMO Officer";
            this.trustvo = true;
        }
        else {
              if(this.data1[0].picture1 !=undefined || this.data1[0].picture1 !=null )
                {
                  this.showPic1 = true;
                }
                else {
                  this.showPic1 = false;
                }
                if(this.data1[0].picture2 !=undefined || this.data1[0].picture2 !=null )
                {
                  this.showPic2 = true;
                }
                else {
                  this.showPic2 = false;
                }

                if(this.data1[0].date == undefined || this.data1[0].date == null){
                  var today = new Date();
                  var dd = String(today.getDate()).padStart(2, '0');
                  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                  var yyyy = today.getFullYear();
                  this.data1[0].date =  yyyy + '-' + mm + '-' + dd;
                }
                else {
                  var index = this.data1[0].date.indexOf('-');
                  if(index == 2){
                    var date = this.data1[0].date;
                    this.data1[0].date = date.split("-").reverse().join("-");
                  }
                  else if(index == 4) {
                     this.data1[0].date = this.data1[0].date;
                  }
                  this._auth.viewUpdate(this.link).subscribe(
                    res => {
                      console.log(res)
                    },
                    err => console.log(err)
                  )
              }
        }
      },
      err => console.log(err)
    )
  }

}
