import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../model/UserInterface';
import { JsonService } from '../services/json.service';



@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  @ViewChild('table') table: MatTable<Element>;

  //Table's column headers
  displayedColumns: string[] = ['name', 'username', 'email','bio'];

  displayResult = false;
  userProfile: UserInterface[]= [];
  homePage: boolean = true;
  
  constructor(private fetchUser: JsonService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      
    this.route.paramMap.subscribe(params=>{
      const username = params.get('username');   // + for to convert the string into integer 
      if(username != null){
        this.loadUserDetails(username);
        this.homePage = false;
      }else{
        this.homePage = true;
      }
      

  })   
    }

    loadUserDetails=(username: string)=>{
      this.fetchUser.findUser(username).subscribe({
        next:(userObect: UserInterface)=>{
          if(userObect != null){
            this.displayResult = true;
            this.userProfile = [userObect];
            
            //to refresh rows on any event change
            this.table.renderRows();
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
