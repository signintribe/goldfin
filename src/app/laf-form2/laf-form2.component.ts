import { Component, OnInit } from '@angular/core';

import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-laf-form2',
  templateUrl: './laf-form2.component.html',
  styleUrls: ['./laf-form2.component.css']
})
export class LafForm2Component implements OnInit {
  data = <any>{};
  data3 = <any>{};
  data1 = <any>{};
  totalexpense = [];
  totalexpense2 = [];
  total1 = <any>0.00;
  total2 = <any>0.00;
  totalexpense1 = <any>0.00;
  profession = false;
  profession1 = false;
  oustandingLoan = false;
  error = "";
  userId = "";
  verfication = "";
  professionalInformation = "";
  formDone = "";
  link = "";
  constructor(private _auth: AuthService,public router: Router) { }


  ngOnInit(): void {

    if(!this._auth.loggedIn())
    {
      this.router.navigate(['/login']);
    }
    else {
      var pageURL = window.location.href;
      this.link= pageURL.substr(pageURL.lastIndexOf('/') + 1);
      this.userId = localStorage.getItem('_id');
      this._auth.userData(this.link)
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
              
              this.profession=true;
              this.profession1=false;
            }
            else{
              this.profession1=true;
              this.profession=false;
            }
            if(this.data1[0].professionalInformation=="true"){
              this.professionalInformation = "true";
            }
            else{
              this.professionalInformation = "false";
            }
            
            if(this.professionalInformation == "true"){
              this._auth.webFormLAF(this.link)
              .subscribe(
                res => {
                  this.data3 = res.data;
                  if(res.status == 200)
                  {
                    var newdate2;
                    if(this.profession == true){
                      if(this.data3.dateofjoining !=null){
                        var index = this.data3.dateofjoining.indexOf('-');
                        if(index == 2){
                          var date = this.data3.dateofjoining;
                          newdate2 = date.split("-").reverse().join("-");
                        }
                        else if(index == 4) {
                          newdate2 = this.data3.dateofjoining;
                        }
                      }
                      if(this.data3.outstandingloan == "Yes"){
                          this.oustandingLoan = true
                      }
                      else {
                          this.oustandingLoan = false;
                      }
                      this.data.profession = this.data3.profession,
                      this.data.designation = this.data3.designation,
                      this.data.empname = this.data3.empname,
                      this.data.empaddress = this.data3.empaddress,
                      this.data.phone = this.data3.phone,
                      this.data.website = this.data3.website,
                      this.data.jobstatus = this.data3.jobstatus,
                      this.data.dateofjoining = newdate2,
                      this.data.totalexp = this.data3.totalexp,
                      this.data.grosssalary = this.data3.grosssalary,
                      this.data.netsalary = this.data3.netsalary,
                      this.data.othersource = this.data3.othersource,
                      this.data.natureofincome = this.data3.natureofincome,

                      this.data.desiredLoanAmount = this.data3.desiredLoanAmount,
                      this.data.outstandingloan = this.data3.outstandingloan,
                      this.data.sourceofloan = this.data3.sourceofloan,
                      this.data.outstandingloanamount = this.data3.outstandingloanamount,
                      
                      this.data.household = this.data3.household,
                      this.data.houserent = this.data3.houserent,
                      this.data.utilitybill = this.data3.utilitybill,
                      this.data.childeducation = this.data3.childeducation,
                      this.data.medical = this.data3.medical,
                      this.data.committe = this.data3.committe,
                      this.data.loaninstallment = this.data3.loaninstallment,
                      this.data.totalexpense = this.data3.totalexpense,
                      this.total1 = this.data3.totalexpense,
                      this.data.other0 = this.data3.other0
                    }
                    else {
                      var newdate;
                      var newdate1;
                      if(this.data3.dateofreg !=null){
                          var index = this.data3.dateofreg.indexOf('-');
                          if(index == 2){
                            var date = this.data3.dateofreg;
                            newdate = date.split("-").reverse().join("-");
                          }
                          else if(index == 4) {
                            newdate = this.data3.dateofreg;
                          }
                      }
                      if(this.data3.establishsince !=null){
                        var index = this.data3.establishsince.indexOf('-');
                        if(index == 2){
                          var date = this.data3.establishsince;
                          newdate1 = date.split("-").reverse().join("-");
                        }
                        else if(index == 4) {
                          newdate1 = this.data3.establishsince;
                        }
                      }
                      if(this.data3.outstandingloan == "Yes"){
                        this.oustandingLoan = true
                      }
                      else {
                          this.oustandingLoan = false;
                      }
                      this.data.profession = this.data3.profession,
                      this.data.bussinessname = this.data3.bussinessname;
                      this.data.businessStatus = this.data3.businessStatus,
                      this.data.bussinessaddress = this.data3.bussinessaddress,
                      this.data.bussinesslandline = this.data3.bussinesslandline,
                      this.data.bussinesswebsite = this.data3.bussinesswebsite,
                      this.data.bussinessOwnstatus = this.data3.bussinessOwnstatus,
                      this.data.natureofbusiness = this.data3.natureofbusiness,
                      this.data.companyname = this.data3.companyname,
                      this.data.establishsince = newdate1,
                      this.data.secp = this.data3.secp,
                      this.data.dateofreg = newdate,
                      this.data.ntn = this.data3.ntn,
                      this.data.nbrofemp = this.data3.nbrofemp,
                      this.data.working = this.data3.working,
                      this.data.ownland = this.data3.ownland,
                      this.data.rentedland = this.data3.rentedland,
                      this.data.cultivating = this.data3.cultivating,
                      this.data.maincrops = this.data3.maincrops,
                      this.data.animals = this.data3.animals,
                      this.data.averagemonthbusinessexp = this.data3.averagemonthbusinessexp,
                      this.data.avgmonthturnover = this.data3.avgmonthturnover,
                      this.data.monthlyincome = this.data3.monthlyincome,
                      this.data.otherincome = this.data3.otherincome,
                      this.data.monthlyaccounts = this.data3.monthlyaccounts,

                      this.data.desiredLoanAmount = this.data3.desiredLoanAmount,
                      this.data.outstandingloan = this.data3.outstandingloan,
                      this.data.sourceofloan = this.data3.sourceofloan,
                      this.data.outstandingloanamount = this.data3.outstandingloanamount,

                      this.data.household1 = this.data3.household1,
                      this.data.houserent1 = this.data3.houserent1,
                      this.data.utilitybills1 = this.data3.utilitybills1,
                      this.data.childeducation1 = this.data3.childeducation1,
                      this.data.medical1 = this.data3.medical1,
                      this.data.committee1 = this.data3.committee1,
                      this.data.loaninstallment1 = this.data3.loaninstallment1,
                      this.data.totalexpense = this.data3.totalexpense,
                      this.data.other3 = this.data3.other3,
                      this.total2 = this.data3.totalexpense
                    }
                                      
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
  onOptionsSelected1(value : any){
    if(value=="Yes"){
      this.oustandingLoan = true;
    }
    else{
      this.oustandingLoan=false;
    }
  }
  selectlf2(){
    if(this.data.profession==undefined || this.data.profession=="undefined"){
      this.error = "Select the your Profession";
    }
    else if(this.profession==true){ 
    

        this.data._id = this.link;
        let dataFinal = {
          _id : this.data._id,
          profession : this.data.profession,
          designation : this.data.designation,
          empname: this.data.empname,
          empaddress : this.data.empaddress,
          phone : this.data.phone,
          website : this.data.website,
          jobstatus : this.data.jobstatus,
          dateofjoining : this.data.dateofjoining,
          totalexp : this.data.totalexp,
          grosssalary : this.data.grosssalary,
          netsalary : this.data.netsalary,
          othersource : this.data.othersource,
          natureofincome : this.data.natureofincome,
          

          outstandingloan : this.data.outstandingloan,
          sourceofloan : this.data.sourceofloan,
          desiredLoanAmount : this.data.desiredLoanAmount,
          outstandingloanamount : this.data.outstandingloanamount,
          
          household : this.data.household,
          houserent : this.data.houserent,
          utilitybill : this.data.utilitybill,
          childeducation : this.data.childeducation,
          medical : this.data.medical,
          committe : this.data.committe,
          loaninstallment : this.data.loaninstallment,
          totalexpense : this.total1,
          other0 : this.data.other0
        }
        this._auth.salariedLAFWeb2(dataFinal).subscribe(
          res => {
            if(res.status==200){
              setTimeout((router: Router) => {
                alert("Changes submitted");
              }, 1500);
            }
            else {
              this.error="Unknown Issue";
            }
          },
          err => console.log(err)
        )

     
      
    }
    else if(this.profession1==true){
       
        this.data._id = this.link;
        let dataFinal = {
          _id : this.data._id,
          profession : this.data.profession,
          bussinessname : this.data.bussinessname,
          businessStatus : this.data.businessStatus,
          bussinessaddress: this.data.bussinessaddress,
          bussinesslandline : this.data.bussinesslandline,
          bussinesswebsite : this.data.bussinesswebsite,
          bussinessOwnstatus : this.data.bussinessOwnstatus,
          natureofbusiness : this.data.natureofbusiness,
          companyname : this.data.companyname,
          secp : this.data.secp,
          dateofreg : this.data.dateofreg,
          ntn : this.data.ntn,
          nbrofemp : this.data.nbrofemp,
          working : this.data.working,
          ownland : this.data.ownland,
          rentedland : this.data.rentedland,
          cultivating : this.data.cultivating,
          maincrops : this.data.maincrops,
          animals : this.data.animals,
          averagemonthbusinessexp : this.data.averagemonthbusinessexp,
          avgmonthturnover : this.data.avgmonthturnover,
          monthlyincome : this.data.monthlyincome,
          otherincome : this.data.otherincome,
          monthlyaccounts : this.data.monthlyaccounts,
          establishsince : this.data.establishsince,
          outstandingloan : this.data.outstandingloan,
          sourceofloan : this.data.sourceofloan,
          desiredLoanAmount : this.data.desiredLoanAmount,
          outstandingloanamount : this.data.outstandingloanamount,

          household1 : this.data.household1,
          houserent1 : this.data.houserent1,
          medical1 : this.data.medical1,
          utilitybills1 : this.data.utilitybills1,
          childeducation1 : this.data.childeducation1,
          committee1 : this.data.committee1,
          loaninstallment1 : this.data.loaninstallment1,
          totalexpense : this.total2,
          other3 : this.data.other3
        }
        this._auth.businessLAFWeb2(dataFinal).subscribe(
          res => {
            if(res.status==200){
              setTimeout((router: Router) => {
                alert("Changes submitted");
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

  onKeycal(value: any) {
      if(this.data.household != null && this.data.household != undefined){
          this.totalexpense[0]= parseInt(this.data.household);
      }
      else
      {
        this.totalexpense[0]= 0;
      }
      if(this.data.houserent != null && this.data.houserent != undefined){
        this.totalexpense[1]= parseInt(this.data.houserent);
      }
      else
      {
        this.totalexpense[1]= 0;
      }
      if(this.data.utilitybill != null && this.data.utilitybill != undefined){
        this.totalexpense[2]= parseInt(this.data.utilitybill);
      }
      else
      {
        this.totalexpense[2]= 0;
      }
      if(this.data.childeducation != null && this.data.childeducation != undefined){
        this.totalexpense[3]= parseInt(this.data.childeducation);
      }
      else
      {
        this.totalexpense[3]= 0;
      }
      if(this.data.medical != null && this.data.medical != undefined){
        this.totalexpense[4]= parseInt(this.data.medical);
      }
      else
      {
        this.totalexpense[4]= 0;
      }
      if(this.data.committe != null && this.data.committe != undefined){
        this.totalexpense[5]= parseInt(this.data.committe);
      }
      else
      {
        this.totalexpense[5]= 0;
      }
      if(this.data.loaninstallment != null && this.data.loaninstallment != undefined){
        this.totalexpense[6]= parseInt(this.data.loaninstallment);
      }
      else
      {
        this.totalexpense[6]= 0;
      }
      if(this.data.other0 != null && this.data.other0 != undefined){
        this.totalexpense[7]= parseInt(this.data.other0);
      }
      else
      {
        this.totalexpense[7]= 0;
      }
      this.total1 = parseInt(this.totalexpense[0]);
      this.total1 += parseInt(this.totalexpense[1]);
      this.total1 += parseInt(this.totalexpense[2]);
      this.total1 += parseInt(this.totalexpense[3]);
      this.total1 += parseInt(this.totalexpense[4]);
      this.total1 += parseInt(this.totalexpense[5]);
      this.total1 += parseInt(this.totalexpense[6]);
      this.total1 += parseInt(this.totalexpense[7]);
    }


    onKeycal2(value: any) {
      if(this.data.household1 != null && this.data.household1 != undefined){
          this.totalexpense2[0]= parseInt(this.data.household1);
      }
      else
      {
        this.totalexpense2[0]= 0;
      }
      if(this.data.houserent1 != null && this.data.houserent1 != undefined){
        this.totalexpense2[1]= parseInt(this.data.houserent1);
      }
      else
      {
        this.totalexpense2[1]= 0;
      }
      if(this.data.utilitybills1 != null && this.data.utilitybills1 != undefined){
        this.totalexpense2[2]= parseInt(this.data.utilitybills1);
      }
      else
      {
        this.totalexpense2[2]= 0;
      }
      if(this.data.childeducation1 != null && this.data.childeducation1 != undefined){
        this.totalexpense2[3]= parseInt(this.data.childeducation1);
      }
      else
      {
        this.totalexpense2[3]= 0;
      }
      if(this.data.medical1 != null && this.data.medical1 != undefined){
        this.totalexpense2[4]= parseInt(this.data.medical1);
      }
      else
      {
        this.totalexpense2[4]= 0;
      }
      if(this.data.committee1 != null && this.data.committee1 != undefined){
        this.totalexpense2[5]= parseInt(this.data.committee1);
      }
      else
      {
        this.totalexpense2[5]= 0;
      }
      if(this.data.loaninstallment1 != null && this.data.loaninstallment1 != undefined){
        this.totalexpense2[6]= parseInt(this.data.loaninstallment1);
      }
      else
      {
        this.totalexpense2[6]= 0;
      }
      if(this.data.other3 != null && this.data.other3 != undefined){
        this.totalexpense2[7]= parseInt(this.data.other3);
      }
      else
      {
        this.totalexpense2[7]= 0;
      }
      this.total2 = parseInt(this.totalexpense2[0]);
      this.total2 += parseInt(this.totalexpense2[1]);
      this.total2 += parseInt(this.totalexpense2[2]);
      this.total2 += parseInt(this.totalexpense2[3]);
      this.total2 += parseInt(this.totalexpense2[4]);
      this.total2 += parseInt(this.totalexpense2[5]);
      this.total2 += parseInt(this.totalexpense2[6]);
      this.total2 += parseInt(this.totalexpense2[7]);
    }
}
