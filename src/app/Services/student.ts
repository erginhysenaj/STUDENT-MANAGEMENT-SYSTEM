import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Interface/studentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchStudents(q?: string, minGrade?: number, maxGrade?: number): Observable<Student[]> {
    let params = new HttpParams();
    if (q) params = params.set('q', q);
    if (minGrade !== undefined) params = params.set('minGrade', minGrade.toString());
    if (maxGrade !== undefined) params = params.set('maxGrade', maxGrade.toString());
    
    return this.http.get<Student[]>(`${this.apiUrl}/search`, { params });
  }
}

