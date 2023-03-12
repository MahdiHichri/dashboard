import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { HomeComponent } from './Components/home/home.component';
import { TableComponent } from './Components/table/table.component';
import { CabinesComponent } from './Components/cabines/cabines.component';
import { VendeursComponent } from './Components/vendeurs/vendeurs.component';
import { CommandesComponent } from './Components/commandes/commandes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    HomeComponent,
    TableComponent,
    CabinesComponent,
    VendeursComponent,
    CommandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
