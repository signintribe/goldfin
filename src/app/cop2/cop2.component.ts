import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cop2',
  templateUrl: './cop2.component.html',
  styleUrls: ['./cop2.component.css']
})
export class Cop2Component implements OnInit {
  link="";
  data = <any>{};
  data1 = <any>{};
  salary : boolean = false;
  constructor(private _auth: AuthService,public router: Router) { 
      
  }

  ngOnInit(): void {
    var pageURL = window.location.href;
    this.link= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    this._auth.getFilledForm(this.link)
    .subscribe(
      res => {
        this.data = res.data;
      },
      err => console.log(err)
    )
    this._auth.getFormById(this.link)
    .subscribe(
      res => {
        this.data1 = res.data;
        if(this.data1[0].profession == "Salaried"){
            this.salary = true;
        }
        else {
            this.salary = false;
        }
      },
      err => console.log(err)
    )
  }

}
