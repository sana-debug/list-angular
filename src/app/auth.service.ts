import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private loggedStatus = false;
  setLoggedIn(value: boolean) {
    this.loggedStatus = value;
  }

  get isLoggedIn() {
    return this.loggedStatus;
  }

  getUserDetails(login, pwd) {
    // const options = { responseType: 'text' as 'json' };
    return this.http
      .post<myData>('/api/auth.php', { login, pwd })

  }
}
