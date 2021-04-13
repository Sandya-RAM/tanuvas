import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { MastermoduleComponent } from './mastermodule/mastermodule.component';
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
  ],
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[DashboardComponent,LoginComponent,MastermoduleComponent,UsersManagementComponent]