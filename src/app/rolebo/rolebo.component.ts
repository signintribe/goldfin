import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopfileComponent } from './../popfile/popfile.component';

@Component({
  selector: 'app-rolebo',
  templateUrl: './rolebo.component.html',
  styleUrls: ['./rolebo.component.css']
})
export class RoleboComponent implements OnInit {

  data = <any> {};
  data1 = <any> [];
  search = false;
  searchText;
  type = "";
  key: string = 'createdAt'; //set default
  reverse: boolean = false;
  filter ="";
  popData = <any> [];
  p: number = 1;
  assignVO = false;
  status = "";

  boId = "";
  boName = "";
  constructor(private  dialog:  MatDialog,private toastr: ToastrService,private _auth: AuthService,public router: Router) { 
    this.type=localStorage.getItem("type");
    this.boId=localStorage.getItem("_id");
    this.boName=localStorage.getItem("fullname");
    if(this.type != "bs"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 10);
    }


    this._auth.getdirectBOForms()
    .subscribe(
      res => {
        this.data = res;

        var dialogRef = undefined;
            var jj =0;
            var jj2 =0;
            for(var o =0;o < this.data.data.length ; o++){
              if(this.data.data[o].isUpdated == true){
                this.popData[jj] = this.data.data[o];
                this.popData[jj].source = "All";
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

    window.setInterval(() =>  
    this._auth.getdirectBOForms()
    .subscribe(
      res => {
        this.toastr.success("", 'Updated', {
          positionClass: 'toast-top-right'
        })
        this.data = undefined;
        this.data = res;

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
    this._auth.assignBO3(value,value1,this.boId,this.boName)
      .subscribe(
        res => {
          if(res.status == 200){
            alert("BS Status Change to "+sting);
          }

        },
        err => console.log(err)
    )
  }

  onOptionsSelected1(value : any,value1 : any){
      status = value1;
      this._auth.changeLoanStatus(value,value1,this.boId,this.boName)
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
