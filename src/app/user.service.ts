import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setStatus(status:any){
    localStorage.setItem('status',JSON.stringify(status));
  }
  get user(){
    const user = JSON.parse(localStorage.getItem('status') || '[]');
    return user;
  }
}
