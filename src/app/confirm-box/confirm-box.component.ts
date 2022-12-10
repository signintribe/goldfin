import { Component, OnInit,Inject, Injectable } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.css']
})
export class ConfirmBoxComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<ConfirmBoxComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    
  }
  
  ngOnInit(): void {
  }
  public  closeMe(data1 : any) {
    if(data1 == 'Cancel'){
      this.dialogRef.close();
    }
    else if(data1 == 'Submit'){
      this.dialogRef.close('Submit');
    }
  }
}
