import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataTablesModule } from 'angular-datatables';
import { AddDiseaseManagementComponent } from './add-disease-management/add-disease-management.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    NavbarComponent,
    SidebarComponent,
    AddDiseaseManagementComponent,
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
