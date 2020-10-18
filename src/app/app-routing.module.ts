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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'myteam',
    pathMatch: 'full',
  },
  {
    path: 'macth',
    component: MacthComponent,
  },
  {
    path: 'macth/:mid',
    component: MacthDetailComponent
  },
  {
    path: 'profile/:pid',
    component: ProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'myteam',
    component: MyteamComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
