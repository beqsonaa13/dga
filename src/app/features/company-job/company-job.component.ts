import { NgForOf, NgIf } from "@angular/common";
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardTitle } from "@angular/material/card";
import { provideNativeDateAdapter } from "@angular/material/core";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { urlValidator } from "../../core/validators/web-page.validator";
import { DgaInputComponent } from "../../shared/custom-controls/dga-input/dga-input.component";

@Component({
  selector: 'app-company-job',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    NgForOf,
    ReactiveFormsModule,
    MatCardTitle,
    MatLabel,
    MatFormField,
    MatInput,
    MatDatepicker,
    DgaInputComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    NgIf
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './company-job.component.html',
  styleUrl: './company-job.component.scss'
})
export class CompanyJobComponent {
  public form!: FormGroup;

  constructor() {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      jobs: new FormArray([])
    });
  }

  public addJob(): void {
    const job = new FormGroup({
      companyName: new FormControl(''),
      webPage: new FormControl('', [urlValidator()]),
      description: new FormControl(''),
      positions: new FormArray([])
    });
    this.jobs.push(job);
  }

  public removeJob(index: number): void {
    this.jobs.removeAt(index);
  }

  public removePosition(job: FormGroup | AbstractControl, index: number): void {
    this.getPositions(job).removeAt(index);
  }

  public addPosition(job: FormGroup | AbstractControl): void {
    (job.get('positions') as FormArray).push(new FormGroup({
      positionName: new FormControl(''),
      positionLevel: new FormControl(''),
      positionDescription: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl('')
    }));
  }

  get jobs(): FormArray {
    return this.form.get('jobs') as FormArray;
  }

  public getPositions(job: FormGroup | AbstractControl): FormArray {
    return job.get('positions') as FormArray;
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
