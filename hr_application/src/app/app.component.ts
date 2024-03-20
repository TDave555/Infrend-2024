import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Applicant, applicants } from './applicants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  applicants: Applicant[] = applicants;

  isFormVisible: boolean = false;

  newApplicant: Applicant = this.defaultApplicant();

  deleteApplicant(applicant: Applicant) {
    const index = this.applicants.indexOf(applicant);
    if (index > -1) {
      this.applicants.splice(index, 1);
    }
  }

  openForm() {
    this.isFormVisible = true;
  }

  defaultApplicant(): Applicant {
    return {
      id: 0,
      name: "",
      role: "",
      experience: "0-5",
      desiredSalary: 400000
    };
  }

  addApplicant() {
    this.applicants.push(this.newApplicant);
    this.newApplicant = this.defaultApplicant();
    this.isFormVisible = false;
  }
}
