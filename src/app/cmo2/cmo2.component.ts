import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopfileComponent } from './../popfile/popfile.component';

@Component({
  selector: 'app-cmo2',
  templateUrl: './cmo2.component.html',
  styleUrls: ['./cmo2.component.css']
})
export class Cmo2Component implements OnInit {
  data = <any> {};
  data20 = <any> {};
  data1 = <any> [];
  search = false;
  searchText;
  type = "";
  directCMO = false;
  popData = <any> [];
  popData2 = <any> [];
  key: string = 'createdAt'; //set default
  reverse: boolean = true;
  filter ="";
  p: number = 1;
  constructor(private  dialog:  MatDialog,private toastr: ToastrService,private _auth: AuthService,public router: Router) { 
    this.type=localStorage.getItem("type");
    if(this.type != "cmo"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 10);
    }
    this._auth.getFormsCMO()
    .subscribe(
      res => {
        this.data = res;
        this._auth.getdirectCSOForms()
        .subscribe(
          res => {
            this.data20 = res.data;

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
            for(var o =0;o < this.data20.length ; o++){
              if(this.data20[o].isUpdated == true){
                this.popData[jj] = this.data20[o];
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
    this._auth.getFormsCMO()
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
            this.data20 = res.data;
          },
          err => console.log(err)
        )

      },
      err => console.log(err)
    ), 15000);
  }
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
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
}
