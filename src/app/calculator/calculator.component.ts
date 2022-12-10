import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  goldrate ;
  test1: boolean = false;
  goldvalue = <any>{};
  goldrate1;
  @Input() amount;
  gold = <any>{};
  alldata: any=[];
  valueweight : string = '0.00';
  valueweight2 : string = '0.00';
  valueweight1 : string = '0.00';
  goldweight = 0.0;
  constructor(private _auth: AuthService,public router: Router) { }
  ngOnInit(): void {
    this.goldprice();

  }
  
  goldprice() {

    this._auth.getgoldprice()
      .subscribe(
        data => {
          this.alldata = data.data;
          this.goldrate1= this.alldata[0].goldrate
          this.goldrate= this.alldata[1].goldrate
        }
      );
  }
  update(value: any) {
    this.goldweight = Number(value);
    this.goldweight = this.goldweight * 1.25;
    this.valueweight = (this.goldweight/this.goldrate).toFixed(2);
    this.valueweight1 = (this.goldweight/this.goldrate1).toFixed(2)

  }
  update1(value: any) {
    this.goldweight = Number(value);
    this.goldweight = this.goldweight /1.25;
    if(this.goldvalue.value==null||this.goldvalue.value==undefined||this.goldvalue.value=='undefined'){
        this.test1=true;
    }
    else {
      this.test1=false;
      if(this.goldvalue.value=="1"){
        this.valueweight2 = (this.goldweight*this.goldrate).toFixed(2);
      }
      else if(this.goldvalue.value=="2"){

        this.valueweight2 = (this.goldweight*this.goldrate1).toFixed(2);
      }
    }




  }
}
