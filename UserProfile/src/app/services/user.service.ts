import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { UserInterface } from '../model/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activeUser: Boolean = false;
  redirectUrl: string;

  
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private messageSource = new  BehaviorSubject(this.editDataDetails);
  currentLogInStatus = this.messageSource.asObservable();
  
  constructor() { }

  get isLoggedIn():boolean{
    return !!this.activeUser;
  }

  login=(user: UserInterface)=>{
    this.activeUser = true;
    this.changeStatus(true);
  }

  logout=()=>{
    this.activeUser = false;
    console.log("logout");
    this.changeStatus(false);
  }


  changeStatus(status: boolean) {
    this.messageSource.next(status)
  }
}



