import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./pages/pages.module').then(m=>m.PagesModule),
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  // {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
