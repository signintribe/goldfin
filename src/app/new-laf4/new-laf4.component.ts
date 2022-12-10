import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-laf4',
  templateUrl: './new-laf4.component.html',
  styleUrls: ['./new-laf4.component.css']
})
export class NewLaf4Component implements OnInit {

  data = <any>{};
  data1 = <any>{};
  sucess = "";
  fileListImage: FileList;
  fileListImage1: FileList;
  fileListImage2: FileList;
  fileListImage3: FileList;
  fileListImage4: FileList;
  fileListImage44: FileList;
  imageSrc: any ="assets/images/channelImg.PNG";
  recommend = false;
  recommend1 = false;
  recommend2 = false;
  cnicFront = 'No Image';
  cnicBack = 'No Image';
  residenceUtilityBills = 'No Image';
  currentSalarySlip = 'No Image';
  jobCertificate = 'No Image';
  experienceLetter = 'No Image';
  profession = false;
  profession1 = false;

  userId="";
  cnicFront11 = 'No Image';
  cnicBack22 = 'No Image';
  residenceUtilityBills11 = 'No Image';
  residenceBusinessBills = 'No Image';
  proofOfBusiness = 'No Image';
  proofOfBusinessIncome = 'No Image';
  SECP = 'No Image';
  NTN = 'No Image';
  verfication = "";

  fileListImage5: FileList;
  fileListImage6: FileList;
  fileListImage7: FileList;
  fileListImage8: FileList;
  fileListImage9: FileList;
  fileListImage10: FileList;
  fileListImage11: FileList;
  fileListImage12: FileList;
  constructor(private _auth: AuthService,public router: Router) { }

  ngOnInit(): void {
    if(!this._auth.loggedIn())
    {
      this.router.navigate(['/login']);
    }
    var pageURL = window.location.href;
      var pageURL1 = window.location.href;
      this.userId= pageURL.substr(pageURL.lastIndexOf('/') + 1);
      this._auth.userData(this.userId)
        .subscribe(
          res => {
            this.data1 = res.data;
          
            if(this.data1[0].profession=="Salaried"){
              this.data.profession = "Salaried";
              this.recommend = true;
              this.recommend1 = false;
              this.recommend2 = false;
            }
            else{
              this.data.profession = "Self-Employee";
              this.recommend = false;
              this.recommend1 = true;
              this.recommend2 = true;
            }
      });

  }
  submitform(){

    const formData: FormData = new FormData();
    if(this.cnicFront != '' && this.cnicFront != undefined && this.fileListImage != undefined){
      const fileImage: File = this.fileListImage[0];
      formData.append('cnicFront', fileImage, fileImage.name);
    }
    if(this.cnicBack != '' && this.cnicBack != undefined && this.fileListImage1 != undefined ){
      const fileImage1: File = this.fileListImage1[0];
      formData.append('cnicBack', fileImage1, fileImage1.name);
    }
    if(this.residenceUtilityBills != '' && this.residenceUtilityBills != undefined && this.fileListImage2 != undefined){
      const fileImage2: File = this.fileListImage2[0];
      formData.append('residenceUtilityBills', fileImage2, fileImage2.name);
    }
    if(this.currentSalarySlip != '' && this.currentSalarySlip != undefined && this.fileListImage3 != undefined){
      const fileImage3: File = this.fileListImage3[0];
      formData.append('currentSalarySlip', fileImage3, fileImage3.name);
    }
    if(this.jobCertificate != '' && this.jobCertificate != undefined && this.fileListImage4 != undefined){
      const fileImage4: File = this.fileListImage4[0];
      formData.append('jobCertificate', fileImage4, fileImage4.name);
    }
    if(this.experienceLetter != '' && this.experienceLetter != undefined && this.fileListImage44 != undefined){
      const fileImage44: File = this.fileListImage44[0];
      formData.append('experienceLetter', fileImage44, fileImage44.name);
    }
    
    formData.append('_id',this.userId);
    this._auth.salariedLAFDocuments(formData).subscribe(
      res => {
        if(res.status==200){
          this.sucess = "Your loan application has been successfully submitted. Thank you for your Loan request, Our representative will soon contact you";
          setTimeout((router: Router) => {
            this.router.navigate(['/account']);
          }, 1500);
        }
        else {
            console.log("Error");
        }
      },
      err => console.log(err)
    )
    
  }

  
  uploadImageCNIC1(event : any) {
    this.fileListImage = event.target.files;
    this.cnicFront = this.fileListImage[0].name;
    //System 5 Update
    // if (event.target.files && event.target.files[0]) {
    //   const file = event.target.files[0];

    //   const reader = new FileReader();
    //   reader.onload = e => this.imageSrc = reader.result;

    //   reader.readAsDataURL(file);
    // }
  }

  uploadImageCNIC2(event : any) {
    this.fileListImage1 = event.target.files;
    this.cnicBack = this.fileListImage1[0].name;
    //System 5 Update

  }

