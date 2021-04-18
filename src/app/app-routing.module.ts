import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { MastermoduleComponent } from './mastermodule/mastermodule.component';
import { AccessmanagementComponent } from './accessmanagement/accessmanagement.component';
import { DiseasemanagementComponent } from './diseasemanagement/diseasemanagement.component';
import { SpeciesmanagementComponent } from './speciesmanagement/speciesmanagement.component';
import { BreedsmanagementComponent } from './breedsmanagement/breedsmanagement.component';
import { StockmanagementComponent } from './stockmanagement/stockmanagement.component';
import { VaccinemanagementComponent } from './vaccinemanagement/vaccinemanagement.component';
import { FarmsmanagementComponent } from './farmsmanagement/farmsmanagement.component';
import {AddDiseaseManagementComponent} from './add-disease-management/add-disease-management.component';
import { AddspeciesmanagementComponent } from './addspeciesmanagement/addspeciesmanagement.component';
import { AddbreedsmanagementComponent } from './addbreedsmanagement/addbreedsmanagement.component';
import { AddstockmanagementComponent } from './addstockmanagement/addstockmanagement.component';
import { AddvaccinemanagementComponent } from './addvaccinemanagement/addvaccinemanagement.component';
import { AddfarmsmanagementComponent } from './addfarmsmanagement/addfarmsmanagement.component';

const routes: Routes = [
 { path:'', component: LoginComponent, pathMatch: 'full' },
 {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  children: [
    {
      path:'', // child route path
      component: MastermoduleComponent, // child route component that the router renders
    },
  {
      path:'usermanagement',
      component:UsersManagementComponent, // another child route component that the router renders
    },
    {
      path:'accessmanagement',
      component:AccessmanagementComponent, // another child route component that the router renders
    },
   /* {
      path:'dashboard',
      component:DashboardComponent, // another child route component that the router renders
    },*/
    {
      path:'diseasemanagement',
      component:DiseasemanagementComponent, 
    },
    {
      path:'speciesmanagement',
      component:SpeciesmanagementComponent, // another child route component that the router renders
    },
    {
      path:'breedsmanagement',
      component:BreedsmanagementComponent , // another child route component that the router renders
    },
    {
      path:'stockmanagement',
      component:StockmanagementComponent, // another child route component that the router renders
    },
    {
      path:'vaccinemanagement',
      component:VaccinemanagementComponent, // another child route component that the router renders
    },
    {
      path:'farmsmanagement',
      component:FarmsmanagementComponent , // another child route component that the router renders
    },    
    {
      path:'adddiseasemanagement',
      component:AddDiseaseManagementComponent, // another child route component that the router renders
    }, 
    {
      path:'addspeciesmanagement',
      component:AddspeciesmanagementComponent, // another child route component that the router renders
    }, 
    {
      path:'addbreedsmanagement',
      component:AddbreedsmanagementComponent, // another child route component that the router renders
    }, 
    {
      path:'addstockmanagement',
      component:AddstockmanagementComponent, // another child route component that the router renders
    }, 
    {
      path:'addvaccinemanagement',
      component:AddvaccinemanagementComponent, // another child route component that the router renders
    }, 
    {
      path:'addfarmsmanagement',
      component:AddfarmsmanagementComponent, // another child route component that the router renders
    }, 
  ],
},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[DashboardComponent,LoginComponent,MastermoduleComponent,UsersManagementComponent,AccessmanagementComponent,AddDiseaseManagementComponent,AddspeciesmanagementComponent,AddbreedsmanagementComponent,AddstockmanagementComponent,AddvaccinemanagementComponent,AddfarmsmanagementComponent]