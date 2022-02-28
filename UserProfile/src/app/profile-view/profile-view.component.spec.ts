import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileViewComponent } from './profile-view.component';

describe('ProfileViewComponent', () => {
  let component: ProfileViewComponent;
  let fixture: ComponentFixture<ProfileViewComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule ], 
    providers: [ProfileViewComponent]
  }));

  it('should be created', () => {
    const service: ProfileViewComponent = TestBed.get(ProfileViewComponent);
    expect(service).toBeTruthy();
   });


  //Do not display Profile page at the beginning of the application
  it('initially Home page should be displayed', ()=>{
    const fixture = TestBed.createComponent(ProfileViewComponent);
    const app = fixture.componentInstance;
    expect(true).toEqual(app.homePage);
  });

  
});
