import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConversorDeMoedasComponent } from './pages/conversor-de-moedas/conversor-de-moedas.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'conversor', component: ConversorDeMoedasComponent},
  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
