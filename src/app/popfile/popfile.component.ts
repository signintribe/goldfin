import { Component, OnInit,Inject, Injectable } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';


@Component({
  selector: 'app-popfile',
  templateUrl: './popfile.component.html',
  styleUrls: ['./popfile.component.css']
})
export class PopfileComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<PopfileComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    
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
