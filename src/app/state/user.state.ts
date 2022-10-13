import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User,register } from '../model/user.model';
import { UserService } from '../user.service';
import { AddUser, GetStatus} from '../actions/user.action';
import { Injectable } from '@angular/core';



export class UserStateModel {
  user!: User[];
  reg!: register[];
}
@State<UserStateModel>({
  name: 'users',
  defaults: {
    user: [],
    reg: []

  }
})

@Injectable()
export class UserState{
  constructor(private service: UserService){}

  @Selector()
  static getuser(state: UserStateModel){
    return state.reg
  }

  @Action(GetStatus)
  get({getState, patchState}: StateContext<UserStateModel>, {user}:GetStatus){
    this.service.setStatus(user)
    const state = getState();
    patchState({user: [...state.user, user]})
  }

  @Action(AddUser)
  add({getState, patchState}: StateContext<UserStateModel>, {reg}:AddUser){
    const state = getState();
    patchState({reg: [...state.reg, reg]})
    localStorage.setItem('users',JSON.stringify(state.reg))
  }






}
