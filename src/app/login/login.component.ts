import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetStatus } from '../actions/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name!: string;
  password!: string;
  message!:string;

  constructor(private store: Store,
    private route: Router) { }

  ngOnInit(): void {
    this.name = '';
    this.password = '';
  }
  login(){
    this.message = '';
    if(this.name != '' && this.password != ''){
      const dat =  JSON.parse(localStorage.getItem('users') || '')
      if(dat){
          if(dat.username === this.name && dat.password === this.password){
            let st = {loggedIn:true,name:'simi'}
            this.store.dispatch(new GetStatus(st))
            this.route.navigate(['/home'])
          }

      }
    }
    else{
      this.message = 'Please fill all the fields'
    }
  }

}
