import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './private/crud/crud.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { GalleryPageComponent } from './private/gallery/gallery-page/gallery-page.component';
import { ProfileComponent } from './private/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'galeria', component: GalleryPageComponent},
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
