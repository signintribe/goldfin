import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-laf3',
  templateUrl: './new-laf3.component.html',
  styleUrls: ['./new-laf3.component.css']
})
export class NewLaf3Component implements OnInit {

  data = <any>{};
  data1 = <any>{};
  data3 = <any>{};
  openwallet = false;
  userId= "";
  recommend = false;
  verfication = "";
  conveyance = false;
  formDone = "";
  profession = false;
  profession1 = false;
  constructor(private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {
    if(!this._auth.loggedIn())
    {
      this.router.navigate(['/login']);
    }
    var pageURL = window.location.href;
      var pageURL1 = window.location.href;
      this.userId= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    
      this._auth.userData(this.userId)
      .subscribe(
        res => {
          this.data1 = res.data;
          
          if(this.data1[0].profession=="Salaried"){
            
            this.profession=true;
            this.profession1=false;
          }
          else{
            this.profession1=true;
            this.profession=false;
          }
    });
    
    
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
      this.data._id = this.userId;
      let objectData = {
          _id : this.data._id,
          name : [this.data.refname,this.data.refname1,this.data.refname2,this.data.refname3,this.data.refname4],
          phone : [this.data.refmob,this.data.refmob1,this.data.refmob2,this.data.refmob3,this.data.refmob4]
      }
      
      this._auth.inviteUsers(objectData).subscribe(
        res => {
          if(res.status==200){
            let url = "/newLaf4/"+this.userId;
            setTimeout((router: Router) => {
              this.router.navigate([url]);
            }, 500);
          }
          else {
           console.log("Unknown Issue");
          }
        },
        err => console.log(err)
      )
      
  }
}
