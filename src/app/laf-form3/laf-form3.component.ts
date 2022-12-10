import { Component, OnInit } from '@angular/core';

import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-laf-form3',
  templateUrl: './laf-form3.component.html',
  styleUrls: ['./laf-form3.component.css']
})
export class LafForm3Component implements OnInit {
  data = <any>{};
  data1 = <any>{};
  data3 = <any>{};
  openwallet = false;
  userId= "";
  recommend = false;
  verfication = "";
  conveyance = false;
  formDone = "";
  constructor(private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {
    if(!this._auth.loggedIn())
    {
      this.router.navigate(['/login']);
    }
    var pageURL = window.location.href;
    this.userId= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    this._auth.userData(this.userId)
        .subscribe(
          res => {
            this.data1 = res.data;
            this.verfication = this.data1[0].phoneVerification;
            if(this.data1[0].formDone=="true"){
              this.formDone = "true";
            }
            else{
              this.formDone = "false";
            }
            this._auth.getGeneralInformation(this.userId)
            .subscribe(
              res => {
                this.data3 = res.data;
                if(this.data3.phone != undefined){
                  if(this.data3.phone.length > 0){
                    this.recommend = true; 
                    this.data.refname = this.data3[0].name[0];
                    this.data.refname1 = this.data3[0].name[1];
                    this.data.refname2 = this.data3[0].name[2];
                    this.data.refname3 = this.data3[0].name[3];
                    this.data.refname4 = this.data3[0].name[4];
    
    
                    this.data.refmob = this.data3[0].phone[0];
                    this.data.refmob1 = this.data3[0].phone[1];
                    this.data.refmob2 = this.data3[0].phone[2];
                    this.data.refmob3 = this.data3[0].phone[3];
                    this.data.refmob4 = this.data3[0].phone[4];
                    this.data.recommend = "Yes";
                  }
                  else {
                    this.data.recommend = "No";
                    this.recommend = false; 
                  }
                }
                else {
                  this.recommend = false; 
                  this.data.recommend = "No";
                }
                
               
                
                
              },
              err => console.log(err)
            )

          },
          err => console.log(err)
    )

    
    
  }
  onOptionsSelected2(value : any){
    if(value=="Yes"){
      this.recommend = true;
    }
    else{
      this.recommend = false;
    }
  }
  submitlaf3(){

      if(this.recommend==true){
        localStorage.setItem("refname",this.data.refname);
        localStorage.setItem("refmob",this.data.refmob);
        localStorage.setItem("recommend","Yes");
      }
      this.data._id = localStorage.getItem('_id');
      let objectData = {
          _id : this.data._id,
          name : [this.data.refname,this.data.refname1,this.data.refname2,this.data.refname3,this.data.refname4],
          phone : [this.data.refmob,this.data.refmob1,this.data.refmob2,this.data.refmob3,this.data.refmob4]
      }
      this._auth.inviteUsers(objectData).subscribe(
        res => {
          if(res.status==200){

            setTimeout((router: Router) => {
              alert("Changes submitted");
            }, 1500);
          }
          else {
           console.log("Unknown Issue");
          }
        },
        err => console.log(err)
      )
      
  }
}