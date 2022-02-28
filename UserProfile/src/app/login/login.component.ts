import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from '../model/UserInterface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  displayResult = false;
  userProfile : UserInterface[] = [];

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url );
    if(this.router.url.indexOf("logout") != -1){
      this.logout();
    }
  }

  //Fetching User from the JSON Server
  login=(username: string)=>{
    this.userService.findUser().subscribe({
      next:(userObject: UserInterface)=>{
        console.log(userObject);
        if(userObject != null){
          this.displayResult = true;
          this.userProfile = [userObject];
          this.userService.login(userObject);
          this.userService.changeStatus(true);
          this.router.navigate(['profile']);
        }
      },
      error:err=>{
        //If User not found, then redirect to Registration page so the user can register
        this.router.navigate(['register']);
      }
    })
  }

  //logout the user
  logout=()=>{
    console.log();
    this.userService.changeStatus(false);
    console.log(this.userService.changeStatus(false));
    this.userService.logout();
    this.router.navigate(['']);
  }
}
