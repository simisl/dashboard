import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  setStatus(status:any){
    localStorage.setItem('status',JSON.stringify(status));
  }
  get user(){
    const user = JSON.parse(localStorage.getItem('status') || '[]');
    return user;
  }
  getProjects(): Observable<any>{
    return this.http.get<any>('api/projectlist').pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
