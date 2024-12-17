import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class AuthService {

  private apiUrl = 'http://localhost:8080/my-php-backend';

  constructor(private http: HttpClient) { }

  submitForm(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(`${this.apiUrl}/registerOOP.php`, data, { headers });
  }

  submitLogin(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiUrl}/login.php`, data, { headers });
  }

  ifLoggedIn(): boolean {
      if(sessionStorage.getItem('regNo')) {
        return true;
      } else {
        return false;
      }
  
  
}
}



// private baseUrl = 'http://localhost:3000';

// registerUser(userDetails: User) {
  //   return this.http.post(`${this.baseUrl}/users`, userDetails);
  // }

  // getUserByRegNo(regNo: string ): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}/users?regNo=${regNo}`);
  // }

  // login(userDetails: User) {
  //   return this.http.post(`${this.baseUrl}/users`, userDetails);
  // }

  // ifLoggedIn(): boolean {
  //   if(sessionStorage.getItem('regNo')) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // }
