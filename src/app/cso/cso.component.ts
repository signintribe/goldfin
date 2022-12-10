import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopfileComponent } from './../popfile/popfile.component';

@Component({
  selector: 'app-cso',
  templateUrl: './cso.component.html',
  styleUrls: ['./cso.component.css']
})
export class CsoComponent implements OnInit {
  data = <any> {};
  data20 = <any> {};
  data1 = <any> [];
  popData = <any> [];
  popData2 = <any> [];
  search = false;
  assignBO = false;
  directCSO = false;
  searchText;
  type = "";
  id = "";
  key: string = 'createdAt'; //set default
  reverse: boolean = false;
  filter ="";
  p: number = 1;
  csoId = "";
  csoName = "";
  constructor(private  dialog:  MatDialog,private toastr: ToastrService,private _auth: AuthService,public router: Router) { 
    this.type=localStorage.getItem("type");
    this.csoId=localStorage.getItem("_id");
    this.csoName=localStorage.getItem("fullname");
    if(this.type != "cso"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 10);
    }
    this._auth.getForms()
    .subscribe(
      res => {
        this.data = res;
        
        this._auth.getdirectCSOForms()
        .subscribe(
          res => {
            this.data20 = res;

            var dialogRef = undefined;
            var jj =0;
            var jj2 =0;
            for(var o =0;o < this.data.data.length ; o++){
              if(this.data.data[o].isUpdated == true){
                this.popData[jj] = this.data.data[o];
                this.popData[jj].source = "NON VERIFIED";
                jj++;
              }
            }
            for(var o =0;o < this.data20.data.length ; o++){
              if(this.data20.data[o].isUpdated == true){
                this.popData[jj] = this.data20.data[o];
                this.popData[jj].source = "VERIFIED";
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
    window.setInterval(() =>  
    this._auth.getForms()
    .subscribe(
      res => {
        this.toastr.success("", 'Updated', {
          positionClass: 'toast-top-right'
        })
        this.data = undefined;
        this.data = res;
        
        this._auth.getdirectCSOForms()
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
        this.assignBO=true;
        sting = "Assign";
    }
    else{
        this.assignBO=false;
        sting = "Unassign";
    }
    this._auth.assignBO2(value,value1,this.csoId,this.csoName)
      .subscribe(
        res => {
          if(res.status == 200){
            alert("BS Status Change to "+sting);
          }

        },
        err => console.log(err)
    )
  }

}
