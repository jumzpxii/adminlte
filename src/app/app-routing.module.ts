import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { MacthComponent } from './macth/macth.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayerComponent } from './player/player.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'plan',
    component: PlanComponent,
  },
  {
    path: 'macth',
    component: MacthComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
