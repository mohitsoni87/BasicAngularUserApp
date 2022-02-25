import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserProfile';

  isUserLoggedIn: boolean = false;

  constructor(private router: Router,
    private userStatus: UserService) {
      
     }

     ngOnInit(): void {
      console.log(this.userStatus.currentLogInStatus.subscribe(message => (this.isUserLoggedIn= message)) ,"adasd");
    }
  
    


  //redirect to HomePage
  redirectToHome=()=>{
    this.router.navigate(['']);
  }
}
