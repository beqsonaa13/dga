import { Component, Inject } from '@angular/core';
import { MatButton } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";

@Component({
  selector: 'app-basic-notification-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle
  ],
  templateUrl: './basic-notification-dialog.component.html',
  styleUrl: './basic-notification-dialog.component.scss'
})
export class BasicNotificationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {title: string, message: string}
  ) {}
}
