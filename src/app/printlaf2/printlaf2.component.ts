import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-printlaf2',
  templateUrl: './printlaf2.component.html',
  styleUrls: ['./printlaf2.component.css']
})
export class Printlaf2Component implements OnInit {

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

  selectedDay: string = 'goldfin';
  today1 = undefined;
  constructor(private _auth: AuthService,public router: Router) {
    let audioPlayer1 =<HTMLElement> document.getElementById('searchbar');
    audioPlayer1.style.display = "none";
    let audioPlayer =<HTMLElement> document.getElementById('searchbar1');
    audioPlayer.style.display = "none";
    let audioPlayer2 =<HTMLElement> document.getElementById('searchbar2');
    audioPlayer2.style.display = "none";
    let audioPlayer3 =<HTMLElement> document.getElementById('searchbar3');
    audioPlayer3.style.display = "none";
    let audioPlayer4 =<HTMLElement> document.getElementById('searchbar4');
    audioPlayer4.style.display = "none";

   }

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
                  this.today1 = this.data1[0].date ;
                }
                else {
                  var index = this.data1[0].date.indexOf('-');
                  if(index == 2){
                    var date = this.data1[0].date;
                    this.data1[0].date = date.split("-").reverse().join("-");
                    this.today1 = this.data1[0].date ;
                  }
                  else if(index == 4) {
                     this.data1[0].date = this.data1[0].date;
                     this.today1 = this.data1[0].date ;
                  }
                  
              }
              if(this.data1[0]){
                window.setTimeout(() => window.print(), 3000);
              }
        }
      },
      err => console.log(err)
    )
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
}
