import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../model/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private _httpClient: HttpClient) { }


  //Find User from the JSON server at port 8888
  findUser(username: string):Observable<UserInterface>{
    return this._httpClient.get<UserInterface>(`http://localhost:8888/Profiles/${username}`)
  }

  //Add new User into the JSON server at port 8888
  registerUser(user: UserInterface):Observable<UserInterface>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._httpClient.post<UserInterface>('http://localhost:8888/Profiles', user, {headers})   //returns a Oberservable
  }
}
