import { ElementRef, ViewChildren } from '@angular/core';
import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../model/UserInterface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  formInputElements: ElementRef[];  

  userForm: FormGroup;
  user: UserInterface;
  errorMessage: string;
  submitted: boolean = false;
  
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) { }


  ngOnInit(): void {

    this.userForm = this.fb.group({
      //Defining Rules
      name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email:['', [Validators.required, Validators.email]],
      username:['', Validators.required],
      bio: ['', Validators.required],
    })

  }


  //Register the User
  registerUser():void{

    //Binding the form
    const userObject = { ...this.user, ...this.userForm.value}     
    this.submitted = true;    //meaning the form is submitted

    //Checking the authencity of the form
    if(this.userForm.invalid){
      return ;
    }

    this.userService.registerUser().subscribe({
      next:()=>{
        //Once registered, clear the form and redirect to the Profile page
        alert("Saving user: " + this.userForm.value.name + ". Press OK to submit.");
        this.userForm.reset();
        this.userService.changeStatus(true);

        //Once registered, have the user logged in
        this.userService.login(userObject);

        //Once logged in, have the user redirected to the profile page
        this.router.navigate(['profile']);
      },
      error:(err)=>{
        this.errorMessage=err;
        console.log(err);
      }
    })
  }

  //assign form controls
  get formControl(){
    return this.userForm.controls;
  }

  //Reset the form when the cancel button is clicked
  onCancel=()=>{
    this.userForm.reset()
  }

}
