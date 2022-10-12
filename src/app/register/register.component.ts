import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddUser } from '../actions/user.action';
import { Route, Router } from '@angular/router';
import { UserState } from '../state/user.state';
import { register } from '../model/user.model';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Select(UserState.getuser)regr!: Observable<register[]>;
  registerform!: FormGroup;

  constructor(private store: Store,private route: Router, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      fullname: [''],
      name: [''],
      pass: [''],
      mail: [''],
    })
  }
  register(data:any){
    this.registerform.markAllAsTouched();
    if(this.registerform.valid){
      this.store.dispatch(new AddUser({username:data.name,password:data.pass,fullname:data.fullname})).subscribe(data=>{
        if(data){
          this.regr.subscribe(d=>{
            if(d){
              localStorage.setItem('users',JSON.stringify(d[0]));
            }
          })
          this.route.navigate([''])

        }

      }

      )
    }

  }


}
