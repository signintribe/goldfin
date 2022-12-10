import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vofeedback',
  templateUrl: './vofeedback.component.html',
  styleUrls: ['./vofeedback.component.css']
})
export class VofeedbackComponent implements OnInit {
  link = "";
  data1 = <any>{};
  data2 = <any>{};
  record = "";
  trustvo = false;
  //baseURL = "http://134.209.144.186:3000";
  baseURL = "https://api.goldfin.com.pk";

  showPic1 : boolean = false;
  showPic2 : boolean = false;
  contributes = false;
  data = <any>{};
  married = false;
  VOId = "";
  userId = "";
  data3 = <any>{};
  type = "";
  fileListImage: FileList;
  fileListImage1: FileList;
  picture = "";
  picture1 ="";
  constructor(private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {

    var pageURL = window.location.href;
    this.link= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    this.VOId = localStorage.getItem('_id');



    this._auth.userData(this.link)
    .subscribe(
      res => {
      this.data3 = res.data[0];
      this._auth.getFilledForm(this.link)
      .subscribe(
        res => {
          this.data2 = res.data;
        },
        err => console.log(err)
      )

    },
    err => console.log(err)
    )

    this._auth.getVOForm(this.link)
    .subscribe(
      res => {
        this.data1 = res.data;
        if(this.data1 == null || this.data1.length == 0){
            this.record = "No Feedback Provided by VO Officer";
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
                this._auth.viewUpdate(this.link).subscribe(
                  res => {
                    console.log(res)
                  },
                  err => console.log(err)
                )
        }
      },
      err => console.log(err)
    )
  }

}
