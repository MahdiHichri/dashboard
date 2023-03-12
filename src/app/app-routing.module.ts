import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinesComponent } from './Components/cabines/cabines.component';
import { CommandesComponent } from './Components/commandes/commandes.component';
import { HomeComponent } from './Components/home/home.component';
import { TableComponent } from './Components/table/table.component';
import { VendeursComponent } from './Components/vendeurs/vendeurs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Vendeurs', component: VendeursComponent },
  { path: 'Cabines', component: CabinesComponent },
  { path: 'Commandes', component: CommandesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
