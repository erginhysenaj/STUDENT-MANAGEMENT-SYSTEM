import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../Services/student';
import { Student } from '../../Interface/studentModel';
import { StudentFormComponent } from '../student-form/student-form';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentFormComponent],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  loading = false;
  showModal = false;
  editingStudent: Student | null = null;

  // Search filters
  searchQuery: string = '';
  minGrade: number | null = null;
  maxGrade: number | null = null;

  constructor(
    private studentService: StudentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.loading = true;
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.filteredStudents = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading students:', error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  searchStudents(): void {
    this.loading = true;
    this.studentService.searchStudents(
      this.searchQuery || undefined,
      this.minGrade || undefined,
      this.maxGrade || undefined
    ).subscribe({
      next: (data) => {
        this.filteredStudents = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error searching students:', error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.minGrade = null;
    this.maxGrade = null;
    this.loadStudents();
  }

  openAddModal(): void {
    this.editingStudent = null;
    this.showModal = true;
  }

  openEditModal(student: Student): void {
    this.editingStudent = { ...student };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingStudent = null;
  }

  onStudentSaved(): void {
    this.reloadAfterSave();
    // Close modal after starting the reload
    this.closeModal();
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.loading = true;
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          this.reloadAfterSave();
        },
        error: (error) => {
          console.error('Error deleting student:', error);
          alert('Error deleting student. Please try again.');
          this.loading = false;
        }
      });
    }
  }

  private reloadAfterSave(): void {
    this.loading = true;
    // Always reload all students first
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        this.students = data;
        // If there are active search filters, re-apply the search
        if (this.searchQuery || this.minGrade !== null || this.maxGrade !== null) {
          this.searchStudents();
        } else {
          // No filters, update filteredStudents to show all
          this.filteredStudents = data;
          this.loading = false;
          this.cdr.detectChanges();
        }
      },
      error: (error) => {
        console.error('Error loading students:', error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
