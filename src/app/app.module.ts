import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanComponent } from './plan/plan.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MacthComponent } from './macth/macth.component';
import { ChartsModule } from 'ng2-charts';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    PlanComponent,
    MacthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    ChartsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
