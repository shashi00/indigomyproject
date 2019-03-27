import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideComponent } from './slide/slide.component';
import { BookComponent } from './book/book.component';
import { ManagesComponent } from './manages/manages.component';
import { FaqComponent } from './faq/faq.component';
import { OffersComponent } from './offers/offers.component';
import { SpecialaComponent } from './speciala/speciala.component';
import { ContactComponent } from './contact/contact.component';
import { PloginComponent } from './plogin/plogin.component';
import { PluginComponent } from './plugin/plugin.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';


const Router:Routes=[
  {path:'book',component:BookComponent},
  {path:'faq',component:FaqComponent},
  {path:'login',component:LoginComponent},
  {path:'plogin',component:PloginComponent},
  {path:'manages',component:ManagesComponent},
  {path:'contact',component:ContactComponent},
  {path:'speciala',component:SpecialaComponent},
  {path:'offers',component:OffersComponent},
  {path:'**',component:PagenotfoundComponent}
  
  ]
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    ContactComponent,
    HeaderComponent,
    SlideComponent,
    BookComponent,
    ManagesComponent,
    FaqComponent,
    OffersComponent,
    SpecialaComponent,
    PloginComponent,
    PluginComponent,
    PagenotfoundComponent,
    SliderComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot(Router)
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
