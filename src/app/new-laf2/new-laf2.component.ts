import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-laf2',
  templateUrl: './new-laf2.component.html',
  styleUrls: ['./new-laf2.component.css']
})
export class NewLaf2Component implements OnInit {
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
              
              this.profession=true;
              this.profession1=false;
            }
            else{
              this.profession1=true;
              this.profession=false;
            }
      });
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
        

        this.data._id = this.userId;
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
          
          utilitybills : this.data.utilitybills,
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
              let url = "/newLaf3/"+this.userId;
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
    else if(this.profession1==true){
       
        this.data._id = this.userId;
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
          establishsince : this.data.establishsince,
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

          outstandingloan : this.data.outstandingloan,
          sourceofloan : this.data.sourceofloan,
          desiredLoanAmount : this.data.desiredLoanAmount,
          outstandingloanamount : this.data.outstandingloanamount,
          medical1 : this.data.medical1,
          household1 : this.data.household1,
          houserent1 : this.data.houserent1,
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
              
            let url = "/newLaf3/"+this.userId;
              localStorage.setItem('laf2',"submitted");
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
