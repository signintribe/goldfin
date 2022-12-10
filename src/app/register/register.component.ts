import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService,public router: Router) { }
  data = <any>{};
  error = "";
  passLower = /^(?=.*[a-z]).+$/;
  passUper = /^(?=.*[A-Z]).+$/;
  passnbr = /^(?=.*[\d]).+$/;
  passspecial = /([-+=_!@#$%^&*.,;:'\"<>/?`~\[\]\(\)\{\}\\\|\s])/;
  passw=  /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
  values = 0;
  statusCode = 0;
  statusCode2 = 0;
  statusCode3 = 0;
  suggest = '';
  suggestName = '';
  suggestName1 = '';
  suggestName2 = '';
  firstDash = false;
  sucess = "";
  verify = false;
  ngOnInit(): void {
    if(this._auth.loggedIn())
    {
      this.router.navigate(['/']);
    }
    this.data.phone = "+92";
  }
  registerUser(){
    this.error = "";
    this._auth.userNameCheck(this.data.userName)
    .subscribe(
      res => {
        this.statusCode = res.status;
        if(this.statusCode == 200){
          this.error = "Username already registered."
          return;
        }
      },
      err => console.log(err)
    )
    this._auth.phoneCheck(this.data.phone)
    .subscribe(
      res => {
        this.statusCode2 = res.status;
        if(this.statusCode2 == 200){
          this.error = "Phone Number already registered."
          return;
        }
      },
      err => console.log(err)
    )
    this._auth.cnicCheck(this.data.cnic)
    .subscribe(
      res => {
        this.statusCode3 = res.status;
        if(this.statusCode3 == 200){
          this.error = "CNIC already registered."
        }
        else if(this.statusCode == 200){
          this.error = "Username already registered."
          return;
        }
        else if(this.statusCode2 == 200){
          this.error = "Phone Number already registered."
          return;
        }
        else {
          
          if(this.data.password!=this.data.password2){
            this.error="Both Passwords does not match";
          }
          else if(this.data.password.length<7 ){
             this.error="Password must be greater than 7 characters.";
          }
          else if(!(this.data.password.match(this.passLower))){
             this.error="Password must contain atleast one lower case letter.";
          }
          else if(!(this.data.password.match(this.passUper))){
            this.error="Password must contain atleast one uper case letter.";
          }
          else if(!(this.data.password.match(this.passnbr))){
            this.error="Password must contain atleast one number.";
          }
          else if(!(this.data.password.match(this.passspecial))){
            this.error="Password must contain atleast one SPECIAL character.";
          }
          else if(this.data.phone.substr(0,1) != "+" ){
            this.error = "Enter the Phone Number in valid format : +92-xxx-xxxxxxx";
          }
          else if(this.data.phone.slice(1,3) != "92" ){
            this.error = "Use +92 Pakistan Dialing Code";
          }
          else if(this.data.cnic==null || this.data.cnic.length == 0 || this.data.cnic.length != 15){
            this.error="Please enter the valid CNIC number.";
          }
          else if(this.data.agree == undefined){
            this.error="Please agree to Goldfin Terms and conditions.";
          }
          else{
            this.data.type="customer";
            this.sucess="";
            this.error="";
            
           
            if(this.data.cnic.slice(5,6) !='-'){
              this.data.cnic = this.data.cnic.slice(0, 5) + "-"+this.data.cnic.substr(7,this.data.cnic.length - 1) ;
            }
            if(this.data.cnic.slice(13,14) !='-'){
              this.data.cnic = this.data.cnic.slice(0, 13) + "-"+this.data.cnic.substr(14,this.data.cnic.length - 1) ;
            }
            if(this.data.phone.slice(3,4) !='-'){
              this.data.phone = this.data.phone.slice(0, 3) + "-"+this.data.phone.substr(5,this.data.phone.length - 1) ;
            }
            if(this.data.phone.slice(7,8) !='-'){
              this.data.phone = this.data.phone.slice(0, 7) + "-"+this.data.phone.substr(9,this.data.phone.length - 1) ;
            }
            
            else {
              
                this._auth.registerUser(this.data).subscribe(
                  res => {
                    if(res.status==200){
                      this.sucess="You are sucessfully registered to Goldfin Portal, Kindly login and verify the phone number.";
                      setTimeout((router: Router) => {
                        this.router.navigate(['/login']);
                      }, 1500);
                    }
                    else if(res.status==403) {
                      this.error = res.Message;
                    }
                  },
                  err => console.log(err)
                )
            }
          }
        }
      },
      err => console.log(err)
    )
    
    
    
  }
  onKeyCNIC(event: any) {
    if(event.target.value.length == 5){
      this.data.cnic = event.target.value + '-';
    }
    else if (event.target.value.length == 13){
      this.data.cnic = event.target.value + '-';
    }
  }

  onKeyMobile(event: any) {
    if(this.values == 0){
      this.data.phone = this.data.phone.slice(0, 3) + "-"+event.target.value.substr(event.target.value.length - 1);
    }
    
    if(event.target.value.length == 3){
      this.data.phone = event.target.value + '-';
    }
    else if (event.target.value.length == 7){
      this.data.phone = event.target.value + '-';
    }
    this.values ++;
    
  }
  onKeyUsername(event: any) {
      var pageURL = this.data.email;
      var lastURLSegment = pageURL.substr(0,pageURL.lastIndexOf('@'));
      this.suggest = "Suggestions : "
      this.suggestName=lastURLSegment+Math.floor(Math.random() * 99)+",";
      this.suggestName1 = lastURLSegment+Math.floor(Math.random() * 99)+",";
      this.suggestName2 = lastURLSegment+Math.floor(Math.random() * 99);
      
  }
  onClickMe(event: any) {
    let var1 = event.substr(0,event.lastIndexOf(','));
    this.data.userName = var1;
  }
  onClickMe1(event: any) {
    let var1 = event.substr(0,event.lastIndexOf(','));
    this.data.userName = var1;
  }
  onClickMe2(event: any) {
    let var1 = event;
    this.data.userName = var1;
  }
  
}
