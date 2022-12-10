import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-get-elibility',
  templateUrl: './get-elibility.component.html',
  styleUrls: ['./get-elibility.component.css']
})
export class GetElibilityComponent implements OnInit {

  data = <any>{};
  data1 = <any>{};
  data3 = <any>{};
  data20 = <any>{};
  sucess = "";
  recommend = false;
  recommend1 = false;
  recommend2 = false;
  finalLoanAmount = 0 ;
  finalLoanAmount2 = 0 ;



  verfication = "";
  userId = "";
  //baseURL = "http://134.209.144.186:3000";
  baseURL = "https://api.goldfin.com.pk";
  
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
            if(this.data1[0].profession=="Salaried"){
              this.data.profession = "Salaried";
              this.recommend = true;
              this.recommend1 = false;
              this.recommend2 = false;
            }
            else{
              this.data.profession = "Self-Employee";
              this.recommend = false;
              this.recommend1 = true;
              this.recommend2 = true;
            }
            this._auth.getFilledForm(this.userId)
            .subscribe(
              res => {
                
                this._auth.getCMOForm(this.userId)
                .subscribe(
                  res123 => {
                    if(res123.data.length != 0){
                      this.data20 = res123.data[0];
                      this.finalLoanAmount2 = res123.data[0].marketValue;
                    }
                     

                this.data3 = res.data;
                  if(this.data1[0].profession=="Salaried"){
                    this.data.netsalary = Number(this.data3.netsalary);
                    this.data.othersource = Number(this.data3.othersource);
                    this.data.totalexpense = Number(this.data3.totalexpense);
                    this.data.desiredLoanAmount = Number(this.data3.desiredLoanAmount);
                    this.data.totalmonthlyincome = Number(this.data.netsalary) + Number(this.data3.othersource);
                    this.data.totalminus = Number(this.data.totalmonthlyincome) - Number(this.data3.totalexpense);
                    if(this.data.totalminus >= Number(this.data.netsalary))
                    {
                      this.data.low = Number(this.data.netsalary);
                    } 
                    else if (this.data.totalminus <= Number(this.data.netsalary)){
                      this.data.low = Number(this.data.totalminus);
                    }
                    this.data.result = Number(this.data.low*12);
                    
                    if(this.data.result >= Number(this.finalLoanAmount2)){
                      this.finalLoanAmount = Number(this.finalLoanAmount2);
                      this.data.result3 = this.finalLoanAmount;
                      this.data.result2 = "Eligible For the Amount : Rs. "+this.finalLoanAmount;
                    }
                    else if(this.data.result <= Number(this.finalLoanAmount2)){
                      this.finalLoanAmount = Number(this.data.result);
                      this.data.result3 = Number(this.data.result);
                      this.data.result2 = "Eligible For the Amount : Rs. "+this.finalLoanAmount;
                    }
                    // if(this.finalLoanAmount2 != undefined || this.finalLoanAmount2 != null){
                      
                    // }
                    // else {
                    //   if(this.data.result >= this.data.desiredLoanAmount){
                    //     this.data.result2 = "Eligible";
                    //   }
                    //   else {
                    //     this.data.result2 = "Not Eligible";
                    //   }
                    // }
                    
                  }
                  else {
                    this.data.averagemonthbusinessexp = Number(this.data3.averagemonthbusinessexp);
                    this.data.avgmonthturnover = Number(this.data3.avgmonthturnover);
                    this.data.monthlyincome = Number(this.data3.monthlyincome);
                    this.data.totalexpense = Number(this.data3.totalexpense);
                    this.data.desiredLoanAmount = Number(this.data3.desiredLoanAmount);
                    this.data.a = Number(this.data.avgmonthturnover - this.data.averagemonthbusinessexp)+this.data.monthlyincome;
                    this.data.b = this.data.totalexpense;
                    this.data.c = this.data.avgmonthturnover - this.data.averagemonthbusinessexp;
                    this.data.totalminus = this.data.a - this.data.b;
                    if(this.data.totalminus >= this.data.c)
                    {
                      this.data.low = this.data.c;
                    } 
                    else if (this.data.totalminus <= this.data.c){
                      this.data.low = this.data.totalminus;
                    }
                    this.data.result = Number(this.data.low*12);
                    if(this.data.result >= Number(this.finalLoanAmount2)){
                      this.finalLoanAmount = Number(this.finalLoanAmount2);
                      this.data.result3 = this.finalLoanAmount;
                      this.data.result2 = "Eligible For the Amount : Rs. "+this.finalLoanAmount;
                    }
                    else if(this.data.result <= Number(this.finalLoanAmount2)){
                      this.finalLoanAmount = Number(this.data.result);
                      this.data.result3 = Number(this.data.result);
                      this.data.result2 = "Eligible For the Amount : Rs. "+this.finalLoanAmount;
                    }
                    
                    // if(this.data.result >= this.data.desiredLoanAmount){
                    //   this.data.result2 = "Eligible";
                    // }
                    // else {
                    //   this.data.result2 = "Not Eligible";
                    // }


                  }
                });
              
              },
              err => console.log(err)
            )

          },
          err => console.log(err)
    )
   
   
  }
  

}
