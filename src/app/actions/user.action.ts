import { User, register } from "../model/user.model";

export class AddUser {
  static readonly type = '[register] Add'
  constructor(public reg: register){}
}
export class GetStatus {
  static readonly type = '[User] Get'
  constructor(public user: User){}
}
