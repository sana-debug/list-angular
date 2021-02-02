import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  message: string;
  success: boolean;
}
interface isloggedIn {
  status: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/api/database.php');
  }

  isLoggedIn(): Observable<isloggedIn> {
    return this.http.get<isloggedIn>('/api/isloggedIn.php');
  }
}
