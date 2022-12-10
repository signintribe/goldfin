import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  data1 = <any>{};
  link = "";
  fullname = "";
  email = "";
  userName = "";
  phone = "";
  cnic = "";
  status = "";
  paymentone = "";
  type = "";
  app: boolean = true;
  app1: boolean = false;
  app2: boolean = false;
  app3: boolean = false;
  app4: boolean = false;
  
  user: boolean = false;
  admin: boolean = false;

  cso: boolean = false;
  cmo: boolean = false;
  bo: boolean = false;
  vo: boolean = false;
  bs: boolean = false;
  verfication = "";
  constructor(private _auth: AuthService,public router: Router) { }
  ngOnInit(): void {
    if(!this._auth.loggedIn())
    {
      this.router.navigate(['/login']);
    }
    this.link=localStorage.getItem("_id");
    this._auth.getLoanStatus(this.link)
    .subscribe(
      res => {
        this.data1 = res.data;
      },
      err => console.log(err)
    )
    this.verfication=localStorage.getItem("phoneVerification");
    if(this.verfication == "0"){
      setTimeout((router: Router) => {
        this.router.navigate(['/verify']);
      }, 500);
    }
    this.type=localStorage.getItem("type");
    this.fullname=localStorage.getItem("fullname");
    this.email=localStorage.getItem("email");
    this.userName=localStorage.getItem("userName");
    this.phone=localStorage.getItem("phone");
    this.cnic=localStorage.getItem("cnic");
    this.status=localStorage.getItem("appstatus");
    this.paymentone=localStorage.getItem("appstatus");
    if(this.status==undefined || this.status=="undefined")
    {
      this.status = "You have not submitted any loan application."
    }
    if(this.paymentone==undefined || this.paymentone=="undefined")
    {
      this.paymentone = "You have not made any payment."
    }
    if(this.type=="customer"){
        this.user = true;
        this.admin = false;
        this.cso = false;
        this.cmo = false;
        this.bo = false;
        this.vo = false;
    }
    else if(this.type=="admin"){
        this.admin = true;
        this.user = false;
        this.cso = false;
        this.cmo = false;
        this.bo = false;
        this.vo = false;
    }
    else if(this.type=="cso"){
      this.admin = false;
      this.user = false;
      this.cso = true;
      this.cmo = false;
      this.bo = false;
      this.vo = false;
    }
    else if(this.type=="cmo"){
      this.admin = false;
      this.user = false;
      this.cso = false;
      this.cmo = true;
      this.bo = false;
      this.vo = false;
    }
    else if(this.type=="bo"){
      this.admin = false;
      this.user = false;
      this.cso = false;
      this.cmo = false;
      this.bo = true;
      this.vo = false;
    }
    else if(this.type=="vo"){
      this.admin = false;
      this.user = false;
      this.cso = false;
      this.cmo = false;
      this.bo = false;
      this.vo = true;
    }
    else if(this.type=="bs"){
      this.admin = false;
      this.user = false;
      this.cso = false;
      this.cmo = false;
      this.bo = false;
      this.vo = false;
      this.bs = true;
    }

  }
  logout(){
    localStorage.removeItem('fullname');
    localStorage.removeItem('email');
    localStorage.removeItem('userName');
    localStorage.removeItem('phone');
    localStorage.removeItem('cnic');
    localStorage.removeItem('type');
    localStorage.removeItem('phoneVerification');
    localStorage.removeItem('_id');
    
    this.router.navigate(['/login']);
  }
  defaultone(){
    this.app=true;
    this.app1=false;
    this.app2=false;
    this.app3=false;
  }
  application(){
    this.app=false;
    this.app1=true;
    this.app2=false;
    this.app3=false;
  }
  payments(){
    this.app=false;
    this.app1=false;
    this.app2=true;
    this.app3=false;
  }
  setting(){
    this.app=false;
    this.app1=false;
    this.app2=false;
    this.app3=true;
  }
}
