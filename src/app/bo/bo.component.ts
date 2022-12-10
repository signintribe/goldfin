import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bo',
  templateUrl: './bo.component.html',
  styleUrls: ['./bo.component.css']
})
export class BoComponent implements OnInit {
  type = "";
  constructor(private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {
    this.type=localStorage.getItem("type");
    if(this.type != "bo"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 10);
    }
  }

}
