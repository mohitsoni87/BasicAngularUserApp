import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RegisterUserComponent } from './register-user/register-user.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileViewComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
