import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IntegranteComponent } from './pages/integrante/integrante.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'quienes-somos/:id', component: IntegranteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
