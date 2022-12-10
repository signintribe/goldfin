import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = <any>{};
  error = "";
  sucess = "";
  constructor(private toastr: ToastrService,private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {

    if(this._auth.loggedIn())
    {
      this.router.navigate(['/account']);
    }
  }
  loginUser()
  {
    this.sucess="";
    this.error="";
    this.data.cnic = this.data.userName;
    if(this.data.userName==null || this.data.userName.length == 0 ){
      this.toastr.error("Please enter the valid Username", 'Login', {
        positionClass: 'toast-top-right'
      })
      this.error="Please enter the valid Username.";
    }
    else if(this.data.password==null  || this.data.password.length == 0 ){
      this.toastr.error("Please enter the valid password", 'Login', {
        positionClass: 'toast-top-right'
      })
      this.error="Please enter the valid password.";
    }
    else {
      this._auth.loginUser(this.data).subscribe(
        res => {
       
          if(res.status==200){
            this.sucess="You are sucessfully logged In";
            this.toastr.success("You are sucessfully logged In", 'Login', {
              positionClass: 'toast-top-right'
            })
            localStorage.setItem("userName",res.data.userName);
            localStorage.setItem("fullname",res.data.fullname);
            localStorage.setItem("_id",res.data._id);
            localStorage.setItem("type",res.data.type);
            localStorage.setItem("email",res.data.email);
            localStorage.setItem("cnic",res.data.cnic);
            localStorage.setItem("phone",res.data.phone);
            if(res.data.type == "customer"){
              if(res.data.phoneVerification=="0"){
                setTimeout((router: Router) => {
                  this.router.navigate(['/verify']);
                }, 500);
              }
              else {
                setTimeout((router: Router) => {
                  this.router.navigate(['/account']);
                }, 500);
              }
              
            }
            else if(res.data.type == "cmo"){
              setTimeout((router: Router) => {
                this.router.navigate(['/cmo']);
              }, 500);
            }
            else if(res.data.type == "vo"){
              setTimeout((router: Router) => {
                this.router.navigate(['/vo']);
              }, 500);
            }
            else if(res.data.type == "cso"){
              setTimeout((router: Router) => {
                this.router.navigate(['/cso']);
              }, 500);
            }
            else if(res.data.type == "bo"){
              setTimeout((router: Router) => {
                this.router.navigate(['/bo2']);
              }, 500);
            }
            else if(res.data.type == "bs"){
              setTimeout((router: Router) => {
                this.router.navigate(['/branchOfficer']);
              }, 500);
            }
            else if(res.data.type == "admin"){
              setTimeout((router: Router) => {
                this.router.navigate(['/superAdmin']);
              }, 500);
            }
            
            
            
          }
          else if(res.status==404){
            this.toastr.error("Invalid Username/Password", 'Login', {
              positionClass: 'toast-top-right'
            })
            this.error="Invalid Username/Password";
          }
          else if(res.status==401){
            this.toastr.error("Your Account is not activated", 'Login', {
              positionClass: 'toast-top-right'
            })
            this.error="Your Account is not activated";
          }
        },
        err => console.log(err)
      )
    }

  }
}
