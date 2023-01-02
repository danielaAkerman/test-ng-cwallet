import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IntegranteComponent } from './pages/integrante/integrante.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    QuienesSomosComponent,
    NotFoundComponent,
    IntegranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
