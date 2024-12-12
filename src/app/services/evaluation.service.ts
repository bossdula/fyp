import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  registerCourse(courseDetails: any) {
    return this.http.post(`${this.baseUrl}/evaluation/particulars`, courseDetails);
  }
}
