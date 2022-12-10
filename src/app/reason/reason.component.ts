import { Component, OnInit,Inject, Injectable } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<ReasonComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    
  }
  
  ngOnInit(): void {
  }
  public  closeMe(data1 : any) {
    if(data1 == 'Cancel'){
      this.dialogRef.close();
    }
    else if(data1 == 'Submit'){
      this.dialogRef.close(this.data);
    }
  }
}
