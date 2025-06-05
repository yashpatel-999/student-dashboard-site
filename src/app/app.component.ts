import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-dashboard';
  name = '';
  selectedGrade = '';
  students: { name: string; grade: string }[] = [];
  onSubmit() {
      this.students.push({ name: this.name, grade: this.selectedGrade });
      this.name = '';
      this.selectedGrade = '';
  }
}
