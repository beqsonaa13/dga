import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { DateFormatPipe } from "../../shared/pipes/date-format.pipe";

@Component({
  selector: 'app-date-formatter',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    DateFormatPipe
  ],
  templateUrl: './date-formatter.component.html',
  styleUrl: './date-formatter.component.scss'
})
export class DateFormatterComponent {
  public dateInputControl: FormControl = new FormControl('');
  public formattedDate: string = '';

  public formatInput(): void {
    this.formattedDate = this.dateInputControl.value;
  }
}
