import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ReasonComponent } from './../reason/reason.component';
import { PopfileComponent } from './../popfile/popfile.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-bo2',
  templateUrl: './bo2.component.html',
  styleUrls: ['./bo2.component.css']
})
export class Bo2Component implements OnInit {

  data = <any> {};
  data1 = <any> [];
  data20 = <any> [];
  search = false;
  reason = "";
  searchText;
  type = "";
  key: string = 'createdAt'; //set default
  reverse: boolean = false;
  filter ="";
  p: number = 1;
  assignVO = false;
  directCSO = false;
  popData = <any> [];
  bsId = "";
  popData2 = <any> [];
  bsName = "";
  status = "";
  getdirectBOForms = false;
  loanAmount: any;
  accountClose = false;
  addLoanCusId: any;
  addLoanData:any = {};
  editData:any = {};
  rollup:any = {};

  constructor(private toastr: ToastrService,private  dialog:  MatDialog,private _auth: AuthService,public router: Router) { 
    this.type=localStorage.getItem("type");
    this.bsId=localStorage.getItem("_id");
    this.bsName=localStorage.getItem("fullname");
    if(this.type != "bo"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 10);
    }
    this._auth.getFormsBO()
    .subscribe(
      res => {
        this.data = undefined;
        this.data = res;


        this._auth.getdirectBSForms()
        .subscribe(
          res => {
            this.data20 = undefined;
            this.data20 = res;


            var dialogRef = undefined;
            var jj =0;
            var jj2 =0;
            for(var o =0;o < this.data.data.length ; o++){
              if(this.data.data[o].isUpdated == true){
                this.popData[jj] = this.data.data[o];
                this.popData[jj].source = "From CSO";
                jj++;
              }
            }
            for(var o =0;o < this.data20.data.length ; o++){
              if(this.data20.data[o].isUpdated == true){
                this.popData[jj] = this.data20.data[o];
                this.popData[jj].source = "From BO";
                jj++;
              }
            }
            dialogRef = this.dialog.open(PopfileComponent,{ data: this.popData });
            dialogRef.afterClosed().subscribe(result => {
              // if(result.reason == undefined){
              //     // this.reason = undefined;
              // }
              // else if(result.reason != undefined) {
              //     // this.reason = result.reason;
                  
              // }
              
            });


          },
          err => console.log(err)
        )


        
        
       
        
      },
      err => console.log(err)
    )
    window.setInterval(() => this._auth.getFormsBO()
    .subscribe(
      res => {
        this.toastr.success("", 'Updated', {
          positionClass: 'toast-top-right'
        })
        this.data = undefined;
        this.data = res;
       
        this._auth.getdirectBSForms()
        .subscribe(
          res => {
            this.data20 = undefined;
            this.data20 = res;
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    ), 15000);



  }
  ngOnInit(): void {
    
  }
  submit(){
    for(var i =0;i<this.data.data.length;i++){
      if(this.data.searchCNIC==this.data.data[i].cnic){
          this.data1[0] = this.data.data[i];
          this.search = true;
      }
      else {
          this.search = false;
      }
    }
  }
  onOptionsSelected(value : any,value1 : any){
    let sting = "";
    if(value1=="true"){
        this.assignVO=true;
        sting = "Assign";
    }
    else{
        this.assignVO=false;
        sting = "Unassign";
    }
    this._auth.assignVO(value,value1)
      .subscribe(
        res => {
          if(res.status == 200){
            alert("VO Status Change to "+sting);
          }

        },
        err => console.log(err)
    )
  }

  onOptionsSelected1(value : any,value1 : any){
      status = value1;
      if(value1 == "Discrepant"){
          const dialogRef = this.dialog.open(ReasonComponent,{ data: {
          message:  "Error!!!"
          }});
          dialogRef.afterClosed().subscribe(result => {
            if(result.reason == undefined){
                this.reason = undefined;
            }
            else if(result.reason != undefined) {
                this.reason = result.reason;
                this._auth.changeLoanStatus2(value,value1,this.reason,this.bsId,this.bsName)
                .subscribe(
                  res => {
                    if(res.status == 200){
                      alert("Loan Status Change to "+value1);
                    }

                  },
                  err => console.log(err)
                )
            }
            
          });
      }
      else {
          this._auth.changeLoanStatus(value,value1,this.bsId,this.bsName)
          .subscribe(
            res => {
              if(res.status == 200){
                alert("Loan Status Change to "+value1);
              }

            },
            err => console.log(err)
        )
      }
  }


  onOptionsSelected11(value : any,value1 : any){
    let sting = "";
    if(value1=="true"){
        this.directCSO=true;
        sting = "Assign";
    }
    else{
        this.directCSO=false;
        sting = "Unassign";
    }
    this._auth.assignCSO(value,value1)
      .subscribe(
        res => {
          if(res.status == 200){
            alert("CSO Status Change to "+sting);
          }

        },
        err => console.log(err)
    )
  }

  closeAlert(){
    alert("Under Processing");
  }

  showModal(id:any, remainingLoan:any){
    this.addLoanData.id = id;
    this.addLoanData.remainingLoan = remainingLoan;
    this._auth.getLoanAmount(id)
      .subscribe(
        res => {
          if(res.status === 200){
            console.log(res);
            this.loanAmount = res.loanAmount;
          }

        },
        err => console.log(err)
    )
  }

  addLoan(){
    this.addLoanData.loanAmount = this.loanAmount;
    this._auth.addLoanStatus(this.addLoanData)
    .subscribe(
      res => {
        if(res.status === 200){
          this.toastr.success("Loan Status Updated Successfully");
          this.addLoanData = {};
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
        if(res.status === 201){
          this.toastr.success("Loan Status Created Successfully");
          this.addLoanData = {};
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
      },
      err => console.log(err)
    )    
  }

  editUserData(id:any){
    this._auth.getUserData(id)
    .subscribe(
      res => {
        this.editData = res.data;
      }
    )
  }

  submitEditData(){
    console.log(this.editData);
    this._auth.updateUserData(this.editData)
    .subscribe(res => {
      if(res.status === 200){          
          this.toastr.success("User Data Updated Successfully");
          this.editData = {};
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
    })
  }

  rollUp(id:any){
    this.rollup.rollup = 1;
    this.rollup._id = id;
    console.log(this.rollup)

    this._auth.rollUpUser(this.rollup)
    .subscribe(res => {
      if(res.status === 200){          
          this.toastr.success("User Rolled Up");
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
    })
  }
}
