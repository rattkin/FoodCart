import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.scss']
})
export class AreYouSureComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AreYouSureComponent>,
  ) { }

  ngOnInit(): void {
  }

  confirm(result) {
    this.dialogRef.close(result);
  }
}
