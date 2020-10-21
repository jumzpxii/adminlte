import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MacthComponent } from './macth/macth.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayerComponent } from './player/player.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { MacthDetailComponent } from './macth/macth-detail/macth-detail.component'
import { MyteamComponent } from './myteam/myteam.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'myteam',
  //   pathMatch: 'full',
  // },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'macth',
    component: MacthComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'macth/:mid',
    component: MacthDetailComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'profile/:pid',
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'player',
    component: PlayerComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
