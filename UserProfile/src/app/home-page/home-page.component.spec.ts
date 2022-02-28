import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule ], 
    providers: [HomePageComponent]
  }));


  //HomePage Test Case
  it('initially Home page should be displayed', ()=>{
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.componentInstance;
    expect(true).toEqual(app.homePage);
  });
  

});
