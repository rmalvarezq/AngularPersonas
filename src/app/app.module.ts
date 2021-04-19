import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';
import { LoginComponent } from './components/login/login/login.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/login/dashboard/dashboard.component';
import { AuthService } from './shared/services/auth/auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import { ProductoViewComponent } from './components/productos/producto-view/producto-view.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    VerifyEmailComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    NavbarComponent,
    ProductoCreateComponent,
    ProductoEditComponent,
    ProductoViewComponent,
    // ReactiveFormsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