  uploadImageResidenceUtilityBills(event : any) {
    this.fileListImage2 = event.target.files;
    this.residenceUtilityBills = this.fileListImage2[0].name;
    //System 5 Update
    // if (event.target.files && event.target.files[0]) {
    //   const file = event.target.files[0];

    //   const reader = new FileReader();
    //   reader.onload = e => this.imageSrc = reader.result;

    //   reader.readAsDataURL(file);
    // }
  }

  uploadImageCurrentSalarySlip(event : any) {
    this.fileListImage3 = event.target.files;
    this.currentSalarySlip = this.fileListImage3[0].name;
    //System 5 Update
    // if (event.target.files && event.target.files[0]) {
    //   const file = event.target.files[0];

    //   const reader = new FileReader();
    //   reader.onload = e => this.imageSrc = reader.result;

    //   reader.readAsDataURL(file);
    // }
  }


  uploadImageJobCertificate(event : any) {
    this.fileListImage4 = event.target.files;
    this.jobCertificate = this.fileListImage4[0].name;
  }
  uploadImageJobCertificate2(event : any) {
    this.fileListImage44 = event.target.files;
    this.experienceLetter = this.fileListImage44[0].name;
  }


  uploadImageCNIC11(event : any) {
    this.fileListImage5 = event.target.files;
    this.cnicFront11 = this.fileListImage5[0].name;
    //System 5 Update
    // if (event.target.files && event.target.files[0]) {
    //   const file = event.target.files[0];

    //   const reader = new FileReader();
    //   reader.onload = e => this.imageSrc = reader.result;

    //   reader.readAsDataURL(file);
    // }
  }

  uploadImageCNIC22(event : any) {
    this.fileListImage6 = event.target.files;
    this.cnicBack22 = this.fileListImage6[0].name;
    //System 5 Update

  }

  uploadImageResidenceUtilityBills11(event : any) {
    this.fileListImage7 = event.target.files;
    this.residenceUtilityBills11 = this.fileListImage7[0].name;
    
  }

  uploadImageResidenceBusinessBills(event : any) {
    this.fileListImage8 = event.target.files;
    this.residenceBusinessBills = this.fileListImage8[0].name;
    
  }
  uploadImageProofofBusiness(event : any) {
    this.fileListImage9 = event.target.files;
    this.proofOfBusiness = this.fileListImage9[0].name;
    
  }
  uploadImageProofofBusinessIncome(event : any) {
    this.fileListImage10 = event.target.files;
    this.proofOfBusinessIncome = this.fileListImage10[0].name;
  }

  uploadImageSECP(event : any) {
    this.fileListImage11 = event.target.files;
    this.SECP = this.fileListImage11[0].name;
  }

  uploadImageNTN(event : any) {
    this.fileListImage12 = event.target.files;
    this.NTN = this.fileListImage12[0].name;
  }


  submitform12(){

    const formData: FormData = new FormData();
    if(this.cnicFront11 != '' && this.cnicFront11 != undefined && this.fileListImage5 != undefined){
      const fileImage: File = this.fileListImage5[0];
      formData.append('cnicFront', fileImage, fileImage.name);
    }
    if(this.cnicBack22 != '' && this.cnicBack22 != undefined && this.fileListImage6 != undefined){
      const fileImage1: File = this.fileListImage6[0];
      formData.append('cnicBack', fileImage1, fileImage1.name);
    }
    if(this.residenceUtilityBills11 != '' && this.residenceUtilityBills11 != undefined && this.fileListImage7 != undefined){
      const fileImage2: File = this.fileListImage7[0];
      formData.append('residenceUtilityBills', fileImage2, fileImage2.name);
    }
    if(this.residenceBusinessBills != '' && this.residenceBusinessBills != undefined && this.fileListImage8 != undefined){
      const fileImage3: File = this.fileListImage8[0];
      formData.append('residenceBusinessBills', fileImage3, fileImage3.name);
    }
    if(this.proofOfBusiness != '' && this.proofOfBusiness != undefined && this.fileListImage9 != undefined){
      const fileImage4: File = this.fileListImage9[0];
      formData.append('proofOfBusiness', fileImage4, fileImage4.name);
    }
    if(this.proofOfBusinessIncome != '' && this.proofOfBusinessIncome != undefined && this.fileListImage10 != undefined){
      const fileImage5: File = this.fileListImage10[0];
      formData.append('proofOfBusinessIncome', fileImage5, fileImage5.name);
    }
    if(this.SECP != '' && this.SECP != undefined && this.fileListImage11 != undefined){
      const fileImage6: File = this.fileListImage11[0];
      formData.append('SECP', fileImage6, fileImage6.name);
    }
    if(this.NTN != '' && this.NTN != undefined && this.fileListImage12 != undefined){
      const fileImage7: File = this.fileListImage12[0];
      formData.append('NTN', fileImage7, fileImage7.name);
    }
    formData.append('_id',this.userId);
    this._auth.businessLAFDocuments(formData).subscribe(
      res => {
        if(res.status==200){
          this.sucess = "Your loan application has been successfully submitted. Thank you for your Loan request, Our representative will soon contact you";
          setTimeout((router: Router) => {
            this.router.navigate(['/branchOfficer']);
          }, 1500);
        }
        else {
            console.log("Error");
        }
      },
      err => console.log(err)
    )
    
  }
}
