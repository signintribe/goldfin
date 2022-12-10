import { Component, OnInit } from '@angular/core';

import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  contributes = false;
  data = <any>{};
  data1 = <any>{};
  error = "";
  link = "";
  //baseURL = "http://134.209.144.186:3000";
  baseURL = "https://api.goldfin.com.pk";
  //baseURL = "http://localhost:3000";
  married = false;
  married1 = false;
  residence1 = false;
  profession = false;
  profession1 = false;
  selectedDay: string = 'goldfin';
  today1 = undefined;
  profession2 = true;
  profession3 = true;
 
  data3 = <any>{};
  userId = "";
  personalInformation = "";
  verfication = "";
  formDone = "";
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
    if(!this._auth.loggedIn())
    {
      this.router.navigate(['/login']);
    }


    var pageURL = window.location.href;
    this.link= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    this._auth.userData(this.link)
    .subscribe(
      res => {
        this.data1 = res.data;
        if(this.data1[0].csoName === undefined){
          this.data1[0].csoName = 'Mubashira Kanwal';
          this.data1[0].csoId = '60edefa55e335746f01a64c8';

        }
        if(this.data1[0].profession=="Salaried"){
          this.profession = true;
          this.profession2 = false;
        }
        else if(this.data1[0].profession=="Business"){
          this.profession1 = true;
          this.profession3 = false;
        }
       {
          this._auth.getFilledForm(this.link)
          .subscribe(
            res => {
              this.data = res.data;
              console.log(this.data);
              // var today = this.data.createdAt;
              // var dd = String(today.getDate()).padStart(2, '0');
              // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              // var yyyy = today.getFullYear();
              
              this.today1 = this.data.createdAt.substr(0,10);
              if(this.data.outstandingloan == 'Yes'){
                  this.married = true;
              }
              else if(this.data.outstandingloan == 'No'){
                  this.married = false;
              }
              if(this.data){
                window.setTimeout(() => window.print(), 3000);
              }
              
    
            },
            err => console.log(err)
          )
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
