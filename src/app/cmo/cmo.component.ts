import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cmo',
  templateUrl: './cmo.component.html',
  styleUrls: ['./cmo.component.css']
})
export class CmoComponent implements OnInit {
  contributes = false;
  data = <any>{};
  data3 = <any>{};
  fileListImage: FileList;
  fileListImage1: FileList;
  married = false;
  link="";
  type = "";
  userId = "";
  picture = "";
  showPic1 : boolean = false;
  showPic2 : boolean = false;
  picture1 ="";
  marketValue =0;
  data1 = <any>{};
  fullname = "";
  cmoID = "";
  data12 = <any>[];
  //baseURL = "http://134.209.144.186:3000";
  baseURL = "https://api.goldfin.com.pk";
  
  constructor(private _auth: AuthService,public router: Router) { this.userId = localStorage.getItem('_id');
  var pageURL = window.location.href;
  this.link= pageURL.substr(pageURL.lastIndexOf('/') + 1);
  this.cmoID = localStorage.getItem('_id');
  this.fullname = localStorage.getItem('fullname');
  this.type=localStorage.getItem("type");
  if(this.type != "cmo"){
    setTimeout((router: Router) => {
      this.router.navigate(['/account']);
    }, 10);
  }
  
  
  this._auth.userData(this.link)
  .subscribe(
    res => {
    this.data3 = res.data[0];
    
    this._auth.getFilledForm(this.link)
    .subscribe(
      res => {
        this.data1 = res.data;
        this._auth.getCMOForm(this.link)
        .subscribe(
          res => {
            
            if(res.data.length != 0){
              this.data = res.data[0];
              this.data.details1 = res.data[0].detailsGold[0];
              this.data.details2 = res.data[0].detailsGold[1];
              this.data.details3 = res.data[0].detailsGold[2];
              this.data.details4 = res.data[0].detailsGold[3];
              this.data.details5 = res.data[0].detailsGold[4];
              if(this.data.picture1 !=undefined || this.data.picture1 !=null )
              {
                this.showPic1 = true;
              }
              else {
                this.showPic1 = false;
              }
              if(this.data.picture2 !=undefined || this.data.picture2 !=null )
              {
                this.showPic2 = true;
              }
              else {
                this.showPic2 = false;
              }
            }
            
            this._auth.getRatePerGram()
            .subscribe(
              res => {
                this.marketValue =  res.data.requiredAmount;
                if(this.data.netWeight == undefined || this.data.netWeight == null || this.data.netWeight == 0){
                  this.data.marketValue = res.data.requiredAmount;
                }
                else {
                  this.data.marketValue = (res.data.requiredAmount*this.data.netWeight);
                }
                this.data.name = this.fullname;
                this.data.userCode = this.cmoID;
                if(this.data.date == undefined || this.data.date == null){
                  var today = new Date();
                  var dd = String(today.getDate()).padStart(2, '0');
                  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                  var yyyy = today.getFullYear();
                  this.data.date =  yyyy + '-' + mm + '-' + dd;
                }
                else {
                  var index = this.data.date.indexOf('-');
                  if(index == 2){
                    var date = this.data.date;
                    this.data.date = date.split("-").reverse().join("-");
                  }
                  else if(index == 4) {
                     this.data.date = this.data.date;
                  }
                  this._auth.viewUpdate(this.link).subscribe(
                    res => {
                      console.log(res)
                    },
                    err => console.log(err)
                  )
                }
              },
              err => console.log(err)
            )
          },
          err => console.log(err)
        )
        
      },
      err => console.log(err)
    )

  },
  err => console.log(err)
  )
}

  ngOnInit(): void {

   
  }
  changeMarketValue(){
      this.data.marketValue = (this.marketValue*this.data.netWeight);
  }
  onOptionsSelected(value : any){
    if(value=="1"){
        this.married=true;
    }
    else{
        this.married=false;
    }
  }
  onOptionsSelected1(value : any){
    if(value=="1"){
      this.contributes=true;
    }
    else{
      this.contributes=false;
    }
  }

