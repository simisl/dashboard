import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: ()=> import('./register/register.module').then(m => m.RegisterModule),
    canActivate: [AuthGuard]
  },
  {
    path:'home',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
