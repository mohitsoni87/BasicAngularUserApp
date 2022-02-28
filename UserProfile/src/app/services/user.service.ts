import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  
  constructor(private _httpClient: HttpClient) { }

  get isLoggedIn():boolean{
    return !!this.activeUser;
  }

  //Login & Logout method is a status method whose changes will reflected across multiple components to display content on HTML accoridingly
  login=(user: UserInterface)=>{
    this.activeUser = true;
    this.changeStatus(true);
  }

  
  logout=()=>{
    this.activeUser = false;
    console.log("logout");
    this.changeStatus(false);
  }


  /*changeStatus method changes log in status value which is being used by multiple components like 
  // HomePageComponent, RegisterUserComponent, LoginComponent
  */
  changeStatus(status: boolean) {
    this.messageSource.next(status)
  }

    //User Profile Mock API
    findUser():Observable<UserInterface>{
      return this._httpClient.get<UserInterface>(`https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2`)
    }
  
    //User Registration Mock API
    registerUser():Observable<UserInterface>{
      return this._httpClient.get<UserInterface>('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d')
    }
}



