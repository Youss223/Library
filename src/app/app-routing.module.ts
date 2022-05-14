import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [

  { path: 'sign-in', component: SigninComponent },
  { path: 'register-user', component: SignupComponent },
  { path: 'dashboard', canActivate: [AuthGuardService] , component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'books',  component: BookListComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'management', canActivate: [AuthGuardService] ,  component: ManagementComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
