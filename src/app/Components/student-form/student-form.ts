import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../Services/student';
import { Student } from '../../Interface/studentModel';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentFormComponent implements OnInit {
  @Input() student: Student | null = null;
  @Output() saved = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  studentForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {
    this.studentForm = this.fb.group({
      emer: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      notaMesatare: ['', [Validators.required, Validators.min(4), Validators.max(10)]]
    });
  }

  ngOnInit(): void {
    if (this.student) {
      this.studentForm.patchValue({
        emer: this.student.emer,
        email: this.student.email,
        notaMesatare: this.student.notaMesatare
      });
    }
  }

  get f() {
    return this.studentForm.controls;
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const formValue = this.studentForm.value;
    const studentData: Student = {
      emer: formValue.emer,
      email: formValue.email,
      notaMesatare: parseFloat(formValue.notaMesatare)
    };

    const operation = this.student
      ? this.studentService.updateStudent(this.student.id!, studentData)
      : this.studentService.createStudent(studentData);

    operation.subscribe({
      next: () => {
        this.isSubmitting = false;
        this.saved.emit();
      },
      error: (error) => {
        this.isSubmitting = false;
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else if (error.error && Array.isArray(error.error)) {
          this.errorMessage = error.error.map((e: any) => e.defaultMessage || e.message).join(', ');
        } else {
          this.errorMessage = 'An error occurred. Please check your input and try again.';
        }
        console.error('Error saving student:', error);
      }
    });
  }

  onCancel(): void {
    this.cancelled.emit();
  }

  private markFormGroupTouched(): void {
    Object.keys(this.studentForm.controls).forEach(key => {
      const control = this.studentForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.f[fieldName];
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName === 'emer' ? 'Name' : fieldName === 'notaMesatare' ? 'Grade' : 'Email'} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['min']) {
        return 'Grade must be at least 4.0';
      }
      if (field.errors['max']) {
        return 'Grade must be at most 10.0';
      }
    }
    return '';
  }
}

