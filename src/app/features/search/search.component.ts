import { JsonPipe, NgForOf } from "@angular/common";
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatProgressBar } from "@angular/material/progress-bar";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton,
    JsonPipe,
    NgForOf,
    MatProgressBar
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public searchValue: string = '';
  public searchData: Array<string> = ['ქონება', 'ქონების პრივატიზება', 'ქონების გასხვისება', 'საქონლის გასხვისება'];
  public percentages: Array<string> = [];

  public onSearch(): void {
    this.calculateSimilarity();
  }

  private calculateSimilarity(): void {
    this.percentages = [];
    this.searchData.forEach((item: string) => {
      this.percentages.push(this.similarityPercentage(this.searchValue, item))
    });
  }

  public similarityPercentage(str1: string, str2: string): string {
    let matchCount = 0;

    for (let i = 0; i < str1.length; i++) {
      if (str2[i] === undefined) {
        break;
      }
      if (str1[i] === str2[i]) {
        matchCount++;
      } else {
        break;
      }
    }

    const percentage: number = (matchCount / str1.length) * 100;
    return percentage.toFixed(2);
  }
}
