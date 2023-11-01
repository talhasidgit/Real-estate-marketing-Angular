import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { LahoreSmartCityComponent } from 'src/components/projects/lahore-smart-city/lahore-smart-city.component';
import { CapitalSmartCityComponent } from 'src/components/projects/capital-smart-city/capital-smart-city.component';
import { TeamComponent } from 'src/components/team/team.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'lahore-smart-city', component: LahoreSmartCityComponent },
  { path: 'capital-smart-city', component: CapitalSmartCityComponent },
  { path: 'team', component: TeamComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
