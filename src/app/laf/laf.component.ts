import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-laf',
  templateUrl: './laf.component.html',
  styleUrls: ['./laf.component.css']
})
export class LafComponent implements OnInit {
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
      this.userId = localStorage.getItem('_id');
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
            if(this.data1[0].personalInformation=="true"){
              this.personalInformation = "true";
            }
            else{
              this.personalInformation = "false";
            }
            if(this.formDone == "true"){
              setTimeout((router: Router) => {
                this.router.navigate(['/account']);
              }, 500);
            }
            if(this.verfication == "0"){
              setTimeout((router: Router) => {
                this.router.navigate(['/verify']);
              }, 500);
            }
            if(this.personalInformation == "true"){
              this._auth.getFormData1(this.userId)
              .subscribe(
                res => {
                  this.data3 = res.data;
                  if(res.status == 200)
                  {
                    var index = this.data3.dob.indexOf('-');
                    var newdate;
                    if(index == 2){
                       var date = this.data3.dob;
                       newdate = date.split("-").reverse().join("-");
                    }
                    else if(index == 4) {
                      newdate = this.data3.dob;
                    }
                    this.data.dob = newdate;
                    this.data.loanAmount = this.data3.loanAmount;
                    this.data.fname = this.data3.fname;
                    this.data.currentaddress = this.data3.currentaddress;
                    this.data.residentialstatus = this.data3.residentialstatus;
                    this.data.residingsince = this.data3.residingsince;
                    this.data.purpose = this.data3.purpose;
                    this.data.city = this.data3.city;
                    
                    if(this.data.residingsince == "Birth"){
                      this.residence1 = false;
                      this.data.years = this.data3.years;
                    }
                    else{
                      this.residence1 = true;
                      this.data.years = this.data3.years;
                    }
                    this.data.permanentaddress = this.data3.permanentaddress;
                    this.data.othermobilenum = this.data3.othermobilenum;
                    this.data.landline = this.data3.landline;
                    this.data.gender = this.data3.gender;
                    this.data.maritalstatus = this.data3.maritalstatus;
                    this.data.education = this.data3.education;
                    this.data.loanAmount = this.data3.loanAmount;
                    
                  }
                  else {
                    this.error = res.Message;
                  }
        
                },
                err => console.log(err)
              )
            }
            
            if(res.status == 200)
            {
             
            }
            else {
              this.error = res.Message;
            }
  
          },
          err => console.log(err)
        )
      
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
      this.data._id = localStorage.getItem('_id');
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
        _id : this.data._id,
        loanAmount : this.data.loanAmount
      }
      if(this.profession == true){
        this._auth.salariedLAF1(dataLaf1).subscribe(
          res => {
            if(res.status==200){
              setTimeout((router: Router) => {
                this.router.navigate(['/laf2']);
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
              setTimeout((router: Router) => {
                this.router.navigate(['/laf2']);
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



