import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfirmBoxComponent } from './../confirm-box/confirm-box.component';
import { ReasonComponent } from './../reason/reason.component';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  usersData = <any> {};
  systemUsersData = <any> {};
  roleUsersData = <any> {};
  goldRateData = <any> {};
  archivingOfFilesData = <any> {};
  
  usersSelect = true;
  systemUsersSelect = false;
  roleUsersSelect = false;
  goldRateSelect = false;
  archivingOfFiles = false;
  bsId = "";
  reason = "";
  bsName = "";
  searchText;
  type = "";
  key: string = 'createdAt'; //set default
  reverse: boolean = false;
  filter ="";
  p: number = 1;

  constructor(private  dialog:  MatDialog,private toastr: ToastrService,private _auth: AuthService,public router: Router) { 
    this.bsId=localStorage.getItem("_id");
    this.bsName=localStorage.getItem("fullname");
  }

  ngOnInit(): void {
    if(!this._auth.loggedIn() && localStorage.getItem('type') != 'admin')
    {
      this.router.navigate(['/login']);
    }
    this.getUsers();
  }
  getUsers(){
    this.searchText = "";
      this.systemUsersSelect = false;
      this.roleUsersSelect = false;
      this.goldRateSelect = false;
      this.usersSelect = true;
      this.archivingOfFiles = false;

      this._auth.getSystemUsers("customer").subscribe( res => {
            this.usersData = res;
      },err => {
            console.log(err)
      })
  }
  getSystemUsers(){
    this.searchText = "";
      this.systemUsersSelect = true;
      this.roleUsersSelect = false;
      this.goldRateSelect = false;
      this.usersSelect = false;
      this.archivingOfFiles = false;

    this._auth.getSystemUsers("admin").subscribe( res => {
          this.systemUsersData = res;
    },err => {
          console.log(err)
    })
  }
  getRoleUsers(){
    this.searchText = "";
    this.systemUsersSelect = false;
    this.roleUsersSelect = true;
    this.goldRateSelect = false;
    this.usersSelect = false;
    this.archivingOfFiles = false;

  
    this._auth.getRoleUsers().subscribe(res => {
        this.roleUsersData = res;
    },err => {
        console.log(err);
    })
  }
  deleteRoleUser(event){
    
            var dialogRef = undefined;
            dialogRef = this.dialog.open(ConfirmBoxComponent,{ data: event });
            dialogRef.afterClosed().subscribe(result => {
              if(result == undefined){
                  // this.reason = undefined;
                  this.toastr.error("User not Deleted", 'Failed', {
                    positionClass: 'toast-top-right'
                  })
              }
              else if(result != undefined) {
                  // this.reason = result.reason;
                  this._auth.deleteUser(event._id).subscribe( res => {
                    this.toastr.success("User Successfully Deleted", 'Success', {
                      positionClass: 'toast-top-right'
                    });
                        window.setTimeout(() => {
                            location.reload();
                        }, 1500);
                  }, err => {
                    this.toastr.error("User not Deleted", 'Failed', {
                      positionClass: 'toast-top-right'
                    })
                  })
              }
              
            });

  }
  goldRate(){
    this.searchText = "";
    this.systemUsersSelect = false;
    this.roleUsersSelect = false;
    this.goldRateSelect = true;
    this.usersSelect = false;
    this.archivingOfFiles = false;
    this._auth.goldRateArchive().subscribe( res => {
        this.goldRateData = res.data;
    },err => {
        console.log(err)
    })
  }
  archivingFiles(){
    this.searchText = "";
    this.systemUsersSelect = false;
    this.roleUsersSelect = false;
    this.goldRateSelect = false;
    this.usersSelect = false;
    this.archivingOfFiles = true;
    this._auth.getAllFiles().subscribe(res =>{
      this.archivingOfFilesData = res;
    },err =>{
        console.log(err);
    })
  }
  resetSearch(){
    this.searchText = "";
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

}
