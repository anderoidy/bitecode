import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicosComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

