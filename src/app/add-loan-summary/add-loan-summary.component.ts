import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-loan-summary',
  templateUrl: './add-loan-summary.component.html',
  styleUrls: ['./add-loan-summary.component.css']
})
export class AddLoanSummaryComponent implements OnInit {

  contributes = false;
  data = <any>{};
  married = false;
  cmoID = "";
  link="";
  type = "";
  data3 = <any>{};
  data2 = <any>{};
  data1 = <any>{};
  sucess = "";
  error = "";
  constructor(private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {
    
    var pageURL = window.location.href;
    this.link= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    this.type=localStorage.getItem("type");
    if(this.type != "bo"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 10);
    }
    
    this._auth.getFilledForm(this.link)
    .subscribe(
      res => {
        this.data1 = res.data;
      },
      err => console.log(err)
    )
    this._auth.userData(this.link)
    .subscribe(
      res => {
        this.data3 = res.data[0];
        // if(res.data[0].dueDate !=null){
        //   this._auth.getLoanSummary(this.link)
        //   .subscribe(
        //     res => {
        //       this.data = res.data;
        //     },
        //     err => console.log(err)
        //   )
        // }
        // else 
        {
          this._auth.getCMOForm(this.link)
          .subscribe(
            res => {
              this.data.name = res.data[0].name;
              this.data.userCode = this.data3._id;
              this.data.loanAmount = this.data1.desiredLoanAmount;
              this.data.securedPacket1Number = res.data[0].securedPacket1Number;
              this.data.securedPacket2Number = res.data[0].securedPacket2Number;
              this.data.shroffName = res.data[0].shroffName;
              this.data.currentCoverage = res.data[0].marketValue;
              this.data.collateralValue = res.data[0].detailsGold[0]+","+res.data[0].detailsGold[1]+","+res.data[0].detailsGold[2]+","+res.data[0].detailsGold[3]+","+res.data[0].detailsGold[4];
            },
            err => console.log(err)
            )
            this._auth.getRatePerGram()
                    .subscribe(
                      res => {
                        this.data.goldRate = res.data.requiredAmount;
                        console.log(this.data.goldRate);
                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = today.getFullYear()+1;
                        var yyyy1 = today.getFullYear();
                        /* this.data.dueDate = yyyy+ '-'+mm+'-'+dd;
                        this.data.loanMaturityDate = yyyy+ '-'+mm+'-'+dd;
                        this.data.loanDisbursementDate = mm + '/' + dd + '/' + yyyy1; */
                        this.data.period = "1 year";
                        this.data.markupRate = 23;//new
                        var loant = Number(this.data1.desiredLoanAmount);
                        var tyt = (loant*parseInt(this.data.markupRate))/100;
                        this.data.totalMarkup = tyt;
                        var yui = (loant*1.16)/100;//new
                        this.data.processingFee = yui;//new
                        /* if(yui > 1000){
                            this.data.processingFee = yui;
                        }
                        else {
                          this.data.processingFee = 1000;
                        } */
                      },
                      err => console.log(err)
            )
        }
      },
      err => console.log(err)
    )



  }
 
  onKeycal2(value : any){
    var loant = Number(this.data1.desiredLoanAmount);
    var tyt = (loant*Number(this.data.markupRate))/100;
    this.data.totalMarkup = tyt;
  }
  onKeycal3(value : any){
    var loant = Number(this.data.loanAmount);
    var tyt = (loant*Number(this.data.markupRate))/100;
    this.data.totalMarkup = tyt;
  }
 

  submit(){
    this.error = "";
    this.sucess = "";
   let dataFinal = {
      customerId : this.link,
      formId : this.data1._id,
      loanAccountNumber : this.data.loanAccountNumber,
      mobileAccountNumber : this.data.mobileAccountNumber,
      securedPacket1Number : this.data.securedPacket1Number,
      securedPacket2Number : this.data.securedPacket2Number,
      goldRate : this.data.goldRate,
      loanAmount : this.data.loanAmount,
      markupRate : this.data.markupRate,
      totalMarkup : this.data.totalMarkup,
      processingFee : this.data.processingFee,
      period : this.data.period,
      loanDisbursementDate : this.data.loanDisbursementDate,
      collateralValue : this.data.collateralValue,
      currentCoverage : this.data.currentCoverage,
      loanMaturityDate : this.data.loanMaturityDate,
      shroffName : this.data.shroffName,
      name : this.data.name,
      userCode : this.data.userCode,
      dueDate : this.data.dueDate,
    }
    if(this.data.loanAccountNumber == null || this.data.mobileAccountNumber == null )
      {
        
        this.error = "All Fields are mandatory, please fill all fields."
      }
      else if(this.data.loanAccountNumber.length > 0 && this.data.mobileAccountNumber.length > 0) {
          this.sucess = "Loan Summary Submitted Sucessfully";
        this._auth.addSummary(dataFinal).subscribe(
          res => {
            if(res.status==200){
              this.sucess = "Loan Summary Submitted Sucessfully";
              setTimeout((router: Router) => {
                this.router.navigate(['/bo2']);
              }, 1500);
            }
            else {
                console.log("Error");
            }
          },
          err => console.log(err)
        )
      }
      else 
      {
        this.error = "All Fields are mandatory, please fill all fields."
      }
    
  }
}
