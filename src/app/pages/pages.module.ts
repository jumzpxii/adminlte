import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../pages/layout/header/header.component';
import { FooterComponent } from '../pages/layout/footer/footer.component';
import { MenuComponent } from '../pages/layout/menu/menu.component';
import { MacthComponent } from '../pages/macth/macth.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { PlayerComponent } from '../pages/player/player.component';
import { RegisterComponent } from '../pages/register/register.component';
import { CreateComponent } from '../pages/create/create.component';
import { MacthDetailComponent } from '../pages/macth/macth-detail/macth-detail.component';
import { MyteamComponent } from '../pages/myteam/myteam.component';
import { PlyerDetailComponent } from './player/plyer-detail/plyer-detail.component';


@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MacthComponent,
    ProfileComponent,
    PlayerComponent,
    RegisterComponent,
    CreateComponent,
    MacthDetailComponent,
    MyteamComponent,
    PlyerDetailComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    ChartsModule,
    DateInputsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
    }),
    // BrowserAnimationsModule,
    // BrowserModule,
    DataTablesModule
  ]
})
export class PagesModule { }
