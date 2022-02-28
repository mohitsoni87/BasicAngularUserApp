import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  homePage: boolean = true;

  constructor(private router: Router,
    private userStatus: UserService) {
      this.homePage = true;
      
     }

     ngOnInit(): void {
       //Syncing status of the user's activity
      console.log(this.userStatus.currentLogInStatus.subscribe(message => (this.isUserLoggedIn= message)) ,"adasd");
    }
  
  //redirect to HomePage
  redirectToHome=()=>{
    this.router.navigate(['']);
  }
}