  submit(){
    var diff = Math.abs(this.data.grossWeight - this.data.grossWeightCMO);
    if(diff >= 3 ){
      alert ("Difference between GrossWeights is equal to or greater than 3 Gram.");
    }
    else {
      
      if(this.picture != '' && this.picture != undefined && this.fileListImage != undefined || this.picture1 != '' && this.picture1 != undefined && this.fileListImage1 != undefined){
        const formData: FormData = new FormData();
        const fileImage: File = this.fileListImage[0];
        formData.append('picture1', fileImage, fileImage.name);
      
      if(this.picture1 != '' && this.picture1 != undefined && this.fileListImage1 != undefined){
        const fileImage1: File = this.fileListImage1[0];
        formData.append('picture2', fileImage1, fileImage1.name);
      }
      this.data12[0] = this.data.details1;
      this.data12[1] = this.data.details2;
      this.data12[2] = this.data.details3;
      this.data12[3] = this.data.details4;
      this.data12[4] = this.data.details5;
      formData.append('detailsGold',this.data12);
  
      formData.append('customerId',this.link);
      formData.append('CMOId',this.cmoID);
      formData.append('formId',this.data1._id);
      formData.append('shroffName',this.data.shroffName);
      formData.append('shroffCertificateNumber',this.data.shroffCertificateNumber);
      formData.append('natureOfGold',this.data.natureOfGold);
      formData.append('grossWeight',this.data.grossWeight);
      formData.append('netWeight',this.data.netWeight);
      formData.append('marketValue',this.data.marketValue);
      formData.append('securedPacket1Number',this.data.securedPacket1Number);
      formData.append('grossWeightCMO',this.data.grossWeightCMO);
      formData.append('securedPacket2Number',this.data.securedPacket2Number);
      formData.append('barCodeNumber',this.data.barCodeNumber);
      formData.append('name',this.data.name);
      formData.append('userCode',this.data.userCode);
      formData.append('date',this.data.date);
      
      this._auth.cafForm(formData).subscribe(
        res => {
          if(res.status==200){
            setTimeout((router: Router) => {
              this.router.navigate(['/cmo']);
            }, 500);
          }
          else {
              console.log("Error");
          }
        },
        err => console.log(err)
      )
    
    }
    else {
      this.data12[0] = this.data.details1;
      this.data12[1] = this.data.details2;
      this.data12[2] = this.data.details3;
      this.data12[3] = this.data.details4;
      this.data12[4] = this.data.details5;
      let dataFinal = {
        customerId : this.link,
        CMOId : this.cmoID,
        formId : this.data1._id,
        shroffName : this.data.shroffName,
        shroffCertificateNumber : this.data.shroffCertificateNumber,
        natureOfGold : this.data.natureOfGold,
        grossWeight : this.data.grossWeight,
        netWeight : this.data.netWeight,
        marketValue : this.data.marketValue,
        securedPacket1Number : this.data.securedPacket1Number,
        grossWeightCMO : this.data.grossWeightCMO,
        securedPacket2Number : this.data.securedPacket2Number,
        barCodeNumber : this.data.barCodeNumber,
        name : this.data.name,
        userCode : this.data.userCode,
        date : this.data.date,
        detailsGold : this.data12
      }
      this._auth.cafForm(dataFinal).subscribe(
        res => {
          if(res.status==200){
            setTimeout((router: Router) => {
              this.router.navigate(['/cmo']);
            }, 500);
          }
          else {
              console.log("Error");
          }
        },
        err => console.log(err)
      )
    }
      
      
    }

    
  }


  uploadImageCNIC2(event : any) {
    this.fileListImage = event.target.files;
    this.picture = this.fileListImage[0].name;

  }

  uploadImageResidenceUtilityBills(event : any) {
    this.fileListImage1 = event.target.files;
    this.picture1 = this.fileListImage1[0].name;

  }


}
