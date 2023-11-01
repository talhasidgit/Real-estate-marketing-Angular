import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components

import { AppComponent } from './app.component';
import { HomeComponent } from "../components/home/home.component";
import { AboutComponent } from "../components/about/about.component";
import { ContactComponent } from "../components/contact/contact.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { ServicesComponent } from "../components/services/services.component";
import { HeaderComponent } from "../components/header/header.component";
import { ClientsComponent } from '../components/clients/clients.component';
import { PricingComponent } from '../components/pricing/pricing.component';
import { NewsComponent } from '../components/news/news.component';
import { LahoreSmartCityComponent } from "../components/projects/lahore-smart-city/lahore-smart-city.component";
import { CapitalSmartCityComponent } from "../components/projects/capital-smart-city/capital-smart-city.component";
import { ProfileComponent } from '../components/profile/profile.component';
import { TeamComponent } from "../components/team/team.component";

// Moduls
import { AppRoutingModule } from "../app/app-routing.module";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,
    ServicesComponent,
    HeaderComponent,
    ClientsComponent,
    PricingComponent,
    ProfileComponent,
    NewsComponent,
    LahoreSmartCityComponent,
    CapitalSmartCityComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
