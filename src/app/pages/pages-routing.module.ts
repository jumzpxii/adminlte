import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MacthComponent } from './macth/macth.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayerComponent } from './player/player.component';
import { PlyerDetailComponent } from './player/plyer-detail/plyer-detail.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { MacthDetailComponent } from './macth/macth-detail/macth-detail.component'
import { MyteamComponent } from './myteam/myteam.component';
import { PagesComponent } from './pages.component';
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'myteam',
        pathMatch: 'full'
      },
      {
        path: 'myteam',
        component: MyteamComponent
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'macth',
        component: MacthComponent,
      },
      {
        path: 'player',
        component: PlayerComponent,
      },
      {
        path: 'player/:pid',
        component: PlyerDetailComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'macth/:mid',
        component: MacthDetailComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
