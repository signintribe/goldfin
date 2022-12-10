import { Component, OnInit } from '@angular/core';

import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-lafv',
  templateUrl: './lafv.component.html',
  styleUrls: ['./lafv.component.css']
})
export class LafvComponent implements OnInit {
  contributes = false;
  data = <any>{};
  data1 = <any>{};
  error = "";
  link = "";
  married = false;
  residence1 = false;
  profession = false;
  profession1 = false;
  data3 = <any>{};
  userId = "";
  personalInformation = "";
  verfication = "";
  formDone = "";
  constructor(private _auth: AuthService,public router: Router) { }

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
        if(this.data1[0].profession=="Salaried"){
          this.data.profession = "Salaried";
        }
        else{
          this.data.profession = "Self-Employee";
        }
       {
          this._auth.getFormData1(this.link)
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
                this.error = res.data.message;
              }
              this._auth.viewUpdate(this.link).subscribe(
                res => {
                  if(res.status==200){

                  }
                  else {
                    this.error="Unknown Issue";
                  }
                },
                err => console.log(err)
              )
            },
            err => console.log(err)
          )
        }

      },
      err => console.log(err)
    )
    if(localStorage.getItem('laf1')=='submitted'){
      this.data.purpose = localStorage.getItem('purpose');
      this.data.city = localStorage.getItem('city');
      this.data.dob = localStorage.getItem('dob');
      this.data.loanAmount = localStorage.getItem('loanAmount');
      this.data.fname = localStorage.getItem('fname');
      this.data.currentaddress = localStorage.getItem('currentaddress');
      this.data.residentialstatus = localStorage.getItem('residentialstatus');
      this.data.residingsince = localStorage.getItem('residingsince');
      if(this.data.residingsince == "Years"){
        this.residence1 = true;
        this.data.years = localStorage.getItem('years');
      }
      else{
        this.data.years = localStorage.getItem('years');
      }
      this.data.permanentaddress = localStorage.getItem('permanentaddress');
      this.data.othermobilenum = localStorage.getItem('othermobilenum');
      this.data.landline = localStorage.getItem('landline');
      this.data.gender = localStorage.getItem('gender');
      this.data.maritalstatus = localStorage.getItem('maritalstatus');
      this.data.education = localStorage.getItem('education');
      this.data.ownership = localStorage.getItem('loanAmount');
      if(localStorage.getItem('married')=="true")
      {
        this.data.married = true;
        this.married = true;
      }
      
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
      localStorage.setItem('laf1','submitted');
      localStorage.setItem('purpose',this.data.purpose);
      localStorage.setItem('city',this.data.city);
      localStorage.setItem('dob',this.data.dob);
      localStorage.setItem('currentaddress',this.data.currentaddress);
      localStorage.setItem('residentialstatus',this.data.residentialstatus);
      localStorage.setItem('residingsince',this.data.residingsince);
      if(this.residence1==true){
        localStorage.setItem('residence',"true");
        localStorage.setItem('years',this.data.years);
      }
      else {
        var pageURL = this.data.dob;
        var lastURLSegment = pageURL.substr(0,pageURL.lastIndexOf('-')-3);
        var numyears = parseInt(lastURLSegment);
        var d = new Date();
        var n = d.getFullYear();
        var finalyears = n-numyears;
        localStorage.setItem('years',finalyears.toString());
      }
      localStorage.setItem('permanentaddress',this.data.permanentaddress);
      localStorage.setItem('othermobilenum',this.data.othermobilenum);
      localStorage.setItem('landline',this.data.landline);
      localStorage.setItem('gender',this.data.gender);
      localStorage.setItem('maritalstatus',this.data.maritalstatus);
      localStorage.setItem('education',this.data.education);
      localStorage.setItem('fname',this.data.fname);
      localStorage.setItem('loanAmount',this.data.loanAmount);
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
                alert("Changes submitted");
                this.router.navigate([window.location.href]);
              }, 1500);
            }
            else {
              this.error="Unknown Issue";
            }
          },
          err => console.log(err)
        )
      }
      else{
        this._auth.businessLAF1(dataLaf1).subscribe(
          res => {
            if(res.status==200){
              setTimeout((router: Router) => {
                alert("Changes submitted");
                this.router.navigate([window.location.href]);
              }, 1500);
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
        localStorage.setItem('profession123',"true");
      }
      else{
        this.profession1=true;
        this.profession=false;
        localStorage.setItem('profession123',"false");
      }
      localStorage.setItem('profession',value);
    }
}
