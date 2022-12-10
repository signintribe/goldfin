import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-getdocuments',
  templateUrl: './getdocuments.component.html',
  styleUrls: ['./getdocuments.component.css']
})
export class GetdocumentsComponent implements OnInit {

  data = <any>{};
  data1 = <any>{};
  data3 = <any>{};
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



  cnicFront11 = 'No Image';
  cnicBack22 = 'No Image';
  residenceUtilityBills11 = 'No Image';
  residenceBusinessBills = 'No Image';
  proofOfBusiness = 'No Image';
  proofOfBusinessIncome = 'No Image';
  SECP = 'No Image';
  NTN = 'No Image';
  verfication = "";
  userId = "";
  //baseURL = "http://134.209.144.186:3000";
  baseURL = "https://api.goldfin.com.pk";
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
            this._auth.getDocuments(this.userId)
            .subscribe(
              res => {
                this.data3 = res.data;
                  if(this.data1[0].profession=="Salaried"){
                    this.data.cnicFront = this.data3.cnicFront;
                    this.data.cnicBack = this.data3.cnicBack;
                    this.data.residenceUtilityBills = this.data3.residenceUtilityBills;
                    this.data.currentSalarySlip = this.data3.currentSalarySlip;
                    this.data.jobCertificate = this.data3.jobCertificate;
                    this.data.experienceLetter = this.data3.experienceLetter;
                    this.data.facilityLetter = this.data3.facilityLetter;
                    this.data.loanApp1 = this.data3.loanApp1; 
                    this.data.loanApp2 = this.data3.loanApp2;
                  }
                  else {
                    this.data.cnicFront = this.data3.cnicFront;
                    this.data.cnicBack = this.data3.cnicBack;
                    this.data.residenceUtilityBills = this.data3.residenceUtilityBills;
                    this.data.residenceBusinessBills = this.data3.residenceBusinessBills;
                    this.data.proofOfBusiness = this.data3.proofOfBusiness;
                    this.data.proofOfBusinessIncome = this.data3.proofOfBusinessIncome;
                    this.data.SECP = this.data3.SECP;
                    this.data.NTN = this.data3.NTN;
                    this.data.facilityLetter = this.data3.facilityLetter;
                    this.data.loanApp1 = this.data3.loanApp1; 
                    this.data.loanApp2 = this.data3.loanApp2;                    
                  }
                
              },
              err => console.log(err)
            )

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




}
