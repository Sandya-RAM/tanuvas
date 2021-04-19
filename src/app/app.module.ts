import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataTablesModule } from 'angular-datatables';
import { ViewspeciesmanagementComponent } from './viewmodulemanagement/viewspeciesmanagement/viewspeciesmanagement.component';
import { ViewbreedsmanagementComponent } from './viewmodulemanagement/viewbreedsmanagement/viewbreedsmanagement.component';
import { ViewstockmanagementComponent } from './viewmodulemanagement/viewstockmanagement/viewstockmanagement.component';
import { ViewvaccinemanagementComponent } from './viewmodulemanagement/viewvaccinemanagement/viewvaccinemanagement.component';
import { ViewfarmsmanagementComponent } from './viewmodulemanagement/viewfarmsmanagement/viewfarmsmanagement.component';
import { ViewdiseasemanagementComponent } from './viewmodulemanagement/viewdiseasemanagement/viewdiseasemanagement.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    NavbarComponent,
    SidebarComponent,
    ViewspeciesmanagementComponent,
    ViewbreedsmanagementComponent,
    ViewstockmanagementComponent,
    ViewvaccinemanagementComponent,
    ViewfarmsmanagementComponent,
    ViewdiseasemanagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
