import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/login/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login/login.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import { ProductoViewComponent } from './components/productos/producto-view/producto-view.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: SignUpComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  // Productos
  {
    path: 'product-create',
    component: ProductoCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product-edit',
    component: ProductoEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product-view',
    component: ProductoViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
