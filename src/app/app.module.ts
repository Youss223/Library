import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { BooksService } from './services/books.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { AlertComponent } from './components/alert/alert.component';
import { environment } from 'src/environments/environment';

//angularfire imports

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guard/auth.guard';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';




const appRoutes: Routes = [
  /*{ path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},*/
 /* { path: 'sign-in', component: SigninComponent },
  { path: 'register-user', component: SignupComponent },
  { path: 'books',  component: BookListComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'management',  component: ManagementComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }*/
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
    AlertComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    FooterComponent,
    HomeComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    //AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
