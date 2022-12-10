import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vo2',
  templateUrl: './vo2.component.html',
  styleUrls: ['./vo2.component.css']
})
export class Vo2Component implements OnInit {
  contributes = false;
  data = <any>{};
  married = false;
  VOId = "";
  link="";
  userId = "";
  data1 = <any>{};
  data12 = <any>{};
  data3 = <any>{};
  type = "";
  showPic1 : boolean = false;
  showPic2 : boolean = false;
  fileListImage: FileList;
  fileListImage1: FileList;
  picture = "";

  fullname = "";
  picture1 ="";
  //baseURL = "http://134.209.144.186:3000";
  baseURL = "https://api.goldfin.com.pk";
  
  constructor(private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('_id');
    var pageURL = window.location.href;
    this.link= pageURL.substr(pageURL.lastIndexOf('/') + 1);
    this.VOId = localStorage.getItem('_id');
    this.fullname = localStorage.getItem('fullname');
    this.type=localStorage.getItem("type");
    if(this.type != "vo"){
      setTimeout((router: Router) => {
        this.router.navigate(['/account']);
      }, 10);
    }
    this._auth.getFilledForm(this.link)
    .subscribe(
      res => {
        this.data1 = res.data;
      },
      err => console.log(err)
    )

    this._auth.userData(this.link)
    .subscribe(
      res => {
      this.data3 = res.data[0];
      this._auth.getFilledForm(this.link)
      .subscribe(
        res => {
          this.data1 = res.data;
          this._auth.getVOForm(this.link)
          .subscribe(
            res => {
              if(res.data.length != 0){
                this.data = res.data[0];
                
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
              else {
                if(this.data.name == undefined || this.data.name == ''){
                  this.data.name = this.fullname;
                }
                if(this.data.userCode == undefined){
                  this.data.userCode = this.VOId;
                }
              }
              this._auth.viewUpdate(this.link).subscribe(
                res => {
                  console.log(res)
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
    const formData: FormData = new FormData();
    if(this.picture != '' && this.picture != undefined && this.fileListImage != undefined || this.picture1 != '' && this.picture1 != undefined && this.fileListImage1 != undefined){
      const fileImage: File = this.fileListImage[0];
      formData.append('picture1', fileImage, fileImage.name);
      
      if(this.picture1 != '' && this.picture1 != undefined && this.fileListImage1 != undefined){
        const fileImage1: File = this.fileListImage1[0];
        formData.append('picture2', fileImage1, fileImage1.name);
      }
     
      formData.append('customerId',this.link);
      formData.append('VOId',this.VOId);
      formData.append('formId',this.data1._id);
      formData.append('personalInformation',this.data.personalInformation);
      formData.append('professionalInformation',this.data.professionalInformation);
      formData.append('financialInformation',this.data.financialInformation);
      formData.append('neighborcheck_residence',this.data.neighborcheck_residence);
      formData.append('neighborcheck_business',this.data.neighborcheck_business);
      formData.append('negative_reason',this.data.negative_reason);
      formData.append('remarks_personalInformation',this.data.remarks_personalInformation);
      formData.append('remarks_professionalInformation',this.data.remarks_professionalInformation);
      formData.append('remarks_financialInformation',this.data.remarks_financialInformation);
      formData.append('verificationResults',this.data.verificationResults);
      formData.append('name',this.data.name);
      formData.append('userCode',this.data.userCode);
      this._auth.voForm(formData).subscribe(
        res => {
          if(res.status==200){
            setTimeout((router: Router) => {
              this.router.navigate(['/vo']);
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
      let dataFinal = {
        customerId : this.link,
        VOId : this.VOId,
        formId : this.data1._id,
        personalInformation : this.data.personalInformation,
        professionalInformation : this.data.professionalInformation,
        financialInformation : this.data.financialInformation,
        neighborcheck_residence : this.data.neighborcheck_residence,
        neighborcheck_business : this.data.neighborcheck_business,
        negative_reason : this.data.negative_reason,
        remarks_personalInformation : this.data.remarks_personalInformation,
        remarks_professionalInformation : this.data.remarks_professionalInformation,
        remarks_financialInformation : this.data.remarks_financialInformation,
        verificationResults : this.data.verificationResults,
        name : this.data.name,
        userCode : this.data.userCode
      }
      this._auth.voForm(dataFinal).subscribe(
        res => {
          if(res.status==200){
            setTimeout((router: Router) => {
              this.router.navigate(['/vo']);
            }, 500);
          }
          else {
              console.log("Error");
          }
        },
        err => console.log(err)
      )
    }
   
   
    // if(this.picture != '' && this.picture != undefined && this.fileListImage != undefined){
    //   const fileImage: File = this.fileListImage[0];
    //   formData.append('picture1', fileImage, fileImage.name);
    // }
    // if(this.picture1 != '' && this.picture1 != undefined && this.fileListImage1 != undefined){
    //   const fileImage1: File = this.fileListImage1[0];
    //   formData.append('picture2', fileImage1, fileImage1.name);
    // }
    



    
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
