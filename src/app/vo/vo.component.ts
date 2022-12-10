import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopfileComponent } from './../popfile/popfile.component';

@Component({
  selector: 'app-vo',
  templateUrl: './vo.component.html',
  styleUrls: ['./vo.component.css']
})
export class VoComponent implements OnInit {
  data = <any> {};
  data1 = <any> [];
  popData = <any> [];
  search = false;
  searchText;
  type = "";
  key: string = 'createdAt'; //set default
  reverse: boolean = false;
  filter ="";
  p: number = 1;
  constructor(private  dialog:  MatDialog,private toastr: ToastrService,private _auth: AuthService,public router: Router) { 
    this._auth.getFormsVO()
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
    this._auth.getFormsVO()
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
    this.type=localStorage.getItem("type");
    if(this.type != "vo"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 10);
    }
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
