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

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    VerifyEmailComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
