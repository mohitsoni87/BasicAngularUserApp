import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../model/UserInterface';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  @ViewChild('table') table: MatTable<Element>;

  //Table's column headers
  displayedColumns: string[] = ['name', 'email','bio'];

  displayResult = false;
  userProfile: UserInterface[]= [];
  homePage: boolean = true;
  
  constructor(private fetchUser: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.loadUserDetails();
      this.homePage = false;
  
    }

    loadUserDetails=()=>{
      this.fetchUser.findUser().subscribe({
        next:(userObect: UserInterface)=>{
          if(userObect != null){
            this.displayResult = true;
            this.userProfile = [userObect];
            
          }
        },
        error:err=>{
          //If User not found, then redirect to Registration page so the user can register
          this.router.navigate(['register']);
        }
      })
    }

    
  //redirect to HomePage
  redirectToHome=()=>{
    this.router.navigate(['']);
  }
 }
