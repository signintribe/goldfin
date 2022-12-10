import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-duepayments',
  templateUrl: './duepayments.component.html',
  styleUrls: ['./duepayments.component.css']
})
export class DuepaymentsComponent implements OnInit {

  data = <any> {};
  data1 = <any> [];
  search = false;
  searchText;
  type = "";
  key: string = 'createdAt'; //set default
  reverse: boolean = false;
  filter ="";
  p: number = 1;
  assignVO = false;
  status = "";
  constructor(private _auth: AuthService,public router: Router) { 
    this.type=localStorage.getItem("type");
    if(this.type != "bo"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 10);
    }
    this._auth.getLoanSummaries()
    .subscribe(
      res => {
        this.data = res;

      },
      err => console.log(err)
    )
  }
  ngOnInit(): void {
  }

 


}
