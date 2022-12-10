import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-laf',
  templateUrl: './new-laf.component.html',
  styleUrls: ['./new-laf.component.css']
})
export class NewLafComponent implements OnInit {

  contributes = false;
  data = <any>{};
  data1 = <any>{};
  data3 = <any>{};
  error = "";
  userId = "";
  personalInformation = "";
  married = false;
  residence1 = false;
  profession = false;
  profession1 = false;
  verfication = "";
  formDone = "";
  constructor(private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {
    if(!this._auth.loggedIn())
    {
      this.router.navigate(['/login']);
    }
    else {
    var pageURL = window.location.href;
    var pageURL1 = window.location.href;
    this.userId= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    this._auth.userData(this.userId)
        .subscribe(
          res => {
            this.data1 = res.data;
            
            
            if(this.data1[0].profession=="Salaried"){
              this.data.profession = "Salaried";
              this.profession = true;
              this.profession1 = false;
            }
            else{
              this.data.profession = "Self-Employee";
              this.profession = false;
              this.profession1 = true;
            }
      });
      
    }

    
  }
  onOptionsSelected(value : any){
    if(value=="Married"){
        this.married=true;
    }
    else{
        this.married=false;
    }
  }

  onOptionsSelected3(value : any){
    if(value=="Birth"){
      this.residence1=false;
    }
    else{
      this.residence1=true;
    }
  }
  submitlf1(){
    this.data._id = this.userId;
    this.data.directBO = "true";
      let dataLaf1 = {
        purpose : this.data.purpose,
        city : this.data.city,
        fname : this.data.fname,
        dob : this.data.dob,
        currentaddress : this.data.currentaddress,
        residentialstatus : this.data.residentialstatus,
        residingsince : this.data.residingsince,
        years : this.data.years,
        permanentaddress : this.data.permanentaddress,
        othermobilenum : this.data.othermobilenum,
        landline : this.data.landline,
        gender : this.data.gender,
        maritalstatus : this.data.maritalstatus,
        education : this.data.education,
        directBO : this.data.directBO,
        close: 'fasle',
        _id : this.data._id
      }
      if(this.profession == true){
        this._auth.salariedLAF1(dataLaf1).subscribe(
          res => {
            if(res.status==200){
              let url = "/newLaf2/"+this.userId;
              setTimeout((router: Router) => {
                this.router.navigate([url]);
              }, 500);
            }
            else {
              this.error="Unknown Issue";
            }
          },
          err => console.log(err)
        )
      }
      else if(this.profession1 == true){
        this._auth.businessLAF1(dataLaf1).subscribe(
          res => {
            if(res.status==200){
              let url = "/newLaf2/"+this.userId;
              setTimeout((router: Router) => {
                this.router.navigate([url]);
              }, 500);
            }
            else {
              this.error="Unknown Issue";
            }
          },
          err => console.log(err)
        )
      }

    }
    onOptionsSelected123(value : any){
      if(value=="Salaried"){
        this.profession = true;
        this.profession1=false;
      }
      else{
        this.profession1=true;
        this.profession=false;
      }
    }
}
